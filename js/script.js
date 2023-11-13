const logo = document.getElementById("logo");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido")
})

logo.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral");
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
});