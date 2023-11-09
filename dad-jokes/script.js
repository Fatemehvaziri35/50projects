'use strict'
const btnEl=document.querySelector('.btn')
const jokeEl=document.querySelector('.joke')

btnEl.addEventListener('click',generateJoke)
generateJoke()
async function generateJoke(){
    const config = {
        headers:{
            Accept:'application/json',
        },
    }
const res=await fetch('https://icanhazdadjoke.com', config)
const date=await res.json()
jokeEl.innerHTML=date.joke
}