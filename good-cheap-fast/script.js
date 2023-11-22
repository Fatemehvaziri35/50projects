'use strict'
const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const fast = document.querySelector('#fast')
const cheap = document.querySelector('#cheap')



toggles.forEach(toggle =>toggle.addEventListener('change', (e)=>doTheTrick(e.target)))


function doTheTrick(theClickedOne) {
    if (good.checked && fast.checked && cheap.checked) {
        if (good === theClickedOne) {
            fast.checked = false
        }
        if (cheap === theClickedOne) {
            good.checked = false
        }
        if (fast === theClickedOne) {
            cheap.checked = false
        }

    }
}