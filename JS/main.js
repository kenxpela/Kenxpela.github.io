let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle(open-menu);
    menu.classList.toggle("move");
};

window.onscroll =() =>{
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
}

//email
function validate() {
    let name = document.getElementById(".name")
    let email = document.getElementById(".email")
    let msg = document.getElementById(".message")
    let sendBtn = document.getElementById(".send-btn");

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        } else{
            sendmail (name.value, email.value, msg.value);
            succes();
        }
    });
}
validate();
function sendmail(name,email,msg){
    emailjs.send("service_9d3qzsh","template_m3nse0c",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}

function emptyerror() {
    swal({
        title: "Oops...!",
        text: "Fileds cannot be empty!",
        icon: "Error",
      });
}

function succes() {
    swal({
        title: "Email sent successfully!",
        text: "We try to reply in 24 hours as as possible",
        icon: "Success",
      });
}


//header background scroll

let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0);
});
//scroll top
let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('scroll-active', window.scrollY > 0);
});




