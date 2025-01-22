var typed = new Typed(".typing",{
    strings:["","Student","Part-time Barista","Gamer","Aspiring IT Developer"],
    typeSpeed: 100,
    BackSpeed:60,
    loop:true
})


document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });