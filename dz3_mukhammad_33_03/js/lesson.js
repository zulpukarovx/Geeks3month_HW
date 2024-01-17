const phoneInput = document.getElementById('phone_input')
const phoneButton = document.getElementById('phone_button')
const phoneResult = document.getElementById('phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}

//Recursion

let count = 0;

// const increment = () => {
//     count ++
//     console.log(count)
//     if (count < 500){
//         increment()
//     }
// }
//
// increment()

const tabContents = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')
let currentTabIndex = 0
let intervalId = null

const hideTabContent = () => {
    tabContents.forEach((tabBlock) => {
        tabBlock.style.display = 'none'
    })
    tabItems.forEach((tab) => {
        tab.classList.remove('tab_content_item_active')
    })
}

showTabContent = (i = 0) => {
    tabContents[i].style.display = 'block'
    tabItems[i].classList.add('tab_content_item_active')
}

autoSlideTabContent = (startIndex = 0) => {
    let i = startIndex
    intervalId = setInterval(() => {
        i++
        if (i > tabContents.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)
}

hideTabContent()
showTabContent()
autoSlideTabContent()

tabParent.onclick = (e) => {
    if (e.target.classList.contains('tab_content_item')) {
        tabItems.forEach((tabItem, tabIndex) => {
            if (e.target === tabItem) {
                currentTabIndex = tabIndex
                hideTabContent()
                showTabContent(tabIndex)
                clearInterval(intervalId)
                autoSlideTabContent(currentTabIndex)
            }
        })
    }
}
