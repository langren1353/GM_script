function getTrueFatherChild(preNode, curNode, fatherNode) {
  const curPossible = curNode.offsetHeight > 0 && fatherNode.offsetHeight / curNode.offsetHeight > 1.5
  const anotherPossible =  [...fatherNode.children].some(one => {
    return one !== curNode && one.offsetHeight > 0 && one.offsetHeight / curNode.offsetHeight > 5;
  })
  
  if (curPossible) {
    if (anotherPossible) {
      console.log(curNode, fatherNode)
      markFatherChild(curNode, fatherNode)
      return fatherNode
    } else {
      markFatherChild(preNode, curNode)
      return curNode
    }
  } else {
    return null
  }
}
