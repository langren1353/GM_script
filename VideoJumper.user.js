// ==UserScript==
// @name        AC-html5视频广告加速器
// @description 视频速度加速器，遇到html5的视频进度广告的时候，按下 alt+0 步进广告，最好预留几秒。必须配合“计时器掌控者”一起食用
// @namespace   K
// @include     *
// @version     1.7
// @note        2020-07-12-V1.7 优化，加速-减速的范围和速度
// @note        2020-07-12-V1.6 新增，youtube视频的自动加速
// @note        2020-01-04-V1.5 修复：谷歌的视频小广告没有自动点击掉
// @note        2020-01-04-V1.4 修复上次加上的代码导致的加速后没有自动恢复的问题 && 修复加速速度不正常的问题 && 修复youtube的广告没有正常跳过的问题
// @note        2019-12-31-V1.3 尝试自动点击跳过youtube的广告
// @note        2019-11-29-V1.2 设置默认为30Hz的，
// @run-at      document-start
// @require     https://greasyfork.org/scripts/372672-everything-hook/code/Everything-Hook.js?version=784972
// @grant       none
// ==/UserScript==

'use strict';

function initHook() {
  (function (global, factory) {


    "use strict";

    if (typeof module === "object" && typeof module.exports === "object") {

      // For CommonJS and CommonJS-like environments where a proper `window`
      // is present, execute the factory and get jQuery.
      // For environments that do not have a `window` with a `document`
      // (such as Node.js), expose a factory as module.exports.
      // This accentuates the need for the creation of a real `window`.
      // e.g. var jQuery = require("jquery")(window);
      // See ticket #14549 for more info.
      module.exports = global.document ?
        factory(global, true) :
        function (w) {
          if (!w.document) {
            throw new Error("eUtils requires a window with a document");
          }
          return factory(w);
        };
    } else {
      factory(global);
    }

  }(typeof window !== "undefined" ? window : this, function (_global, noGlobal) {

    // base
    var BaseUtils = {
      /**
       * 对象是否为数组
       * @param arr
       */
      isArray: function (arr) {
        return Array.isArray(arr) || Object.prototype.toString.call(arr) === "[object Array]";
      },
      /**
       * 判断是否为方法
       * @param func
       * @return {boolean}
       */
      isFunction: function (func) {
        if (!func) {
          return false;
        }
        return typeof func === 'function';
      },
      /**
       * 判断是否是一个有效的对象
       * @param obj
       * @return {*|boolean}
       */
      isExistObject: function (obj) {
        return obj && (typeof obj === 'object');
      },
      isString: function (str) {
        if (str === null) {
          return false;
        }
        return typeof str === 'string';
      },
      uniqueNum: 1000,
      /**
       * 根据当前时间戳生产一个随机id
       * @returns {string}
       */
      buildUniqueId: function () {
        var prefix = new Date().getTime().toString();
        var suffix = this.uniqueNum.toString();
        this.uniqueNum++;
        return prefix + suffix;
      },
      keys: function (obj) {
        var results = [];
        for (var key in obj) {
          results.push(key);
        }
        return results;
      }
    };

    //
    var serviceProvider = {
      _parseDepends: function (depends) {
        var dependsArr = [];
        if (!BaseUtils.isArray(depends)) {
          return;
        }
        depends.forEach(function (depend) {
          if (BaseUtils.isString(depend)) {
            dependsArr.push(serviceProvider[depend.toLowerCase()]);
          }
        });
        return dependsArr;
      }
    };

    //
    var factory = function (name, depends, construction) {
      if (!BaseUtils.isFunction(construction)) {
        return;
      }
      serviceProvider[name.toLowerCase()] = construction.apply(this, serviceProvider._parseDepends(depends));
    };

    var depend = function (depends, construction) {
      if (!BaseUtils.isFunction(construction)) {
        return;
      }
      construction.apply(this, serviceProvider._parseDepends(depends));
    };

    factory('BaseUtils', [], function () {
      return BaseUtils;
    });

    // logger
    factory('logger', [], function () {
      return console;
    });

    // DateTimeUtils
    factory('DateTimeUtils', ['logger'], function (logger) {
      return {
        /**
         * 打印当前时间
         */
        printNowTime: function () {
          var date = new Date();
          console.log(this.pattern(date, 'hh:mm:ss:S'));
        },
        /**
         * 格式化日期
         * @param date
         * @param fmt
         * @returns {*}
         */
        pattern: function (date, fmt) {
          var o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, //小时
            "H+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
          };
          var week = {
            "0": "/u65e5",
            "1": "/u4e00",
            "2": "/u4e8c",
            "3": "/u4e09",
            "4": "/u56db",
            "5": "/u4e94",
            "6": "/u516d"
          };
          if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
          }
          if (/(E+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[date.getDay() + ""]);
          }
          for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
              fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
          }
          return fmt;
        },
        /**
         * 以当前时间获取id
         * @returns {number}
         */
        getCurrentId: function () {
          var date = new Date();
          return date.getTime();
        },
        /**
         * 获取指定时间距离现在相差多久
         * @param date {number|Date}
         * @param isCeil{boolean=} 是否对结果向上取整，默认[false]
         * @param type {string=} 单位可取值['day','month','year']默认'day'
         * @returns {number}
         */
        getNowBetweenADay: function (date, isCeil, type) {
          if (!type) {
            type = 'day'
          }
          if (typeof date === 'number') {
            date = new Date(date);
          }
          if (!(date instanceof Date)) {
            throw new TypeError('该参数类型必须是Date')
          }
          var time = date.getTime();
          var now = new Date();
          var nowTime = now.getTime();
          if (nowTime - time < 0) {
            logger.warn('需要计算的时间必须在当前时间之前');
          }
          var result = 0;
          switch (type) {
            default:
            case 'day':
              result = (nowTime - time) / (1000 * 60 * 60 * 24);
              break;
            case 'month':
              var yearDifference = now.getFullYear() - date.getFullYear();
              if (yearDifference > 0) {
                result += yearDifference * 12;
              }
              result += now.getMonth() - date.getMonth();
              break;
            case 'year':
              result += now.getFullYear() - date.getFullYear();
              break;
          }
          if (!isCeil) {
            return Math.floor(result);
          } else {
            if (result === 0 && isCeil) {
              result = 1;
            }
            return Math.ceil(result);
          }
        }
      }
    });

    // ArrayUtils
    factory('ArrayUtils', ['BaseUtils'], function (BaseUtils) {
      return {
        isArrayObject: function (arr) {
          return BaseUtils.isArray(arr);
        },
        /**
         * 遍历数组
         * @param context {Object}
         * @param arr {Array}
         * @param cb {Function} 回调函数
         */
        ergodicArrayObject: function (context, arr, cb) {
          if (!context) {
            context = window;
          }
          if (!BaseUtils.isArray(arr) || !BaseUtils.isFunction(cb)) {
            return;
          }
          for (var i = 0; i < arr.length; i++) {
            var result = cb.call(context, arr[i], i);
            if (result && result === -1) {
              break;
            }
          }
        },
        /**
         * 获取数组对象的一个属性发起动作
         * @param context {Object}
         * @param arr {Array}
         * @param propertyName {String}
         * @param cb {Function}
         * @param checkProperty {boolean} 是否排除不拥有该属性的对象[default:true]
         */
        getPropertyDo: function (context, arr, propertyName, cb, checkProperty) {
          if (checkProperty === null) {
            checkProperty = true;
          }
          this.ergodicArrayObject(context, arr, function (ele) {
            if (!checkProperty || ele.hasOwnProperty(propertyName)) {
              cb.call(context, ele[propertyName], ele);
            }
          })
        },
        /**
         * [私有方法]将多个键值对对象转换为map
         * @param arr {Array}
         * @returns {{}}
         */
        parseKeyValue: function (arr) {
          var map = {};
          if (!(BaseUtils.isArray(arr))) {
            return map;
          }
          this.ergodicArrayObject(this, arr, function (ele) {
            if (ele.key === null) {
              return;
            }
            if (!map.hasOwnProperty(ele.key)) {
              map[ele.key] = ele.value;
            }
          });
          return map;
        },
        /**
         * 获取数组的哈希码
         * @param arr {Array}
         * @returns {number}
         */
        getHashCode: function (arr) {
          var str = arr.toString();
          var hash = 31;
          if (str.length === 0) return hash;
          for (var i = 0; i < str.length; i++) {
            var char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
          }
          return hash;
        },
        /**
         * 通过数组中每个对象的指定属性生成一个新数组
         * @param arr {Array}
         * @param propertyName {String}
         */
        parseArrayByProperty: function (arr, propertyName) {
          var result = [];
          if (!this.isArrayObject(arr)) {
            return result;
          }
          this.getPropertyDo(this, arr, propertyName, function (value) {
            result.push(value);
          }, true);
          return result;
        },
        /**
         * 数组对象是否包含一个对象
         * @param arr {Array}
         * @param obj
         * @param cb {function=}
         * @returns {boolean}
         */
        isContainsObject: function (arr, obj, cb) {
          var isContainsObject = false;
          this.ergodicArrayObject(this, arr, function (value, i) {
            if (obj === value) {
              isContainsObject = true;
              if (BaseUtils.isFunction(cb)) {
                cb.call(window, i);
              }
              return -1;
            }
          });
          return isContainsObject;
        },
        /**
         * 获取数组中的最大值
         * @param arr 若数组中的对象还是数组，则按里面数组的每个对象进行多级比较
         * @param cb
         * @returns {*}
         */
        getMaxInArray: function (arr, cb) {
          var maxObject = null;
          var maxIndex = -1;
          while (maxObject === null && maxIndex < arr.length) {
            maxObject = arr[++maxIndex]
          }
          for (var i = maxIndex + 1; i < arr.length; i++) {
            // 若是比较对象都是数组，则对每个数组的第一个元素进行比较，若相同，则比较第二个元素
            if (maxObject !== null && this.isArrayObject(maxObject) && this.isArrayObject(arr[i])) {
              var classLength = maxObject.length;
              var classLevel = 0;
              // console.log(maxObject[classLevel],arr[i][classLevel]);
              while (maxObject[classLevel] === arr[i][classLevel] && classLevel < classLength) {
                classLevel++
              }
              if (maxObject[classLevel] !== null && maxObject[classLevel] < arr[i][classLevel]) {
                maxObject = arr[i];
                maxIndex = i;
              }
              continue;
            }
            if (maxObject !== null && maxObject < arr[i]) {
              maxObject = arr[i];
              maxIndex = i;
            }
          }
          if (BaseUtils.isFunction(cb)) {
            cb.call(this, maxObject, maxIndex);
          }
          return maxObject;
        },
        /**
         * 获取数组中的总值
         * @param arr{Array<number>}
         * @param cb {function=}
         */
        getSumInArray: function (arr, cb) {
          if (!this.isArrayObject(arr)) {
            return;
          }
          var sum = 0;
          var count = 0;
          this.ergodicArrayObject(this, arr, function (value) {
            if (typeof value === 'number' && !Number.isNaN(value)) {
              sum += value;
              count += 1;
            }
          });
          if (BaseUtils.isFunction(cb)) {
            cb.call(window, sum, count);
          }
          return sum;
        },
        /**
         * 获取数组中的平均值
         * @param arr{Array<number>}
         */
        getAverageInArray: function (arr) {
          var average = 0;
          this.getSumInArray(arr, function (sum, i) {
            i === 0 || (average = sum / i);
          });
          return average;
        },
        /**
         * 为数组排序
         * @param arr
         * @param order
         * @param sortSetting {object=}
         */
        sortingArrays: function (arr, order, sortSetting) {
          if (!this.isArrayObject(arr)) {
            return;
          }
          var DESC = 0;
          var ASC = 1;
          var thisArr = arr.slice(0);
          var _thisAction = null;
          // 解析配置
          var isSetting = sortSetting && sortSetting.getComparedProperty &&
            BaseUtils.isFunction(sortSetting.getComparedProperty);
          if (isSetting) {
            thisArr = sortSetting.getComparedProperty(arr);
          }
          switch (order) {
            default :
            case DESC:
              _thisAction = thisArr.push;
              break;
            case ASC:
              _thisAction = thisArr.unshift;
              break;
          }
          var resultArr = [];
          for (var j = 0; j < thisArr.length; j++) {
            this.getMaxInArray(thisArr, function (max, i) {
              delete thisArr[i];
              _thisAction.call(resultArr, arr[i]);
            });
          }
          if (sortSetting && sortSetting.createNewData) {
            return resultArr.slice(0);
          }
          return resultArr;
        },
        /**
         * 将类数组转化为数组
         * @param arrLike 类数组对象
         */
        toArray: function (arrLike) {
          if (!arrLike || arrLike.length === 0) {
            return [];
          }
          // 非伪类对象，直接返回最好
          if (!arrLike.length) {
            return arrLike;
          }
          // 针对IE8以前 DOM的COM实现
          try {
            return [].slice.call(arrLike);
          } catch (e) {
            var i   = 0,
                j   = arrLike.length,
                res = [];
            for (; i < j; i++) {
              res.push(arrLike[i]);
            }
            return res;
          }
        },
        /**
         * 判断是否为类数组
         * @param o
         * @returns {boolean}
         */
        isArrayLick: function (o) {
          if (o &&                                // o is not null, undefined, etc.
            typeof o === 'object' &&            // o is an object
            isFinite(o.length) &&               // o.length is a finite number
            o.length >= 0 &&                    // o.length is non-negative
            o.length === Math.floor(o.length) &&  // o.length is an integer
            o.length < 4294967296)              // o.length < 2^32
            return true;                        // Then o is array-like
          else
            return false;                       // Otherwise it is not

        },
        /**
         * 判断数组是否包含对象
         * @param arr
         * @param obj
         */
        contains: function (arr, obj) {
          var contains = false;
          this.ergodicArrayObject(this, arr, function (a) {
            if (a === obj) {
              contains = true;
              return -1;
            }
          });
          return contains;
        }
      }
    });

    // ObjectUtils
    factory('ObjectUtils', ['ArrayUtils', 'BaseUtils'], function (ArrayUtils, BaseUtils) {
      return {
        /**
         * 获取对象属性[支持链式表达式,如获取学生所在班级所在的学校(student.class.school):'class.school']
         * @param obj
         * @param linkProperty {string|Array} 属性表达式，获取多个属性则用数组
         * @param cb {function=}
         * @return 对象属性
         */
        readLinkProperty: function (obj, linkProperty, cb) {
          var callback = null;
          if (BaseUtils.isFunction(cb)) {
            callback = cb;
          }
          if (typeof linkProperty === 'string') {
            // 除去所有的空格
            linkProperty = linkProperty.replace(/ /g, '');
            // 不判断为空的值
            if (linkProperty === '') {
              return null;
            }
            // 若是以','隔开的伪数组，则转化为数组再进行操作
            if (linkProperty.indexOf(',') !== -1) {
              var propertyNameArr = linkProperty.split(',');
              return this.readLinkProperty(obj, propertyNameArr, callback);
            }
            if (linkProperty.indexOf('.') !== -1) {
              var names = linkProperty.split('.');
              var iterationObj = obj;
              var result = null;
              ArrayUtils.ergodicArrayObject(this, names, function (name, i) {
                iterationObj = this.readLinkProperty(iterationObj, name);
                if (names[names.length - 1] === name && names.length - 1 === i) {
                  result = iterationObj;
                  if (callback) {
                    callback.call(window, result, linkProperty);
                  }
                }
                // 终止对接下来的属性的遍历
                if (typeof iterationObj === 'undefined') {
                  return -1;
                }
              });
              return result;
            }
            var normalResult = null;
            if (linkProperty.slice(linkProperty.length - 2) === '()') {
              var func = linkProperty.slice(0, linkProperty.length - 2);
              normalResult = obj[func]();
            } else {
              normalResult = obj[linkProperty];
            }
            if (normalResult === null) {
              console.warn(obj, '的属性[\'' + linkProperty + '\']值未找到');
            }
            if (callback) {
              callback.call(window, normalResult, linkProperty);
            }
            return normalResult;
          }
          if (BaseUtils.isArray(linkProperty)) {
            var results = [];
            ArrayUtils.ergodicArrayObject(this, linkProperty, function (name) {
              var value = this.readLinkProperty(obj, name);
              results.push(value);
              if (callback && name !== '') {
                return callback.call(window, value, name);
              }
            });
            results.isMultipleResults = true;
            return results;
          }
        },
        /**
         * 为对象属性赋值
         * （同一个对象中不能够既有数字开头的属性名和普通属性名）
         * @param obj
         * @param linkProperty {string|Array} 属性表达式，多个属性则用数组
         * @param value
         */
        createLinkProperty: function (obj, linkProperty, value) {
          if (obj === null) {
            obj = {};
          }
          if (typeof linkProperty === 'string') {
            // 除去所有的空格
            linkProperty = linkProperty.replace(/ /g, '');
            // 不判断为空的值
            if (linkProperty === '') {
              throw new TypeError('对象属性名不能为空')
            }
            if (linkProperty.indexOf(',') !== -1) {
              var propertyNameArr = linkProperty.split(',');
              this.createLinkProperty(obj, propertyNameArr, value);
              return obj;
            }
            if (linkProperty.indexOf('.') !== -1) {
              var names = linkProperty.split('.');
              if (!obj.hasOwnProperty(names[0])) {
                obj[names[0]] = {}
              }
              // 判断属性名是否以数字开头（若是代表是一个数组）
              if (!Number.isNaN(parseInt(names[0]))) {
                if (!ArrayUtils.isArrayObject(obj)) {
                  obj = [];
                }
              }
              var propertyObj = obj[names[0]];
              var newProperties = names.slice(1, names.length);
              var newLinkProperty = '';
              ArrayUtils.ergodicArrayObject(this, newProperties, function (property, i) {
                if (i < newProperties.length - 1) {
                  newLinkProperty = newLinkProperty + property + '.'
                } else {
                  newLinkProperty = newLinkProperty + property;
                }
              });
              obj[names[0]] = this.createLinkProperty(propertyObj, newLinkProperty, value);
              return obj;
            }
            // 判断属性名是否以数字开头（若是代表是一个数组）
            if (!Number.isNaN(parseInt(linkProperty))) {
              if (!ArrayUtils.isArrayObject(obj)) {
                obj = [];
              }
            }
            obj[linkProperty] = value;
            return obj;
          } else if (BaseUtils.isArray(linkProperty)) {
            ArrayUtils.ergodicArrayObject(this, linkProperty, function (link) {
              obj = this.createLinkProperty(obj, link, value);
            });
            return obj;
          }
        },
        /**
         * 遍历对象属性
         * @param context {object} 上下文
         * @param obj {object} 遍历对象
         * @param cb {function} 回调函数
         * @param isReadInnerObject {boolean=} 是否遍历内部对象的属性
         */
        ergodicObject: function (context, obj, cb, isReadInnerObject) {
          var keys = BaseUtils.keys(obj);
          ArrayUtils.ergodicArrayObject(this, keys, function (propertyName) {
            // 若内部对象需要遍历
            var _propertyName = propertyName;
            if (isReadInnerObject && obj[propertyName] !== null && typeof obj[propertyName] === 'object') {
              this.ergodicObject(this, obj[propertyName], function (value, key) {
                return cb.call(context, value, _propertyName + '.' + key);
              }, true)
            } else {
              return cb.call(context, obj[propertyName], propertyName);
            }
          })
        },
        /**
         * 当指定属性为空或不存在时执行回到函数；
         * @param context {object} 上下文
         * @param obj {object} 检测对象
         * @param propertyNames{Array|string} 需要检测的属性名
         *                                     可以检查多级属性如:'a.b.c.e'，
         *                                     多个属性使用数组，支持纯字符串多个属性用','隔开
         * @param cb {function} 回调函数[参数：为空或不存在的属性名,返回值为'-1'时，跳过之后的回调函数]
         */
        whileEmptyObjectProperty: function (context, obj, propertyNames, cb) {
          // 解析单个属性名
          if (typeof propertyNames === 'string') {
            // 除去所有的空格
            propertyNames = propertyNames.replace(/ /g, '');
            // 不判断为空的值
            if (propertyNames === '') {
              return;
            }
            // 若是以','隔开的伪数组，则转化为数组再进行操作
            if (propertyNames.indexOf(',') !== -1) {
              var propertyNameArr = propertyNames.split(',');
              return this.whileEmptyObjectProperty(context, obj, propertyNameArr, cb);
            }
            // 若指定级联属性
            if (propertyNames.indexOf('.') !== -1) {
              var names = propertyNames.split('.');
              var iterationObj = obj;
              var result = null;
              ArrayUtils.ergodicArrayObject(this, names, function (name) {
                if (iterationObj && iterationObj.hasOwnProperty(name)) {
                  iterationObj = iterationObj[name];
                } else {
                  result = cb.call(window, propertyNames);
                  // 终止对接下来的属性的遍历
                  return -1;
                }
              });
              return result;
            }
            // 正常流程
            if (!obj.hasOwnProperty(propertyNames)) {
              return cb.call(context, propertyNames);
            }
            if (obj[propertyNames] === null || obj[propertyNames] === '') {
              return cb.call(context, propertyNames);
            }
          } else if (BaseUtils.isArray(propertyNames)) {
            // 解析数组
            ArrayUtils.ergodicArrayObject(this, propertyNames, function (propertyName) {
              // 递归调用
              return this.whileEmptyObjectProperty(context, obj, propertyName, cb);
            })
          }
        },
        whileEmptyObjectPropertyV2: function (context, obj, propertyNames, cb) {
          this.readLinkProperty(obj, propertyNames, function (value, propertyName) {
            if (value === null || value === '' || parseInt(value) < 0) {
              return cb.call(context, propertyName);
            }
          })
        },
        /**
         * 克隆对象[只克隆属性，不克隆原型链]
         * @param obj {*}
         */
        cloneObject: function (obj) {
          var newObj = {};
          // 判断是否为基本数据类型，若是则直接返回
          if (typeof obj === 'string' ||
            typeof obj === 'number' ||
            typeof obj === 'undefined' ||
            typeof obj === 'function' ||
            typeof obj === 'boolean') {
            return obj;
          }
          // 判断是否是数组
          if (BaseUtils.isArray(obj)) {
            newObj = [];
            // 遍历数组并递归调用该方法获取数组内部对象的克隆对象并push到新数组
            ArrayUtils.ergodicArrayObject(this, obj, function (arrObjValue) {
              newObj.push(this.cloneObject(arrObjValue));
            })
          } else if (typeof obj === 'object') {
            // 当目标为一般对象时即 typeof 为 object
            if (obj === null) {
              // 当克隆对象为空时，返回空
              return null;
            }
            // 遍历对象的属性并调用递归方法获得该属性对应的对象的克隆对象并将其重新赋值到该属性
            this.ergodicObject(this, obj, function (value, key) {
              newObj[key] = this.cloneObject(value);
            });
          }
          return newObj;
        },
        // cloneIndeed: function (obj) {
        //     var hash = new Map();
        //     var result = this._cloneIndeed(obj, hash);
        //     for (var item of hash.values()) {
        //         ArrayUtils.ergodicArrayObject(this, item.settingArr, function (func) {
        //             func.call(this);
        //         })
        //     }
        //     return result;
        // },
        // _cloneIndeed: function (obj, hash) {
        //     hash = hash || new Map();
        //     var result = {};
        //     // 获取数据类型
        //     var dataType = typeof obj;
        //     switch (dataType.toLowerCase()) {
        //         case 'string':
        //         case 'number':
        //         case 'boolean':
        //         case 'undefined':
        //             return obj;
        //         case 'object':
        //         default: {
        //             for (var key in obj) {
        //                 var nextObj = obj[key];
        //                 var hashObj = hash.get(nextObj);
        //                 if (hashObj != null && hashObj.clonedObj != null) {
        //                     obj[key] = null;
        //                 }
        //                 hash.set(nextObj, {
        //                         clonedObj: result,
        //                         settingArr: [],
        //                         active: false
        //                     }
        //                 );
        //                 result[key] = this._cloneIndeed(nextObj, hash);
        //             }
        //             if (obj != null) {
        //                 result['__proto__'] = obj['__proto__'];
        //             }
        //         }
        //
        //     }
        //     return result;
        // },
        /**
         * 获取对象的哈希码
         * @param obj {Object}
         * @returns {number}
         */
        getObjHashCode: function (obj) {
          var str = JSON.stringify(obj);
          var hash = 0, i, chr, len;
          console.log(str)
          console.log(hash)
          if (str.length === 0) return hash;
          for (i = 0, len = str.length; i < len; i++) {
            chr = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
          }
          console.log(str)
          console.log(hash)
          return hash;
        },
        /**
         * 扩展对象属性
         * @param obj 原对象
         * @param extendedObj 被扩展的对象
         * @param isCover {boolean=} 扩展的属性和原来属性冲突时是否覆盖 默认[false]
         * @param isClone {boolean=} 是否返回一个新的对象，默认[false]返回扩展后的原对象
         */
        expandObject: function (obj, extendedObj, isCover, isClone) {
          var resultObj = obj;
          if (isClone) {
            resultObj = this.cloneObject(obj);
          }
          this.ergodicObject(this, extendedObj, function (value, key) {
            if (isCover && this.readLinkProperty(resultObj, key) !== null) {
              return;
            }
            resultObj = this.createLinkProperty(resultObj, key, value);
          }, true);
          return resultObj;
        },
        /**
         * 为数组排序，当数组中的元素为对象时，根据指定对象的属性名进行排序
         * @param arr 数组
         * @param propertyName 属性名（当有多个属性名时，为多级排序）
         * @param order 升降序
         * @returns {*}
         */
        sortingArrayByProperty: function (arr, propertyName, order) {
          var _this = this;
          var sortSetting = {
            // 是否创建新数据
            createNewData: false,
            // 通过该方法获取数组中每个对象中用来比较的属性
            getComparedProperty: function (arr) {
              var compareArr = [];
              ArrayUtils.ergodicArrayObject(_this, arr, function (obj, i) {
                if (typeof obj !== 'object') {
                  compareArr.push(obj);
                } else {
                  var compareValue = this.readLinkProperty(obj, propertyName);
                  if (compareValue !== null) {
                    compareArr.push(compareValue);
                  } else {
                    compareArr.push(obj);
                  }
                }
              });
              return compareArr.slice(0);
            }
          };
          return ArrayUtils.sortingArrays(arr, order, sortSetting);
        },
        /**
         * 转话为目标的实例
         * @param constructor {function} 构造函数
         * @param obj {object|Array}判断的对象
         * @param defaultProperty {object=}
         */
        toAimObject: function (obj, constructor, defaultProperty) {
          if (BaseUtils.isArray(obj)) {
            var originArr = [];
            ArrayUtils.ergodicArrayObject(this, obj, function (value) {
              originArr.push(this.toAimObject(value, constructor, defaultProperty));
            });
            return originArr;
          } else if (typeof obj === 'object') {
            if (defaultProperty) {
              this.ergodicObject(this, defaultProperty, function (value, key) {
                if (obj[key] === null) {
                  obj[key] = value;
                }
              });
            }
            if (obj instanceof constructor) {
              return obj;
            }
            var originObj = obj;
            while (originObj.__proto__ !== null && originObj.__proto__ !== Object.prototype) {
              originObj = originObj.__proto__;
            }
            originObj.__proto__ = constructor.prototype;
            return originObj;
          }
        },
        /**
         * 将数组中结构类似对象指定属性融合为一个数组
         * @param arr {Array}
         * @param propertyNames
         */
        parseTheSameObjectPropertyInArray: function (arr, propertyNames) {
          var result = {};
          var temp = {};
          ArrayUtils.ergodicArrayObject(this, arr, function (obj) {
            // 获取想要得到的所有属性，以属性名为键值存储到temp中
            this.readLinkProperty(obj, propertyNames, function (value, property) {
              if (!temp.hasOwnProperty(property) || !(BaseUtils.isArray(temp[property]))) {
                temp[property] = [];
              }
              temp[property].push(value);
            });
          });
          // 遍历temp获取每个键值中的值，并单独取出
          this.ergodicObject(this, temp, function (value, key) {
            result = this.createLinkProperty(result, key, value);
          });
          return this.cloneObject(result);
        },
        /**
         * 将数组中结构类似对象指定属性融合为一个数组
         * @param arr {Array}
         */
        parseTheSameObjectAllPropertyInArray: function (arr) {
          if (!ArrayUtils.isArrayObject(arr) || arr.length < 1) {
            return;
          }
          // 获取一个对象的所有属性，包括内部对象的属性
          var propertyNames = [];
          this.ergodicObject(this, arr[0], function (v, k) {
            propertyNames.push(k);
          }, true);
          return this.parseTheSameObjectPropertyInArray(arr, propertyNames);
        },
        /**
         * 获取对象属性，若为数组则计算其中数字的平均值或其它
         * @param obj
         * @param propertyNames{Array<string>|string}
         * @param type
         */
        getCalculationInArrayByLinkPropertyNames: function (obj, propertyNames, type) {
          var resultObject = {};
          var _this = this;
          switch (type) {
            default:
            case 'sum':
              this.readLinkProperty(obj, propertyNames, function (value, key) {
                if (ArrayUtils.isArrayObject(value)) {
                  resultObject = _this.createLinkProperty(resultObject, key, ArrayUtils.getSumInArray(value));
                }
              });
              break;
            case 'average':
              this.readLinkProperty(obj, propertyNames, function (value, key) {
                if (ArrayUtils.isArrayObject(value)) {
                  resultObject = _this.createLinkProperty(resultObject, key, ArrayUtils.getAverageInArray(value));
                }
              });
              break;
          }
          return resultObject;
        }
      }
    });

    // ColorUtils
    factory('ColorUtils', [], function () {
      return {
        /**
         * 转换颜色rgb为16进制
         * @param r
         * @param g
         * @param b
         * @return {string}
         */
        rgbToHex: function (r, g, b) {
          var hex = ((r << 16) | (g << 8) | b).toString(16);
          return "#" + new Array(Math.abs(hex.length - 7)).join("0") + hex;
        },
        /**
         * 转换颜色16进制为rgb
         * @param hex
         * @return {Array}
         */
        hexToRgb: function (hex) {
          hex = hex.replace(/ /g, '');
          var length = hex.length;
          var rgb = [];
          switch (length) {
            case 4:
              rgb.push(parseInt(hex[1] + hex[1], 16));
              rgb.push(parseInt(hex[2] + hex[2], 16));
              rgb.push(parseInt(hex[3] + hex[3], 16));
              return rgb;
            case 7:
              for (var i = 1; i < 7; i += 2) {
                rgb.push(parseInt("0x" + hex.slice(i, i + 2)));
              }
              return rgb;
            default:
              break
          }
        },
        /**
         * 根据两个颜色以及之间的百分比获取渐进色
         * @param start
         * @param end
         * @param percentage
         * @return {*}
         */
        gradientColorsPercentage: function (start, end, percentage) {
          var resultRgb = [];
          var startRgb = this.hexToRgb(start);
          if (end == null) {
            return start;
          }
          var endRgb = this.hexToRgb(end);
          var totalR = endRgb[0] - startRgb[0];
          var totalG = endRgb[1] - startRgb[1];
          var totalB = endRgb[2] - startRgb[2];
          resultRgb.push(startRgb[0] + totalR * percentage);
          resultRgb.push(startRgb[1] + totalG * percentage);
          resultRgb.push(startRgb[2] + totalB * percentage);
          return this.rgbToHex(resultRgb[0], resultRgb[1], resultRgb[2])
        }
      }
    });

    factory('FunctionUtils', [], function () {
      return {
        /**
         * 获取方法的名字
         * @param func
         * @returns {*}
         */
        getFunctionName: function (func) {
          if (typeof func === 'function' || typeof func === 'object') {
            var name = ('' + func).match(/function\s*([\w\$]*)\s*\(/);
          }
          return func.name || name[1];
        },
        /**
         * 获取方法的参数名
         * @param func
         * @returns {*}
         */
        getFunctionParams: function (func) {
          if (typeof func === 'function' || typeof func === 'object') {
            var name = ('' + func).match(/function.*\(([^)]*)\)/);
            return name[1].replace(/( )|(\n)/g, '').split(',');
          }
          return;
        },
        /**
         * 通过方法的arguments获取调用该方法的函数
         * @param func_arguments
         * @returns {string}
         */
        getCallerName: function (func_arguments) {
          var caller = func_arguments.callee.caller;
          var callerName = '';
          if (caller) {
            callerName = this.getFunctionName(caller);
          }
          return callerName;
        },
        FunctionBuilder: function (func) {
          var _this = this;
          var fs = [];
          fs.push(func);
          var properties = ['push', 'unshift', 'slice', 'map', 'forEach', 'keys', 'find', 'concat', 'fill', 'shift', 'values'];
          properties.map(function (property) {
            if (typeof Array.prototype[property] === 'function') {
              Object.defineProperty(_this, property, {
                get: function () {
                  return function () {
                    fs[property].apply(fs, arguments);
                    return this;
                  }
                }
              });
            }
          });
          this.result = function (context) {
            var rfs = [];
            fs.map(function (f, index) {
              if (typeof f === 'function') {
                rfs.push(f);
              }
            });
            return function () {
              var declareVar = {
                arguments: arguments,
                this: this
              };
              rfs.map(function (f) {
                var dv = f.apply(context || this, [declareVar]);
                if (dv) {
                  BaseUtils.keys(dv).map(function (key) {
                    declareVar[key] = dv[key];
                  });
                }
              });
              return declareVar.returnValue;
            }
          }
        },
        invokeMethods: function (context, methods, args) {
          if (!this.isArray(methods)) {
            return;
          }
          var results = [];
          var _this = this;
          this.ergodicArrayObject(context, methods, function (method) {
            if (!_this.isFunction(method)) {
              return;
            }
            results.push(
              method.apply(context, args)
            );
          });
          return results;
        }
      }
    });

    factory('UrlUtils', [], function () {
      return {
        getUrlInfo: function (url) {
          var a = document.createElement('a');
          a.href = url;
          return {
            source: url,
            protocol: a.protocol.replace(':', ''),
            host: a.hostname,
            port: a.port,
            query: a.search,
            file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
            hash: a.hash.replace('#', ''),
            path: a.pathname.replace(/^([^\/])/, '/$1'),
            relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
            segments: a.pathname.replace(/^\//, '').split('/'),
            params: (function () {
              var ret = {};
              var seg = a.search.replace(/^\?/, '').split('&').filter(function (v, i) {
                if (v !== '' && v.indexOf('=')) {
                  return true;
                }
              });
              seg.forEach(function (element, index) {
                var idx = element.indexOf('=');
                var key = element.substring(0, idx);
                var val = element.substring(idx + 1);
                ret[key] = val;
              });
              return ret;
            })()
          };
        },
        urlMatching: function (url, matchUrl) {
          var pattern = new RegExp(matchUrl);
          return pattern.test(url);
        },
        getUrlWithoutParam: function (url) {
          return url.split('?')[0];
        },
        getParamFromUrl: function (url) {
          var params = [];
          var paramsObject = this.getUrlInfo(url).params;
          BaseUtils.keys(paramsObject).forEach(function (key) {
            params.push({
              key: key,
              value: paramsObject[key]
            })
          });
          // var parts = url.split('?');
          // if (parts.length < 2) {
          //     return params;
          // }
          // var paramsStr = parts[1].split('&');
          // for (var i = 0; i < paramsStr.length; i++) {
          //     var index = paramsStr[i].indexOf('=');
          //     var ps = new Array(2);
          //     if (index !== -1) {
          //         ps = [
          //             paramsStr[i].substring(0, index),
          //             paramsStr[i].substring(index + 1),
          //         ];
          //     } else {
          //         ps[0] = paramsStr[i];
          //     }
          //     params.push({
          //         key: ps[0],
          //         value: ps[1]
          //     });
          // }
          return params;
        },
        margeUrlAndParams: function (url, params) {
          if (url.indexOf('?') !== -1 || !(params instanceof Array)) {
            return url;
          }
          var paramsStr = [];
          for (var i = 0; i < params.length; i++) {
            if (params[i].key !== null && params[i].value !== null) {
              if (!params[i].key) {
                paramsStr.push(params[i].value);
              } else {
                paramsStr.push(params[i].key + '=' + params[i].value);
              }
            }
          }
          return url + '?' + paramsStr.join('&');
        }
      }
    });

    factory('PointUtils', [], function () {
      var Point2D = function (x, y) {
        this.x = x || 0;
        this.y = y || 0;
      };
      Point2D.prototype = {
        constructor: Point2D,
        /**
         * 获取指定距离和角度对应的平面点
         * @param distance
         * @param deg
         */
        getOtherPointFromDistanceAndDeg: function (distance, deg) {
          var radian = Math.PI / 180 * deg;
          var point = new this.constructor();
          point.x = distance * Math.sin(radian) + this.x;
          point.y = this.y - distance * Math.cos(radian);
          return point;
        },
        /**
         * 获取当前平面点与另一个平面点之间的距离
         * @param p
         * @returns {number}
         */
        getDistanceFromAnotherPoint: function (p) {
          return Math.sqrt((this.x - p.x) * (this.x - p.x) + (this.y - p.y) * (this.y - p.y));
        },
        /**
         * 获取当前平面点与另一个平面点之间的角度
         * @param p
         * @returns {number}
         */
        getDegFromAnotherPoint: function (p) {
          var usedPoint = new Point2D(p.x * 1000000 - this.x * 1000000, p.y * 1000000 - this.y * 1000000);
          var radian = Math.atan2(usedPoint.x * 1000000, usedPoint.y * 1000000);
          var deg = radian * 180 / Math.PI;
          return 180 - deg;
        },
        /**
         * 判断该点是否位于一矩形内部
         * @param x 矩形开始坐标x
         * @param y 矩形开始坐标y
         * @param width 矩形宽
         * @param height 矩形长
         * @returns {boolean}
         */
        isInRect: function (x, y, width, height) {
          var px = this.x;
          var py = this.y;
          if (px < x || px > x + width) {
            return false;
          }
          return !(py < y || py > y + height);
        }
      };
      return {
        Point2D: Point2D
      }
    });

    _global.everyUtils = function () {
      if (BaseUtils.isArray(arguments[0])) {
        depend.call(arguments[2] || this, arguments[0], arguments[1]);
      } else if (BaseUtils.isFunction(arguments[0])) {
        var args = arguments;
        depend.call(arguments[1] || this, ['FunctionUtils'], function (FunctionUtils) {
          var depends = FunctionUtils.getFunctionParams(args[0]);
          depend(depends, args[0]);
        })
      }
    };

    _global.eUtils = (function () {
      var utils = {};
      if (window.everyUtils) {
        window.everyUtils(function (
          ArrayUtils,
          ObjectUtils,
          BaseUtils,
          FunctionUtils,
          ColorUtils,
          PointUtils,
          UrlUtils) {
          utils = {
            ArrayUtils: ArrayUtils,
            ObjectUtils: ObjectUtils,
            BaseUtils: BaseUtils,
            ColorUtils: ColorUtils,
            UrlUtils: UrlUtils,
            urlUtils: UrlUtils,
            PointUtils: PointUtils,
            FunctionUtils: FunctionUtils
          };
        });
      }
      var proxy = {};
      Object.keys(utils).forEach(function (utilName) {
        if (!utilName) {
          return;
        }
        Object.defineProperty(proxy, utilName, {
          get: function () {
            return utils[utilName];
          }
        });
        Object.keys(utils[utilName]).forEach(function (key) {
          if (!key) {
            return;
          }
          if (proxy[key]) {
            return;
          }
          Object.defineProperty(proxy, key, {
            get: function () {
              return utils[utilName][key];
            }
          })
        })
      });
      return proxy;
    })();

    return _global.eUtils;
  }));

  ~function (utils) {
    var _global = this;
    var EHook = function () {
      var _autoId = 1;
      var _hookedMap = {};
      var _hookedContextMap = {};
      this._getHookedMap = function () {
        return _hookedMap;
      };
      this._getHookedContextMap = function () {
        return _hookedContextMap;
      };
      this._getAutoStrId = function () {
        return '__auto__' + _autoId++;
      };
      this._getAutoId = function () {
        return _autoId++;
      };
    };
    EHook.prototype = {
      /**
       * 获取一个对象的劫持id，若没有则创建一个
       * @param context
       * @return {*}
       * @private
       */
      _getHookedId: function (context) {
        var contextMap = this._getHookedContextMap();
        var hookedId = null;
        Object.keys(contextMap).forEach(key => {
          if (context === contextMap[key]) {
            hookedId = key;
          }
        });
        if (hookedId == null) {
          hookedId = this._getAutoStrId();
          contextMap[hookedId] = context;
        }
        return hookedId;
      },
      /**
       * 获取一个对象的劫持方法映射，若没有则创建一个
       * @param context
       * @return {*}
       * @private
       */
      _getHookedMethodMap: function (context) {
        var hookedId = this._getHookedId(context);
        var hookedMap = this._getHookedMap();
        var thisTask = hookedMap[hookedId];
        if (!utils.isExistObject(thisTask)) {
          thisTask = hookedMap[hookedId] = {};
        }
        return thisTask;
      },
      /**
       * 获取对应方法的hook原型任务对象，若没有则初始化一个。
       * @param context
       * @param methodName
       * @private
       */
      _getHookedMethodTask: function (context, methodName) {
        var thisMethodMap = this._getHookedMethodMap(context);
        var thisMethod = thisMethodMap[methodName];
        if (!utils.isExistObject(thisMethod)) {
          thisMethod = thisMethodMap[methodName] = {
            original: undefined,
            replace: undefined,
            task: {
              before: [],
              current: undefined,
              after: []
            }
          };
        }
        return thisMethod;
      },
      /**
       * 执行多个方法并注入一个方法和参数集合
       * @param context
       * @param methods
       * @param args
       * @return result 最后一次执行方法的有效返回值
       * @private
       */
      _invokeMethods: function (context, methods, args) {
        if (!utils.isArray(methods)) {
          return;
        }
        var result = null;
        utils.ergodicArrayObject(context, methods, function (_method) {
          if (!utils.isFunction(_method.method)) {
            return;
          }
          var r = _method.method.apply(this, args);
          if (r != null) {
            result = r;
          }
        });
        return result;
      },
      /**
       * 生成和替换劫持方法
       * @param parent
       * @param context
       * @param methodName {string}
       * @private
       */
      _hook: function (parent, methodName, context) {
        if (context === undefined) {
          context = parent;
        }
        var method = parent[methodName];
        var methodTask = this._getHookedMethodTask(parent, methodName);
        if (!methodTask.original) {
          methodTask.original = method;
        }
        if (utils.isExistObject(methodTask.replace) && utils.isFunction(methodTask.replace.method)) {
          parent[methodName] = methodTask.replace.method(methodTask.original);
          return;
        }
        var invokeMethods = this._invokeMethods;
        // 组装劫持函数
        var builder = new utils.FunctionBuilder(function (v) {
          return {
            result: undefined
          };
        });
        if (methodTask.task.before.length > 0) {
          builder.push(function (v) {
            invokeMethods(context || v.this, methodTask.task.before, [methodTask.original, v.arguments]);
          });
        }
        if (utils.isExistObject(methodTask.task.current) && utils.isFunction(methodTask.task.current.method)) {
          builder.push(function (v) {
            return {
              result: methodTask.task.current.method.call(context || v.this, parent, methodTask.original, v.arguments)
            }
          });
        } else {
          builder.push(function (v) {
            return {
              result: methodTask.original.apply(context || v.this, v.arguments)
            }
          });
        }
        if (methodTask.task.after.length > 0) {
          builder.push(function (v) {
            var args = [];
            args.push(methodTask.original);
            args.push(v.arguments);
            args.push(v.result);
            var r = invokeMethods(context || v.this, methodTask.task.after, args);
            return {
              result: (r != null ? r : v.result)
            };
          });
        }
        builder.push(function (v) {
          return {
            returnValue: v.result
          };
        });
        // var methodStr = '(function(){\n';
        // methodStr = methodStr + 'var result = undefined;\n';
        // if (methodTask.task.before.length > 0) {
        //     methodStr = methodStr + 'invokeMethods(context, methodTask.task.before,[methodTask.original, arguments]);\n';
        // }
        // if (utils.isExistObject(methodTask.task.current) && utils.isFunction(methodTask.task.current.method)) {
        //     methodStr = methodStr + 'result = methodTask.task.current.method.call(context, parent, methodTask.original, arguments);\n';
        // } else {
        //     methodStr = methodStr + 'result = methodTask.original.apply(context, arguments);\n';
        // }
        // if (methodTask.task.after.length > 0) {
        //     methodStr = methodStr + 'var args = [];args.push(methodTask.original);args.push(arguments);args.push(result);\n';
        //     methodStr = methodStr + 'var r = invokeMethods(context, methodTask.task.after, args);result = (r!=null?r:result);\n';
        // }
        // methodStr = methodStr + 'return result;\n})';
        // 绑定劫持函数
        var resultFunc = builder.result();
        for (var proxyName in methodTask.original) {
          Object.defineProperty(resultFunc, proxyName, {
            get: function () {
              return methodTask.original[proxyName];
            },
            set: function (v) {
              methodTask.original[proxyName] = v;
            }
          })
        }
        resultFunc.prototype = methodTask.original.prototype;
        parent[methodName] = resultFunc;
      },
      /**
       * 劫持一个方法
       * @param parent
       * @param methodName {string}
       * @param config
       */
      hook: function (parent, methodName, config) {
        var hookedFailure = -1;
        // 调用方法的上下文
        var context = config.context !== undefined ? config.context : parent;
        if (parent[methodName] == null) {
          parent[methodName] = function () {
          }
        }
        if (!utils.isFunction(parent[methodName])) {
          return hookedFailure;
        }
        var methodTask = this._getHookedMethodTask(parent, methodName);
        var id = this._getAutoId();
        if (utils.isFunction(config.replace)) {
          methodTask.replace = {
            id: id,
            method: config.replace
          };
          hookedFailure = 0;
        }
        if (utils.isFunction(config.before)) {
          methodTask.task.before.push({
            id: id,
            method: config.before
          });
          hookedFailure = 0;
        }
        if (utils.isFunction(config.current)) {
          methodTask.task.current = {
            id: id,
            method: config.current
          };
          hookedFailure = 0;
        }
        if (utils.isFunction(config.after)) {
          methodTask.task.after.push({
            id: id,
            method: config.after
          });
          hookedFailure = 0;
        }
        if (hookedFailure === 0) {
          this._hook(parent, methodName, context);
          return id;
        } else {
          return hookedFailure;
        }

      },
      /**
       * 劫持替换一个方法
       * @param parent
       * @param context
       * @param methodName {string}
       * @param replace {function}
       * @return {number} 该次劫持的id
       */
      hookReplace: function (parent, methodName, replace, context) {
        return this.hook(parent, methodName, {
          replace: replace,
          context: context
        });
      },
      hookBefore: function (parent, methodName, before, context) {
        return this.hook(parent, methodName, {
          before: before,
          context: context
        });
      },
      hookCurrent: function (parent, methodName, current, context) {
        return this.hook(parent, methodName, {
          current: current,
          context: context
        });
      },
      hookAfter: function (parent, methodName, after, context) {
        return this.hook(parent, methodName, {
          after: after,
          context: context
        });
      },
      hookClass: function (parent, className, replace, innerName, excludeProperties) {
        var _this = this;
        var originFunc = parent[className];
        if (!excludeProperties) {
          excludeProperties = [];
        }
        excludeProperties.push('prototype');
        excludeProperties.push('caller');
        excludeProperties.push('arguments');
        innerName = innerName || '_innerHook';
        var resFunc = function () {
          this[innerName] = new originFunc();
          replace.apply(this, arguments);
        };
        this.hookedToString(originFunc, resFunc);
        this.hookedToProperties(originFunc, resFunc, true, excludeProperties);
        var prototypeProperties = Object.getOwnPropertyNames(originFunc.prototype);
        var prototype = resFunc.prototype = {
          constructor: resFunc
        };
        prototypeProperties.forEach(function (name) {
          if (name === 'constructor') {
            return;
          }
          var method = function () {
            if (originFunc.prototype[name] && utils.isFunction(originFunc.prototype[name])) {
              return originFunc.prototype[name].apply(this[innerName], arguments);
            }
            return undefined;
          };
          _this.hookedToString(originFunc.prototype[name], method);
          prototype[name] = method;
        });
        this.hookReplace(parent, className, function () {
          return resFunc;
        }, parent)
      },
      hookedToProperties: function (originObject, resultObject, isDefined, excludeProperties) {
        var objectProperties = Object.getOwnPropertyNames(originObject);
        objectProperties.forEach(function (property) {
          if (utils.contains(excludeProperties, property)) {
            return;
          }
          if (!isDefined) {
            resultObject[property] = originObject[property];
          } else {
            Object.defineProperty(resultObject, property, {
              configurable: false,
              enumerable: false,
              value: originObject[property],
              writable: false
            });
          }
        });
      },
      hookedToString: function (originObject, resultObject) {
        try {
          Object.defineProperties(resultObject, {
            toString: {
              configurable: false,
              enumerable: false,
              value: originObject.toString.bind(originObject),
              writable: false
            },
            toLocaleString: {
              configurable: false,
              enumerable: false,
              value: originObject.toLocaleString.bind(originObject),
              writable: false
            }
          })
        } catch (e) {
          console.log(e);
        }
      },
      /**
       * 劫持全局ajax
       * @param methods {object} 劫持的方法
       * @return {*|number} 劫持的id
       */
      hookAjax: function (methods) {
        if (this.isHooked(_global, 'XMLHttpRequest')) {
          return;
        }
        var _this = this;
        var hookMethod = function (methodName) {
          if (utils.isFunction(methods[methodName])) {
            // 在执行方法之前hook原方法
            _this.hookBefore(this.xhr, methodName, methods[methodName]);
          }
          // 返回方法调用内部的xhr
          return this.xhr[methodName].bind(this.xhr);
        };
        var getProperty = function (attr) {
          return function () {
            return this.hasOwnProperty(attr + "_") ? this[attr + "_"] : this.xhr[attr];
          };
        };
        var setProperty = function (attr) {
          return function (f) {
            var xhr = this.xhr;
            var that = this;
            if (attr.indexOf("on") !== 0) {
              this[attr + "_"] = f;
              return;
            }
            if (methods[attr]) {
              xhr[attr] = function () {
                f.apply(xhr, arguments);
              };
              // on方法在set时劫持
              _this.hookBefore(xhr, attr, methods[attr]);
              // console.log(1,attr);
              // xhr[attr] = function () {
              //     methods[attr](that) || f.apply(xhr, arguments);
              // }
            } else {
              xhr[attr] = f;
            }
          };
        };
        return this.hookReplace(_global, 'XMLHttpRequest', function (XMLHttpRequest) {
          var resFunc = function () {
            this.xhr = new XMLHttpRequest();
            for (var propertyName in this.xhr) {
              var property = this.xhr[propertyName];
              if (utils.isFunction(property)) {
                // hook 原方法
                this[propertyName] = hookMethod.bind(this)(propertyName);
              } else {
                Object.defineProperty(this, propertyName, {
                  get: getProperty(propertyName),
                  set: setProperty(propertyName)
                });
              }
            }
            // 定义外部xhr可以在内部访问
            this.xhr.xhr = this;
          };
          _this.hookedToProperties(XMLHttpRequest, resFunc, true);
          _this.hookedToString(XMLHttpRequest, resFunc);
          return resFunc
        });
      },
      /**
       * 劫持全局ajax
       * @param methods {object} 劫持的方法
       * @return {*|number} 劫持的id
       */
      hookAjaxV2: function (methods) {
        this.hookClass(window, 'XMLHttpRequest', function () {

        });
        utils.ergodicObject(this, methods, function (method) {

        });
      },
      /**
       * 解除劫持
       * @param context 上下文
       * @param methodName 方法名
       * @param isDeeply {boolean=} 是否深度解除[默认为false]
       * @param eqId {number=}  解除指定id的劫持[可选]
       */
      unHook: function (context, methodName, isDeeply, eqId) {
        if (!context[methodName] || !utils.isFunction(context[methodName])) {
          return;
        }
        var methodTask = this._getHookedMethodTask(context, methodName);
        if (eqId) {
          if (this.unHookById(eqId)) {
            return;
          }
        }
        if (!methodTask.original) {
          delete this._getHookedMethodMap(context)[methodName];
          return;
        }
        context[methodName] = methodTask.original;
        if (isDeeply) {
          delete this._getHookedMethodMap(context)[methodName];
        }
      },
      /**
       * 通过Id解除劫持
       * @param eqId
       * @returns {boolean}
       */
      unHookById: function (eqId) {
        var hasEq = false;
        if (eqId) {
          var hookedMap = this._getHookedMap();
          utils.ergodicObject(this, hookedMap, function (contextMap) {
            utils.ergodicObject(this, contextMap, function (methodTask) {
              methodTask.task.before = methodTask.task.before.filter(function (before) {
                hasEq = hasEq || before.id === eqId;
                return before.id !== eqId;
              });
              methodTask.task.after = methodTask.task.after.filter(function (after) {
                hasEq = hasEq || after.id === eqId;
                return after.id !== eqId;
              });
              if (methodTask.task.current && methodTask.task.current.id === eqId) {
                methodTask.task.current = undefined;
                hasEq = true;
              }
              if (methodTask.replace && methodTask.replace.id === eqId) {
                methodTask.replace = undefined;
                hasEq = true;
              }
            })
          });
        }
        return hasEq;
      },
      /**
       *  移除所有劫持相关的方法
       * @param context 上下文
       * @param methodName 方法名
       */
      removeHookMethod: function (context, methodName) {
        if (!context[methodName] || !utils.isFunction(context[methodName])) {
          return;
        }
        this._getHookedMethodMap(context)[methodName] = {
          original: undefined,
          replace: undefined,
          task: {
            before: [],
            current: undefined,
            after: []
          }
        };
      },
      /**
       * 判断一个方法是否被劫持过
       * @param context
       * @param methodName
       */
      isHooked: function (context, methodName) {
        var hookMap = this._getHookedMethodMap(context);
        return hookMap[methodName] !== undefined ? (hookMap[methodName].original !== undefined) : false;
      },
      /**
       * 保护一个对象使之不会被篡改
       * @param parent
       * @param methodName
       */
      protect: function (parent, methodName) {
        Object.defineProperty(parent, methodName, {
          configurable: false,
          writable: false
        });
      },
      preventError: function (parent, methodName, returnValue, context) {
        this.hookCurrent(parent, methodName, function (m, args) {
          var value = returnValue;
          try {
            value = m.apply(this, args);
          } catch (e) {
            console.log('Error Prevented from method ' + methodName, e);
          }
          return value;
        }, context)
      },
      /**
       * 装载插件
       * @param option
       */
      plugins: function (option) {
        if (utils.isFunction(option.mount)) {
          var result = option.mount.call(this, utils);
          if (typeof option.name === 'string') {
            _global[option.name] = result;
          }
        }
      }
    };
    if (_global.eHook && (_global.eHook instanceof EHook)) {
      return;
    }
    var eHook = new EHook();
    var AHook = function () {
      this.isHooked = false;
      var autoId = 1;
      this._urlDispatcherList = [];
      this._getAutoId = function () {
        return autoId++;
      };
    };
    AHook.prototype = {
      /**
       * 执行配置列表中的指定方法组
       * @param xhr
       * @param methodName
       * @param args
       * @private
       */
      _invokeAimMethods: function (xhr, methodName, args) {
        var configs = utils.parseArrayByProperty(xhr.patcherList, 'config');
        var methods = [];
        utils.ergodicArrayObject(xhr, configs, function (config) {
          if (utils.isFunction(config[methodName])) {
            methods.push(config[methodName]);
          }
        });
        return utils.invokeMethods(xhr, methods, args);
      },
      /**
       * 根据url获取配置列表
       * @param url
       * @return {Array}
       * @private
       */
      _urlPatcher: function (url) {
        var patcherList = [];
        utils.ergodicArrayObject(this, this._urlDispatcherList, function (patcherMap, i) {
          if (utils.UrlUtils.urlMatching(url, patcherMap.patcher)) {
            patcherList.push(patcherMap);
          }
        });
        return patcherList;
      },
      /**
       * 根据xhr对象分发回调请求
       * @param xhr
       * @param fullUrl
       * @private
       */
      _xhrDispatcher: function (xhr, fullUrl) {
        var url = utils.UrlUtils.getUrlWithoutParam(fullUrl);
        xhr.patcherList = this._urlPatcher(url);
      },
      /**
       * 转换响应事件
       * @param e
       * @param xhr
       * @private
       */
      _parseEvent: function (e, xhr) {
        try {
          Object.defineProperties(e, {
            target: {
              get: function () {
                return xhr;
              }
            },
            srcElement: {
              get: function () {
                return xhr;
              }
            }
          });
        } catch (error) {
          console.warn('重定义返回事件失败，劫持响应可能失败');
        }
        return e;
      },
      /**
       * 解析open方法的参数
       * @param args
       * @private
       */
      _parseOpenArgs: function (args) {
        return {
          method: args[0],
          fullUrl: args[1],
          url: utils.UrlUtils.getUrlWithoutParam(args[1]),
          params: utils.UrlUtils.getParamFromUrl(args[1]),
          async: args[2]
        };
      },
      /**
       * 劫持ajax 请求参数
       * @param argsObject
       * @param argsArray
       * @private
       */
      _rebuildOpenArgs: function (argsObject, argsArray) {
        argsArray[0] = argsObject.method;
        argsArray[1] = utils.UrlUtils.margeUrlAndParams(argsObject.url, argsObject.params);
        argsArray[2] = argsObject.async;
      },
      /**
       * 获取劫持方法的参数 [原方法,原方法参数,原方法返回值]，剔除原方法参数
       * @param args
       * @return {*|Array.<T>}
       * @private
       */
      _getHookedArgs: function (args) {
        // 将参数中'原方法'剔除
        return Array.prototype.slice.call(args, 0).splice(1);
      },
      /**
       * 响应被触发时调用的方法
       * @param outerXhr
       * @param funcArgs
       * @private
       */
      _onResponse: function (outerXhr, funcArgs) {
        // 因为参数是被劫持的参数为[method(原方法),args(参数)],该方法直接获取参数并转换为数组
        var args = this._getHookedArgs(funcArgs);
        args[0][0] = this._parseEvent(args[0][0], outerXhr.xhr); // 强制事件指向外部xhr
        // 执行所有的名为hookResponse的方法组
        var results = this._invokeAimMethods(outerXhr, 'hookResponse', args);
        // 遍历结果数组并获取最后返回的有效的值作为响应值
        var resultIndex = -1;
        utils.ergodicArrayObject(outerXhr, results, function (res, i) {
          if (res != null) {
            resultIndex = i;
          }
        });
        if (resultIndex !== -1) {
          outerXhr.xhr.responseText_ = outerXhr.xhr.response_ = results[resultIndex];
        }
      },
      /**
       * 手动开始劫持
       */
      startHook: function () {
        var _this = this;
        var normalMethods = {
          // 方法中的this指向内部xhr
          // 拦截响应
          onreadystatechange: function () {
            if (this.readyState == 4 && this.status == 200 || this.status == 304) {
              _this._onResponse(this, arguments);
            }
          },
          onload: function () {
            _this._onResponse(this, arguments);
          },
          // 拦截请求
          open: function () {
            var args = _this._getHookedArgs(arguments);
            var fullUrl = args[0][1];
            _this._xhrDispatcher(this, fullUrl);
            var argsObject = _this._parseOpenArgs(args[0]);
            this.openArgs = argsObject;
            _this._invokeAimMethods(this, 'hookRequest', [argsObject]);
            _this._rebuildOpenArgs(argsObject, args[0]);
          },
          send: function () {
            var args = _this._getHookedArgs(arguments);
            this.sendArgs = args;
            _this._invokeAimMethods(this, 'hookSend', args);
          }
        };
        // 设置总的hookId
        this.___hookedId = _global.eHook.hookAjax(normalMethods);
        this.isHooked = true;
      },
      /**
       * 注册ajaxUrl拦截
       * @param urlPatcher
       * @param configOrRequest
       * @param response
       * @return {number}
       */
      register: function (urlPatcher, configOrRequest, response) {
        if (!urlPatcher) {
          return -1;
        }
        if (!utils.isExistObject(configOrRequest) && !utils.isFunction(response)) {
          return -1;
        }
        var config = {};
        if (utils.isFunction(configOrRequest)) {
          config.hookRequest = configOrRequest;
        }
        if (utils.isFunction(response)) {
          config.hookResponse = response;
        }
        if (utils.isExistObject(configOrRequest)) {
          config = configOrRequest;
        }
        var id = this._getAutoId();
        this._urlDispatcherList.push({
          // 指定id便于后续取消
          id: id,
          patcher: urlPatcher,
          config: config
        });
        // 当注册一个register时，自动开始运行劫持
        if (!this.isHooked) {
          this.startHook();
        }
        return id;
      }
      // todo 注销  cancellation: function (registerId){};
    };

    _global['eHook'] = eHook;
    _global['aHook'] = new AHook();


  }.bind(window)(
    (function () {
      var utils = {};
      if (window.everyUtils) {
        window.everyUtils(function (
          ArrayUtils,
          ObjectUtils,
          BaseUtils,
          FunctionUtils,
          ColorUtils,
          UrlUtils) {
          utils = {
            ArrayUtils: ArrayUtils,
            ObjectUtils: ObjectUtils,
            BaseUtils: BaseUtils,
            ColorUtils: ColorUtils,
            UrlUtils: UrlUtils,
            urlUtils: UrlUtils,
            FunctionUtils: FunctionUtils
          };
        });
      }
      var proxy = {};
      Object.keys(utils).forEach(function (utilName) {
        if (!utilName) {
          return;
        }
        Object.defineProperty(proxy, utilName, {
          get: function () {
            return utils[utilName];
          }
        });
        Object.keys(utils[utilName]).forEach(function (key) {
          if (!key) {
            return;
          }
          if (proxy[key]) {
            return;
          }
          Object.defineProperty(proxy, key, {
            get: function () {
              return utils[utilName][key];
            }
          })
        })
      });
      return proxy;
    })()
  );
}

