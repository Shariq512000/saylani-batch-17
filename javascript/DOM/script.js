// console.log(document.childNodes[1].childNodes[1].childNodes[0].childNodes[2].childNodes[0])

// function addClassOnParent(event){
//     // event.target.parentNode.className = "active"
//     console.log(event.target.previousSibling)
//     // let lis = document.getElementsByTagName("li");
//     // lis[2]

// }

// let targetedElement = document.getElementById("test");
// console.log(targetedElement.attributes[1].nodeValue)
// targetedElement.setAttribute("class", "special")


let para = document.createElement("p");

para.setAttribute("class", "special");
para.setAttribute("id", "test2");

let text = document.createTextNode("Hello!")

para.appendChild(text)

let targetedElement = document.querySelector("body");

let firstElement = targetedElement.firstChild;

let a = document.getElementById("testA");

targetedElement.removeChild(a)

targetedElement.insertBefore(para, firstElement)

console.log(para)