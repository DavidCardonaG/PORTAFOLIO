
let btn = document.querySelector('#btn1');
btn.addEventListener('click',()=>{
    window.location = "https://davidcardonag.github.io/FIXMOVIE-/"
})

let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click',()=>{
    window.location = "https://github.com/DavidCardonaG/FIXMOVIE-"
})
let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click',()=>{
    window.location = "https://davidcardonag.github.io/WEB-SHOP/"
})
let btn4 = document.querySelector('#btn4');
btn4.addEventListener('click',()=>{
    window.location = "https://github.com/DavidCardonaG/WEB-SHOP"
})
let btn5 = document.querySelector('#btn5');
btn5.addEventListener('click',()=>{
    window.location = "https://davidcardonag.github.io/ECCOMERCE/"
})
let btn6 = document.querySelector('#btn6');
btn6.addEventListener('click',()=>{
    window.location = "https://github.com/DavidCardonaG/ECCOMERCE"
})
let btn7 = document.querySelector('#btn7');
btn7.addEventListener('click',()=>{
    window.location = "https://github.com/DavidCardonaG?tab=repositories"
})

const formulario = document.getElementById('form');
const mailto = document.getElementById('mailto');
formulario.addEventListener('submit',SubmitHandler);

async function SubmitHandler(e) {
    e.preventDefault();
    const form = new FormData(this)
    const resp = await fetch(this.action,{
        method: 'POST',
        body: form,
        headers:{
         'Accept' : 'application/json'
        }
    })
    if(resp.ok){
        this.reset()
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'El Mensaje ha sido enviado',
            showConfirmButton: false,
            timer: 2000
        })
    }
}