function initTimeHook() {
  window.isDOMLoaded = false;
  window.isDOMRendered = false;

  document.addEventListener('readystatechange', function () {
    if (document.readyState === "interactive" || document.readyState === "complete") {
      window.isDOMLoaded = true;
    }
  });

  ~function (global) {

    var workerURLs = [];
    var extraElements = [];

    var helper = function (eHookContext, timerContext, util) {
      return {
        applyUI: function () {
        },
        applyGlobalAction: function (timer) {
          // 界面半圆按钮点击的方法
          timer.changeTime = function (anum, cnum, isa, isr) {
            if (isr) {
              timer.change(1);
              return;
            }
            var result;
            if (!anum && !cnum) {
              var t = prompt("输入欲改变计时器变化倍率（当前：" + 1 / timerContext._percentage + "）");
              if (t == null) {
                return;
              }
              if (isNaN(parseFloat(t))) {
                alert("请输入正确的数字");
                timer.changeTime();
                return;
              }
              if (parseFloat(t) <= 0) {
                alert("倍率不能小于等于0");
                timer.changeTime();
                return;
              }
              result = 1 / parseFloat(t);
            } else {
              if (isa && anum) {
                if (1 / timerContext._percentage <= 1 && anum < 0) {
                  return;
                }
                result = 1 / (1 / timerContext._percentage + anum);
              } else {
                if (cnum < 0) {
                  cnum = 1 / -cnum
                }
                result = 1 / ((1 / timerContext._percentage) * cnum);
              }
            }
            console.info("速度变更->%c%s", "color:red", Number(1 / result).toFixed(2));
            timer.change(result);
          };
        },
        applyHooking: function () {
          // 劫持循环计时器
          eHookContext.hookReplace(window, 'setInterval', function (setInterval) {
            return function () {
              // 储存原始时间间隔
              arguments[2] = arguments[1];
              // 获取变速时间间隔
              arguments[1] *= timerContext._percentage;
              var resultId = setInterval.apply(window, arguments);
              // 保存每次使用计时器得到的id以及参数等
              timerContext._intervalIds[resultId] = {
                args: arguments,
                nowId: resultId
              };
              return resultId;
            };
          });
          // 劫持循环计时器的清除方法
          eHookContext.hookBefore(window, 'clearInterval', function (method, args) {
            var id = args[0];
            if (timerContext._intervalIds[id]) {
              args[0] = timerContext._intervalIds[id].nowId;
            }
            // 清除该记录id
            delete timerContext._intervalIds[id];
          });
          // 劫持循环计时器的清除方法
          eHookContext.hookBefore(window, 'clearTimeout', function (method, args) {
            var id = args[0];
            if (timerContext._intervalIds[id]) {
              args[0] = timerContext._intervalIds[id].nowId;
            }
            // 清除该记录id
            delete timerContext._intervalIds[id];
          });
          // 劫持单次计时器setTimeout
          eHookContext.hookBefore(window, 'setTimeout', function (method, args) {
            args[1] *= timerContext._percentage;
          });
          var newFunc = this.getHookedDateConstructor();
          eHookContext.hookClass(window, 'Date', newFunc, '_innerDate', ['now']);
          Date.now = function () {
            return new Date().getTime();
          };
          eHookContext.hookedToString(timerContext._Date.now, Date.now);
          var objToString = Object.prototype.toString;

          eHookContext.hookAfter(Object.prototype, 'toString', function (m, args, result) {
            if (this instanceof timerContext._mDate) {
              return '[object Date]';
            } else {
              return result;
            }
          }, false);

          eHookContext.hookedToString(objToString, Object.prototype.toString);
          eHookContext.hookedToString(timerContext._setInterval, setInterval);
          eHookContext.hookedToString(timerContext._setTimeout, setTimeout);
          eHookContext.hookedToString(timerContext._clearInterval, clearInterval);
          timerContext._mDate = window.Date;
          this.hookShadowRoot();
        },
        getHookedDateConstructor: function () {
          return function () {
            if (arguments.length === 1) {
              Object.defineProperty(this, '_innerDate', {
                configurable: false,
                enumerable: false,
                value: new timerContext._Date(arguments[0]),
                writable: false
              });
              return;
            } else if (arguments.length > 1) {
              var definedValue = new timerContext._Date(...arguments);
              ;
              Object.defineProperty(this, '_innerDate', {
                configurable: false,
                enumerable: false,
                value: definedValue,
                writable: false
              });
              return;
            }
            var now = timerContext._Date.now();
            var passTime = now - timerContext.__lastDatetime;
            var hookPassTime = passTime * (1 / timerContext._percentage);
            // console.log(__this.__lastDatetime + hookPassTime, now,__this.__lastDatetime + hookPassTime - now);
            Object.defineProperty(this, '_innerDate', {
              configurable: false,
              enumerable: false,
              value: new timerContext._Date(timerContext.__lastMDatetime + hookPassTime),
              writable: false
            });
          };
        },

        /**
         * 当计时器速率被改变时调用的回调方法
         * @param percentage
         * @private
         */
        percentageChangeHandler: function (percentage) {
          // 改变所有的循环计时
          util.ergodicObject(timerContext, timerContext._intervalIds, function (idObj, id) {
            idObj.args[1] = Math.floor(idObj.args[2] * percentage);
            // console.log(idObj.args[1]);
            // 结束原来的计时器
            this._clearInterval.call(window, idObj.nowId);
            // 新开一个计时器
            idObj.nowId = this._setInterval.apply(window, idObj.args);
          });
        },
        hookShadowRoot: function () {
          var origin = Element.prototype.attachShadow;
          eHookContext.hookAfter(Element.prototype, 'attachShadow',
            function (m, args, result) {
              extraElements.push(result);
              return result;
            }, false);
          eHookContext.hookedToString(origin, Element.prototype.attachShadow);
        }
      }
    };

    var normalUtil = {
      isInIframe: function () {
        let is = global.parent !== global;
        try {
          is = is && global.parent.document.body.tagName !== 'FRAMESET'
        } catch (e) {
          // ignore
        }
        return is;
      },
      listenParentEvent: function (handler) {
        global.addEventListener('message', function (e) {
          var data = e.data;
          var type = data.type || '';
          if (type === 'changePercentage') {
            handler(data.percentage || 0);
          }
        })
      },
      sentChangesToIframe: function (percentage) {
        var iframes = document.querySelectorAll('iframe') || [];
        var frames = document.querySelectorAll('frame');
        if (iframes.length) {
          for (var i = 0; i < iframes.length; i++) {
            iframes[i].contentWindow.postMessage(
              { type: 'changePercentage', percentage: percentage }, '*');
          }
        }
        if (frames.length) {
          for (var j = 0; j < frames.length; j++) {
            frames[j].contentWindow.postMessage(
              { type: 'changePercentage', percentage: percentage }, '*');
          }
        }
      }
    };

    var querySelectorAll = function (ele, selector, includeExtra) {
      var elements = ele.querySelectorAll(selector);
      elements = Array.prototype.slice.call(elements || []);
      if (includeExtra) {
        extraElements.forEach(function (element) {
          elements = elements.concat(querySelectorAll(element, selector, false));
        })
      }
      return elements;
    };

    var generate = function () {
      return function (util) {
        // disable worker
        workerURLs.forEach(function (url) {
          if (util.urlMatching(location.href, 'http.*://.*' + url + '.*')) {
            window['Worker'] = undefined;
            console.log('Worker disabled');
          }
        });
        var eHookContext = this;
        var timerHooker = {
          // 用于储存计时器的id和参数
          _intervalIds: {},
          // 计时器速率
          __percentage: 1.0,
          // 劫持前的原始的方法
          _setInterval: window['setInterval'],
          _clearInterval: window['clearInterval'],
          _clearTimeout: window['clearTimeout'],
          _setTimeout: window['setTimeout'],
          _Date: window['Date'],
          __lastDatetime: new Date().getTime(),
          __lastMDatetime: new Date().getTime(),
          videoSpeedInterval: 1000,
          /**
           * 初始化方法
           */
          init: function () {
            var timerContext = this;
            var h = helper(eHookContext, timerContext, util);

            h.applyHooking();

            // 设定百分比属性被修改的回调
            Object.defineProperty(timerContext, '_percentage', {
              get: function () {
                return timerContext.__percentage;
              },
              set: function (percentage) {
                if (percentage === timerContext.__percentage) {
                  return percentage;
                }
                h.percentageChangeHandler(percentage);
                timerContext.__percentage = percentage;
                return percentage;
              }
            });

            if (!normalUtil.isInIframe()) {
              console.log('[TimeHooker]', 'loading outer window...');
              h.applyUI();
              h.applyGlobalAction(timerContext);

            } else {
              console.log('[TimeHooker]', 'loading inner window...');
              normalUtil.listenParentEvent((function (percentage) {
                console.log('[TimeHooker]', 'Inner Changed', percentage)
                this.change(percentage);
              }).bind(this))
            }
          },
          /**
           * 调用该方法改变计时器速率
           * @param percentage
           */
          change: function (percentage) {
            var _this = this;
            this.__lastMDatetime = this._mDate.now();
            // console.log(this._mDate.toString());
            // console.log(new this._mDate());
            this.__lastDatetime = this._Date.now();
            // debugger;
            //---------------------------------//
            this._percentage = percentage;
            var oldNode = document.getElementsByClassName('_th-click-hover');
            var oldNode1 = document.getElementsByClassName('_th_times');
            (oldNode[0] || {}).innerHTML = 'x' + 1 / this._percentage;
            (oldNode1[0] || {}).innerHTML = 'x' + 1 / this._percentage;
            var a = document.getElementsByClassName('_th_cover-all-show-times')[0] || {};
            // console.log(a.className);
            a.className = '_th_cover-all-show-times';
            this._setTimeout.bind(window)(function () {
              a.className = '_th_cover-all-show-times _th_hidden';
            }, 100);
            this.changeVideoSpeed();
            this._clearInterval.bind(window)(this.videoSpeedIntervalId);
            this.videoSpeedIntervalId = this._setInterval.bind(window)(function () {
              _this.changeVideoSpeed();
              var rate = 1 / _this._percentage;
              if (rate === 1) {
                _this._clearInterval.bind(window)(_this.videoSpeedIntervalId);
              }
            }, this.videoSpeedInterval);
            normalUtil.sentChangesToIframe(percentage);
          },
          changeVideoSpeed: function () {
            var rate = 1 / this._percentage;
            rate > 16 && (rate = 16);
            rate < 0.065 && (rate = 0.065);
            // console.log(rate);
            rate = Number(rate).toFixed(2);
            var videos = querySelectorAll(document, 'video', true) || [];
            if (videos.length) {
              for (var i = 0; i < videos.length; i++) {
                videos[i].playbackRate = rate;
              }
            }
          }
        };
        // 默认初始化
        timerHooker.init();
        return timerHooker;
      }
    };

    if (global.eHook) {
      global.eHook.plugins({
        name: 'acXtimer',
        /**
         * 插件装载
         * @param util
         */
        mount: generate()
      });
    }
  }(window);
}

