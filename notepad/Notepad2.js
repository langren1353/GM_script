function setSlowInterval(_this, callback = instance => {}, timeout, slowAfterTime = 10000, newTimeout = 1500) {
  const runAt = new Date().getTime()
  let _timeout = timeout
  let shouldPause = false
  let shouldEnd = false
  let intervalInstance = {
    reNew: () => {
      shouldPause = false
      _timeout = new Date().getTime()
    },
    pause: () => {
      shouldPause = true
    },
    cancel: () => {
      shouldEnd = true
    }
  }

  function newCallBack() {
    const deltaT = new Date().getTime() - runAt
    if(deltaT > slowAfterTime) {
      _timeout = newTimeout
    }

    if(shouldEnd) {
      return
    }

    if(!shouldPause) {
      callback.bind(_this)(intervalInstance)
      setTimeout(newCallBack, _timeout)
    } else {
      setTimeout(() => {}, 5000)
    }
  }

  newCallBack()
  return intervalInstance
}

function setCountFunction(callback, countPeriod) {
  let t = 0

  if(t % countPeriod === 0) {
    callback()
    t ++
  }
}


const datas = {
  name: 'datas',
  users: {
    name: 'zhangsan',
    say() {
      console.log(this.name)
    },
    start() {
      setSlowInterval(datas.users, () => {
        console.log(this.name)
      }, 300)
    }
  }
}

window.name = 'lisi'
const user = datas.users.start
user()
