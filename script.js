let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
let sections=document.querySelector('section');
let navLinks=document.querySelector('header nav a');
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
 
const scriptURL = 'https://script.google.com/macros/s/AKfycbzA67KkppbJdLZ7fub1QpYJoCfQLuvPx2nFAFv45igUoMtcwLGWgzBpCyBz06VTyvnS/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML ="Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML=""
        },500)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
