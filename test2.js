var timeCostFunc = (delayTime) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ msg: '返回的res2' })
    }, delayTime)
  })
}

var dealFunc = () => {
  return new Promise((resolve, reject) => {
    timeCostFunc(3000).then(res => {
      console.log("请求结束")
      console.log(res.msg)
    })
  })
}

var trueFunc = async () => {
  console.log("调用start");
  await dealFunc()
  console.log("调用end");
}

trueFunc()


request