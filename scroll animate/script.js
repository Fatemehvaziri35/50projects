'use strict'
const boxes=document.querySelectorAll('.box')

function scrollBox(){
    const trigger=window.innerHeight*0.7
    boxes.forEach((box)=>{
      const boxTop=box.getBoundingClientRect().top
      if( boxTop < trigger){
        box.classList.add('show')
      }else{
        box.classList.remove('show')
      }
    })
}
scrollBox()
window.addEventListener('scroll' , scrollBox)

