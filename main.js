/************************
 * DOM HELPER FUNCTIONS *
 ************************/


const result = document.querySelector('.result')
function printValue(text) {
    let newLi = document.createElement("LI");
    let textNode = document.createTextNode(text);
    newLi.appendChild(textNode);
    result.appendChild(newLi);
}
// const lis = document.querySelectorAll('ul li')
function clearResult(){
    const lis = document.querySelectorAll('ul li')
    for (const li of lis) {
        li.remove();
    }
}
const userText = document.querySelector('#user-input')
// function typeText(){
//     clearResult()
//     printValue(userText.value)
//     userText.value=''
// }
const bigButton = document.querySelector('.biggify.btn.btn-primary')

const bigText = function(){
    clearResult()
    printValue(biggify(userText.value))
    userText.value=''
    userText.focus()
}
bigButton.addEventListener('click',bigText)

const nasaButton = document.querySelector('.nasafy')
const nasaText = function(){
    clearResult()
    printValue(nasafy(userText.value))
    userText.value=''
    userText.focus()

}
nasaButton.addEventListener('click',nasaText)

const reverseButton = document.querySelector('.reversify')
const reverseText = function(){
    clearResult()
    printValue(reversify(userText.value))
    userText.value=''
    userText.focus()

}
reverseButton.addEventListener('click',reverseText)
const crazyButton = document.querySelector('.crazify')
const crazyText = function(){
    clearResult()
    printValue(crazify(userText.value))
    userText.value=''
    userText.focus()

}
crazyButton.addEventListener('click',crazyText)

const titleButton = document.querySelector('.titleify')
const titleText = function(){
    clearResult()
    printValue(titleify(userText.value))
    userText.value=''
    userText.focus()

}
titleButton.addEventListener('click',titleText)
// const lis = document.querySelectorAll()
// function clearResult(){
//     for(const li of )
// }

/***************************
 * EVENT HANDLER FUNCTIONS *
 ***************************/



/**************************
 * SET UP EVENT LISTENERS *
 **************************/



