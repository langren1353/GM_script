// ==UserScript==
// @name            ACModel
// @description     一个模拟Vue的简单MVVM库，使用的defineProperty实现
// @namespace       acdiao.com
// @version         1.2
// @include         *
// @copyright       2020, AC
// @note            2020.07.18-V1.2 用不来proxy，转回原来的defineProperty
// @note            2020.07.17-V1.1 修复v-bind语句，同时使用proxy
// @note            2020.07.17-V1.0 第一版本
// @note            https://github.com/dingxingxing/Storage-of-record-documents/tree/master/Vue/MVVM%E5%AE%9E%E7%8E%B0%E4%BB%A3%E7%A0%81
// ==/UserScript==
var ACModel = function(options){
    // 先创建一个MVue类,它是一个入口
    class MVue {
        constructor(options) {
            this.$el = options.el;
            this.$data = options.data;
            //保存 options参数,后面处理数据要用到
            this.$options = options;
            // 如果这个根元素存在则开始编译模板
            if (this.$el) {
                // 1.实现一个指令解析器compile
                new Observer(this.$data)
                // 把数据获取操作 vm上的取值操作 都代理到vm.$data上
                this.proxyData(this.$data);
                // 2.实现一个指令解析器Compile
                new Compile(this.$el, this)
            }
        }
        // 做个代理
        proxyData(data){
            for (const key in data) {
              Object.defineProperty(this,key,{
                get(){
                  return data[key];
                },
                set(newVal){
                  data[key] = newVal;
                }
              })
            }
            // let proxy = new Proxy(data, {
            //     get(target,key) {
            //         return Reflect.get(target, key)
            //     },
            //     set(target,key,newVal) {
            //         return Reflect.set(target, key, newVal)
            //     }
            // })
            // Object.assign(this, proxy)
        }
    }
    // 定义一个Compile类解析元素节点和指令
    class Compile {
        constructor(el, vm) {
            // 判断el是否是元素节点对象，不是就通过DOM获取
            this.el = this.isElementNode(el) ? el : document.querySelector(el)
            this.vm = vm
            // 1.获取文档碎片对象，放入内存中可以减少页面的回流和重绘
            const fragment = this.node2Fragment(this.el)

            // 2.编辑模板
            this.compile(fragment)

            // 3.追加子元素到根元素(还原页面)
            this.el.appendChild(fragment)
        }

        // 将元素插入到文档碎片中
        node2Fragment(el) {
            const f = document.createDocumentFragment();
            let firstChild
            while(firstChild = el.firstChild) {
                // appendChild
                // 将已经存在的节点再次插入，那么原来位置的节点自动删除，并在新的位置重新插入。
                f.appendChild(firstChild)
            }
            // 此处执行完，页面已经没有元素节点了
            return f
        }

        // 解析模板
        compile(fragment) {
            // 1.获取子节点
            const childNodes = fragment.childNodes;
            [...childNodes].forEach(child => {
                if(this.isElementNode(child)) {
                    // 是元素节点
                    // 编译元素节点
                    this.compileElement(child)
                } else {
                    // 文本节点
                    // 编译文本节点
                    this.compileText(child)
                }

                // 嵌套子节点进行遍历解析
                if(child.childNodes && child.childNodes.length) {
                    this.compile(child)
                }
            })
        }

        // 判断是元素节点还是属性节点
        isElementNode(node) {
            // nodeType属性返回 以数字值返回指定节点的节点类型。1-元素节点 2-属性节点
            return node.nodeType === 1
        }

        // 编译元素节点
        compileElement(node) {
            // 获得元素属性集合
            const attributes = node.attributes;
            [...attributes].forEach(attr => {
                const {name, value} = attr
                if(this.isDirective(name)) { // 判断属性是不是以v-开头的指令
                    // 解析指令（v-mode v-text v-on:click 等...）
                    const [, dirctive] = name.split('-')
                    const [dirName, eventName] = dirctive.split(':')
                    // 初始化视图 将数据渲染到视图上
                    compileUtil[dirName](node, value, this.vm, eventName)

                    // 删除有指令的标签上的属性
                    node.removeAttribute('v-' + dirctive)
                } else if (this.isEventName(name)) { //判断属性是不是以@开头的指令
                    // 解析指令
                    let [, eventName] = name.split('@')
                    compileUtil['on'](node, value, this.vm, eventName)

                    // 删除有指令的标签上的属性
                    node.removeAttribute('@' + eventName)
                } else if(this.isBindName(name)) { //判断属性是不是以:开头的指令
                    // 解析指令
                    let [, attrName] = name.split(':')
                    compileUtil['bind'](node, value, this.vm, attrName)

                    // 删除有指令的标签上的属性
                    node.removeAttribute(':' + attrName)
                }
            })
        }

        // 编译文本节点
        compileText(node) {
            const content = node.textContent
            if(/\{\{(.+?)\}\}/.test(content)) {
                compileUtil['text'](node, content, this.vm)
            }
        }

        // 判断属性是不是指令
        isDirective(attrName) {
            return attrName.startsWith('v-')
        }
        // 判断属性是不是以@开头的事件指令
        isEventName(attrName) {
            return attrName.startsWith('@')
        }
        // 判断属性是不是以:开头的事件指令
        isBindName(attrName) {
            return attrName.startsWith(':')
        }
    }
    // 定义一个观察者
    class watcher {
        constructor(vm, expre, cb) {
            this.vm = vm
            this.expre = expre
            this.cb =cb
            // 把旧值保存起来
            this.oldVal = this.getOldVal()
        }
        // 获取旧值
        getOldVal() {
            // 将watcher放到targe值中
            Dep.target = this
            // 获取旧值
            const oldVal = compileUtil.getVal(this.expre, this.vm)
            // 将target值清空
            Dep.target = null
            return oldVal
        }
        // 更新函数
        update() {
            const newVal =  compileUtil.getVal(this.expre, this.vm)
            if(newVal !== this.oldVal) {
                this.cb(newVal)
            }
        }
    }
    // 定义一个观察者集合
    class Dep {
        constructor() {
            this.subs = []
        }
        // 收集观察者
        addSub(watcher) {
            this.subs.push(watcher)
        }
        //通知观察者去更新
        notify() {
            this.subs.forEach(w => w.update())
        }
    }
    // 定义一个Observer类通过gettr，setter实现数据的监听绑定
    class Observer {
        constructor(data) {
            this.observer(data)
        }

        // 定义函数解析data,实现数据劫持
        observer (data) {
            if(data && typeof data === 'object') {
                // 是对象遍历对象写入getter，setter方法
                Object.keys(data).forEach(key => {
                    this.defineReactive(data, key, data[key]);
                })
            }
        }

        // 数据劫持方法
        defineReactive(obj, key, value) {
            // 递归遍历
            this.observer(value)
            // 实例化一个dep对象
            const dep = new Dep()
            // 通过ES5的API实现数据劫持
            Object.defineProperty(obj, key, {
                enumerable: true,
                configurable: false,
                get() {
                    // 当读当前值的时候，会触发。
                    // 订阅数据变化时，往Dep中添加观察者
                    Dep.target && dep.addSub(Dep.target)
                    return value
                },
                set: (newValue) => {
                    // 对新数据进行劫持监听
                    if(newValue !== value) {
                        this.observer(newValue)
                        value = newValue
                    }
                    // 告诉dep通知变化
                    dep.notify()
                }
            });

            // let _this = this;
            // // 尝试通过ES6的API实现数据劫持
            // let proxy = new Proxy(obj, {
            //   get(target, key){
            //     // 当读当前值的时候，会触发。
            //     // 订阅数据变化时，往Dep中添加观察者
            //     Dep.target && dep.addSub(Dep.target)
            //     return Reflect.get(target, key);
            //   },
            //   set(target, key, newVal){
            //     if(newVal !== value){
            //       _this.observer(newVal);
            //       value = newVal;
            //     }
            //     dep.notify();
            //     // return Reflect.set(target, key, newVal);
            //   }
            // });
            // Object.assign(_this, proxy);
        }

    }

    // 定义一个对象，针对不同指令执行不同操作
    const compileUtil = {
        // 解析参数(包含嵌套参数解析)，获取其对应的值
        getVal(expre, vm) {
            return expre.split('.').reduce((data, currentVal) => {
                return data[currentVal]
            }, vm.$data)
        },
        // 获取当前节点内参数对应的值
        getgetContentVal(expre,vm) {
            return expre.replace(/\{\{(.+?)\}\}/g, (...arges) => {
                return this.getVal(arges[1], vm)
            })
        },
        // 设置新值
        setVal(expre, vm, inputVal) {
            return expre.split('.').reduce((data, currentVal) => {
                return data[currentVal] = inputVal
            }, vm.$data)
        },

        // 指令解析：v-text
        text(node, expre, vm) {
            let value;
            if(expre.indexOf('{{') !== -1) {
                // 正则匹配{{}}里的内容
                value = expre.replace(/\{\{(.+?)\}\}/g, (...arges) => {

                    // new watcher这里相关的先可以不看，等后面讲解写到观察者再回头看。这里是绑定观察者实现     的效果是通过改变数据会触发视图，即数据=》视图。
                    // 没有new watcher 不影响视图初始化(页面参数的替换渲染)。
                    // 订阅数据变化，绑定更新函数。
                    new watcher(vm, arges[1], () => {
                        // 确保 {{person.name}}----{{person.fav}} 不会因为一个参数变化都被成新值
                        this.updater.textUpdater(node, this.getgetContentVal(expre,vm))
                    })

                    return this.getVal(arges[1],vm)
                })
            } else {
                // 同上，先不看
                // 数据=》视图
                new watcher(vm, expre, (newVal) => {
                    // 找不到{}说明是test指令，所以当前节点只有一个参数变化，直接用回调函数传入的新值
                    this.updater.textUpdater(node, newVal)
                })

                value = this.getVal(expre,vm)
            }

            // 将数据替换，更新到视图上
            this.updater.textUpdater(node,value)
        },
        //指令解析： v-html
        html(node, expre, vm) {
            const value = this.getVal(expre, vm);

            // 同上，先不看
            // 绑定观察者 数据=》视图
            new watcher(vm, expre, (newVal) => {
                this.updater.htmlUpdater(node, newVal)
            });

            // 将数据替换，更新到视图上
            this.updater.htmlUpdater(node, value)
        },
        // 指令解析：v-mode
        model(node,expre, vm) {
            const value = this.getVal(expre, vm)

            // 同上，先不看
            // 绑定观察者 数据=》视图
            new watcher(vm, expre, (newVal) => {
                this.updater.modelUpdater(node, newVal)
            })

            // input框  视图=》数据=》视图
            node.addEventListener('input', (e) => {
                //设置新值 - 将input值赋值到v-model绑定的参数上
                this.setVal(expre, vm, e.target.value)
            })
            // 将数据替换，更新到视图上
            this.updater.modelUpdater(node, value)
        },
        // 指令解析： v-on
        on(node, expre, vm, eventName) {
            // 或者指令绑定的事件函数
            let fn = vm.$options.methods && vm.$options.methods[expre]
            // 监听函数并调用
            node.addEventListener(eventName,fn.bind(vm),false)
        },
        // 指令解析： v-
        bind(node, expre, vm, attrName) {
            const value = this.getVal(expre, vm)
            this.updater.bindUpdate(node, attrName, value)
        },
        // updater对象，管理不同指令对应的更新方法
        updater: {
            // v-text指令对应更新方法
            textUpdater(node, value) {
                node.textContent = value
            },
            // v-html指令对应更新方法
            htmlUpdater(node, value) {
                node.innerHTML = value
            },
            // v-model指令对应更新方法
            modelUpdater(node,value) {
                node.value = value
            },
            // v-bind指令对应更新方法
            bindUpdate(node, attrName, value) {
                node[attrName] = value; // 不知道为什么要这么写
                node.setAttribute(attrName, value); // 不知道为什么要这么写
            }
        },
    }

    return new MVue(options)
}
