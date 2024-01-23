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

// let count = 0;

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

//currency converter

const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')

const converter = (element, targetElement, targetElementTwo, currentValue) => {
    element.addEventListener('input', () => {
        const request = new XMLHttpRequest()
        request.open('GET', '../currency.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
            const response = JSON.parse(request.response)
            switch (currentValue) {
                case 'som':
                    targetElement.value = (element.value / response.usd).toFixed(2)
                    targetElementTwo.value = (element.value / response.eur).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (element.value * response.usd).toFixed(2)
                    targetElementTwo.value = (targetElement.value / response.eur).toFixed(2)
                    break
                case 'eur':
                    targetElement.value = (element.value * response.eur).toFixed(2)
                    targetElementTwo.value = (targetElement.value / response.usd).toFixed(2)
                    break
                default:
                    break
            }
            if(element.value === '') {
                targetElement.value = ''
                targetElementTwo.value = ''
            }
        }
    })
}

converter(somInput, usdInput, eurInput, 'som')
converter(usdInput, somInput, eurInput, 'usd')
converter(eurInput, somInput, usdInput, 'eur')