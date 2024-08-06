type Func = (...args: any[]) => any
/**
 * 防抖函数
 * @param { Function } func 函数
 * @param { Number } delay 防抖时间
 * @param { Boolean } immediate 是否立即执行
 * @param { Function } resultCallback
 */
export function debounce(
  func: Func,
  delay: number = 500,
  immediate?: boolean,
  resultCallback?: Func
) {
  let timer: null | ReturnType<typeof setTimeout> = null
  let isInvoke = false
  const _debounce = function (this: unknown, ...args: any[]) {
    return new Promise((resolve, reject) => {
      if (timer) clearTimeout(timer)
      if (immediate && !isInvoke) {
        try {
          const result = func.apply(this, args)
          if (resultCallback) resultCallback(result)
          resolve(result)
        } catch (e) {
          reject(e)
        }
        isInvoke = true
      } else {
        timer = setTimeout(() => {
          try {
            const result = func.apply(this, args)
            if (resultCallback) resultCallback(result)
            resolve(result)
          } catch (e) {
            reject(e)
          }
          isInvoke = false
          timer = null
        }, delay)
      }
    })
  }
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    isInvoke = false
    timer = null
  }
  return _debounce
}

/**
 * 节流函数
 * @param { Function } func
 * @param { Boolean } interval
 * @param { Object } options
 * leading:初始 trailing:结尾
 */
export function throttle(
  func: Func,
  interval: number,
  options = { leading: false, trailing: true }
) {
  let timer: null | ReturnType<typeof setTimeout> = null
  let lastTime = 0
  const { leading, trailing } = options
  const _throttle = function (this: unknown, ...args: any[]) {
    const nowTime = Date.now()
    if (!lastTime && !leading) lastTime = nowTime
    const remainTime = interval - (nowTime - lastTime)
    if (remainTime <= 0) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      lastTime = nowTime
      func.apply(this, args)
    }
    if (trailing && !timer) {
      timer = setTimeout(() => {
        lastTime = !leading ? 0 : Date.now()
        timer = null
        func.apply(this, args)
      }, remainTime)
    }
  }
  _throttle.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
    lastTime = 0
  }
  return _throttle
}

/**
 * 驼峰转换下划线
 * @param { String } name
 */
export function toLine(name: string) {
  return name.replace(/([A-Z])/g, "_$1").toLowerCase()
}

/*
  自定义保留 precision 位小数，并使用 separator 分隔符进行数字格式化
  value：格式化目标数字
  precision：精度，保留小数点后几位，默认2位
  separator：千分位分隔符，默认为','
  decimal：小数点符号，默认'.'
  prefix：前缀字符，默认''
  suffix：后缀字符，默认''
  formatNumber(123456789.87654321, 2, ',') // 123,456,789.88
*/
export function formatNumber(
  value: number | string,
  precision = 2,
  separator = ",",
  decimal = ".",
  prefix = "",
  suffix = ""
): string {
  if (Number(value) === 0) {
    return Number(value).toFixed(precision)
  }
  if (!value) {
    return ""
  }
  value = Number(value).toFixed(precision)
  value += ""
  const nums = value.split(".")
  let integer = nums[0]
  const decimals = nums.length > 1 ? decimal + nums[1] : ""
  const reg = /(\d+)(\d{3})/
  function isNumber(value: any) {
    return Object.prototype.toString.call(value) === "[object Number]"
  }
  if (separator && !isNumber(separator)) {
    while (reg.test(integer)) {
      integer = integer.replace(reg, "$1" + separator + "$2")
    }
  }
  return prefix + integer + decimals + suffix
}
