function findPosibleTwoLine() {
  function checkOne(element) {
    if(!element.getAttribute('two-check')) {
      element.setAttribute('two-check', 1)
    } else {
      return false
    }
    
    if(element.childNodes.length <= 2) return false
    const childNodeClassNameList = [...element.childNodes].map(one => one.className).filter(one => one && one !== '')
    const childNodeClassNameSet = new Set(childNodeClassNameList)
    tf = childNodeClassNameSet.size !== childNodeClassNameList.length
    if(tf) {
      // debugger
    }
    return tf
  }
  
  const gList = document.querySelectorAll(".g")
  const possibleList = []
  for(const perG of gList) {
    let curIndex = 5
    let curNode = perG.parentNode
    let res
    
    while(curIndex-- > 0) {
      res = checkOne(curNode)
      if(res) {
        possibleList.push(curNode)
        break
      }
      curNode = curNode.parentNode
    }
  }
  console.log(possibleList)
  return possibleList
}
findPosibleTwoLine()
