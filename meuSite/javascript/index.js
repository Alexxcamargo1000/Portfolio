const target = document.querySelectorAll('[data-anime]')
const animeClass = 'anima'

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 2) / 4);
    target.forEach(function(element) {
        if (windowTop > element.offsetTop) {
            element.classList.add(animeClass)
        } else {
            element.classList.remove(animeClass)
        }

    })
}
animeScroll();
if (target.length) {
    window.addEventListener('scroll', function() {
        animeScroll();
        ControlarBotao();

    })
}

///////////// navegação de uma pagina/////////

const menuItems = document.querySelectorAll('.menu a[href^="#"]');
const botao = document.querySelector('.botao');
const menu = document.querySelector('.nav')
console.log(menu)
menuItems.forEach(item => {
    item.addEventListener('click', scrollOnId);

})

function scrollOnId(event) {
    botao.classList.add('botao-aparece')

    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    console.log(id)
    const to = document.querySelector(id).offsetTop;
    console.log(to)
    window.scroll({
        top: to,
        behavior: 'smooth'
    })

}




botao.addEventListener('click', voltarAoTopo);

function voltarAoTopo(event) {
    botao.classList.remove('botao-aparece')
    event.preventDefault();
    const to = document.querySelector('principal')
    window.scroll({
        top: to,
        behavior: 'smooth'
    })
}

function ControlarBotao() {
    if (window.pageYOffset < 400) {
        botao.classList.remove('botao-aparece')
    } else
        botao.classList.add('botao-aparece')

}


function clicar() {
    botao.classList.remove('botao-aparece')
}

// function navFixed() {
//     if(window.pageYOffset < 200){
//         menu.classList.remove('fixed')

//     }else
//         menu.classList.add('fixed') 
//         window.scroll({
//             behavior:'smooth'
//         }) 
// }


const modal = document.querySelectorAll(".modal");

let modalArray = []
let btnId = []
modal.forEach((item) => {
    modalArray.push(item.id)
    
 }) 

 const idModal = modalArray.map(item => {
    const array = item.split("_")

    return array[1]
 })

 

// Get the button that opens the modal
const btn = document.querySelectorAll(".item a");

btn.forEach((item) => {
    btnId.push(item.id)    
 })

 btn.forEach((item) => {
     item.addEventListener("click", abrirModal)
 })


 function abrirModal(){
   
    btnId.map((id)=>{
        if(id === this.id){
            const newModal = document.getElementById(`modalProjeto_${id}`)
            const span = newModal.children[0].children[0]
            newModal.style.display = "block";
            
            span.addEventListener("click", () => {
                newModal.style.display = "none";
            })
        }
        
    })
 }
 
