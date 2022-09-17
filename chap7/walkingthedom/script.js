console.log(document.body.firstchild)
console.log(document.body.laststchild)
let arr=Array.from(document.body.lastChild)
console.log(document.body.childNodes)
Element.childNodes[0]===Element.firstchild
Element.childNodes[Element.childNodes.length-1]===Element.laststchild
Element.haschildNodes("to check if there are any child nodes")