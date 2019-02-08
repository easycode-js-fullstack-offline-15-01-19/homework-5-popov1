// -------------------------- Home work - 5 --------------------------
// -------------------------- Попов Евгений --------------------------

// Lesson 6

let head = document.head;
let body = document.body;

console.log(document.head);
console.log(document.body);

let children = body.children;
console.log(children);

let firstDiv = body.firstElementChild;
console.log(firstDiv);
console.log(firstDiv.children);
let childrenArr = firstDiv.children;

for (let i = 1; i < childrenArr.length - 1; i++) {
    console.log(childrenArr[i]);
}

/**
 * Check if parent element is parent for child element
 * 
 * @param {DOMElement} parent
 * @param {DOMElement} child
 * @returns {Boolean}
 */
function isParent(parent, child) {
    let parentTag = parent.tagName;
    if (child.closest(parentTag)) {
        return true;
    }
    return false;
}

let allSiteLinks = document.getElementsByTagName('a');
let list  = document.getElementsByTagName('ul')[0];
let links = [];
for (let i = 0; i < allSiteLinks.length; i++ ) {
    if (!isParent(list, allSiteLinks[i])) {
        links.push(allSiteLinks[i]);
    } 
}

let beforeUlElement    = list.previousElementSibling;
let afterUlElement     = list.nextElementSibling;
let numberOfLiElements = list.getElementsByTagName('li').length;


// 5. В коде с занятия написать функцию по редактированию задачи.  ??
// 6. Подумать и улучшить функцию generateId(); ??


// Lesson 7
// get only text
console.log(document.getElementsByTagName('p')[0].innerHTML);

/**
 * @description Function getElementInfo return info about current DOM element
 * 
 * @param {Object} DOMNode DOM element
 * @returns {Object}
 */
function getElementInfo (DOMNode) {

    let data = {};
    data.type = DOMNode.nodeType;
    data.name = DOMNode.tagName;
    data.childreNumber = DOMNode.children.length ? DOMNode.children.length : 0;

    return data;
}

/**
 * Return array of links texts
 * 
 * @param {DOMElement} DOMNode
 * @returns {array}
 */
function getLinkTextArray (DOMNode) {
    let textArray = [];
    let links = DOMNode.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        textArray.push(links[i].innerHTML);
    }
    return textArray;
}

getLinkTextArray(list); // result Array(4) [ "Link1", "Link2", "Link3", "Link4" ]


let paragraf = document.getElementsByTagName('p')[0];
let pChildren = paragraf.childNodes;
for (let i = 0; i < pChildren.length; i++) {
    if (pChildren[i].nodeType === 3) {
        pChildren[i].data = "-text-";
    }
}

list.classList.add('list');


// set id for link
let el = list;
let index = 1;

while (el) {
  el = el.nextElementSibling;
  if (el.tagName === "A") {
      el.setAttribute("id", "link");
      break;
  }
  index++;
}

// set class name for li elements
let liList = list.getElementsByTagName('li');
for (let i = 0; i < liList.length; i++) {
    if (i % 2 === 0) {
        liList[i].classList.add('item');
    }
}

for (let i = 0; i < allSiteLinks.length; i++) {
    allSiteLinks[i].classList.add('custom-link');
}

for (let i = 1; i < 5; i++) {
    let newLi = document.createElement("li");
    newLi.classList.add('new-item');
    let newNumber = list.children.length+ 1;
    newLi.innerHTML = "item" + newNumber;
    list.appendChild(newLi);
}

var liLinks = document.getElementsByClassName('list')[0].getElementsByTagName('a');
for (let i = 0; i < liLinks.length; i++) {
    let newLi = document.createElement("strong");
    liLinks[i].appendChild(newLi);
}

let exFisrt = body.firstChild;
let img = document.createElement('img');
img.setAttribute("src", "https://storage.googleapis.com/easycode_img/processImg-1527844998486.png");
img.setAttribute("alt", "Test image");

body.insertBefore(img, exFisrt);


let green = document.getElementsByTagName('mark')[0];
green.innerHTML += "green";
green.classList.add('green');


let newListChildren = list.children;
let listArray = [];
for (let i = 0; i < newListChildren.length; i++) {
    listArray[i] = newListChildren[i].textContent;
}

function compare(a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
}

let sortListArray = listArray.sort(compare);
for (let i = 0; i < newListChildren.length; i++) {
    newListChildren[i].textContent = sortListArray[i];
}
