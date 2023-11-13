const sliderDivEl=document.querySelectorAll('.slider-item')

function removeActiveClass(){
    for( let i=0; i<sliderDivEl.length;i++)
    sliderDivEl[i].classList.remove('active')
}

for( let i=0; i<sliderDivEl.length;i++){
    sliderDivEl[i].addEventListener('click',()=>{
        removeActiveClass()
        sliderDivEl[i].classList.add('active')
    })
}