function initKeyListener() {
  function registerShortcutKeys(timer) {
    // 快捷键注册
    addEventListener('keydown', function (e) {
      switch (e.key) {
        // [加速]
        case 'c': {
          if (!e.ctrlKey) timer.changeTime(0.1, 0, true); // WARN 小心ctrl+c复制的时候不应该变速
          break;
        }
        // [减速]
        case 'x': {
          if (!e.ctrlKey) timer.changeTime(-0.2, 0, true);
          break;
        }
        // [默认值]
        case 'z': {
          if (!e.ctrlKey) timer.changeTime(0, 0, false, true);
          break;
        }
        case '0': {
          if (e.altKey) {
            timer.changeTime(0, 50);
            // WARN 延迟之后恢复速率
            timer._setTimeout(function () {
              timer.changeTime(0, 0, false, true);
            }, 200);
          }
        }
        default:
      }
    });
  }

  function YoutubeAutoFast(timer) {
    if (location.host.indexOf("youtube.com") >= 0) {
      // addStyle(".video-ads .ad-container .adDisplay, #player-ads, .ytp-ad-module, .ytp-ad-image-overlay{ display: none!important; }");
      timer._setInterval(function () {
        var adPassBtn = (document.querySelector(".ytp-ad-skip-button ") || document.querySelector(".videoAdUiSkipButton ")) || document.querySelector(".ytp-ad-overlay-close-container");
        adPassBtn && adPassBtn.click();
        if (document.querySelector(".ytp-ad-preview-container") != null) {
          console.log("准备加速");
          timer.changeTime(0, 50);
          // 100倍速度，那么需要：10秒 = 0.1秒 = 100 ms
          timer._setTimeout(function () {
            console.log("结束");
            timer.changeTime(0, 0, false, true);
          }, 1200);
        }
      }, 1500)
    }
  }

  registerShortcutKeys(acXtimer);
  YoutubeAutoFast(acXtimer)
}

initHook();
initTimeHook();
console.log("这里");
initKeyListener();
