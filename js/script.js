
window.onload = function(){
//  Change background-color :
    const changeBackground = document.querySelector(".box-ch-background #check")
    changeBackground.addEventListener('click',function(){
        const text = document.querySelectorAll('.text p');
        document.body.classList.toggle('dark')
        text.forEach((el)=>{
            el.classList.toggle('color-text')
        })
    })
// --------------------------------------------------------

    const btnMobile = document.querySelector("#btn-mobile");

    const nav = document.querySelector("nav");
    function toggleMenu(event){ 
        nav.classList.toggle('active');
        const active = nav.classList.contains('active'); 
        event.currentTarget.setAttribute('aria-expanded',active);
        if(active){event.currentTarget.setAttribute('aria-label', 'fechar Menu');
    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')    
    }
    }

    btnMobile.addEventListener('click',toggleMenu);

    // Click Menu:
    clickMenu() 
    function clickMenu(){
        const menuLinks = document.querySelectorAll('nav a[href^="#"]');
    
        function getDistanceFromtheTop(element_1){
            const id = element_1.getAttribute("href");
          
            return document.querySelector(id).offsetTop;     
        }

        function scrollToSection(event_1){
           event_1.preventDefault();
           const  distanceFromTheTop = getDistanceFromtheTop(event_1.target) - 90;
        smoothScrollTo(0,distanceFromTheTop,); 
        nav.classList.toggle('active');
    
        }

        menuLinks.forEach((link)=>{
            link.addEventListener("click",scrollToSection);

        });

        function smoothScrollTo(endX, endY, duration) {
            const startX = window.scrollX || window.scrollX;
            const startY = window.scrollY || window.scrollY;
            const distanceX = endX - startX;
            const distanceY = endY - startY;
            const startTime = new Date().getTime();
          
            duration = typeof duration !== "undefined" ? duration : 400;
          
            const easeInOutQuart = (time, from, distance, duration) => {
              if ((time /= duration / 2) < 1)
                return (distance / 2) * time * time * time * time + from;
              return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
            };
          
            const timer = setInterval(() => {
              const time = new Date().getTime() - startTime;
              const newX = easeInOutQuart(time, startX, distanceX, duration);
              const newY = easeInOutQuart(time, startY, distanceY, duration);
              if (time >= duration) {
                clearInterval(timer);
              }
              window.scroll(newX, newY);
            }, 1000 / 60);
          }

    }   
           
 //Controle de animação section Projects :
 const debounce = function(func,wait,immediate){
    let timeout;
    return function(...args){
        const context =this;
        const later = function(){
            timeout = null;
            if(!immediate) func.apply(context,args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later,wait);
        if(callNow) func.apply(context,args);
    };
};
    //  Animation slider section Projects: 
    const target = document.querySelectorAll("[data-anime]");
    const animationClass = 'animate';

    function animateScroll(){
        const windowTop = window.scrollY  + ((window.innerHeight * 3) / 3.5);
        target.forEach(function(el){
            if((windowTop) > el.offsetTop){
                el.classList.add(animationClass);
            }else{
                el.classList.remove(animationClass);
            }
        })

    }
    animateScroll();

    if(target.length){
        window.addEventListener('scroll',debounce(function(){
            animateScroll();

        },200));
    }

    // Validation de Form:
   
 const nome = document.querySelector("form #name");
 const email = document.querySelector("form #email");
 const tel = document.querySelector("form #tel");
 const textarea = document.querySelector("form #msg")
 const spans = document.querySelectorAll("form span");
 const btnForm = document.querySelector("form #btn-form");

btnForm.addEventListener("click",(e)=>{
    
    e.preventDefault()
    
    if(nameValidation(nome) == false){
     applyError(nome)
    }
    else if(emailValidation(email) == false){
        applyError(email)
    }
    else if(telValidation(tel) == false){
        applyError(tel)
    }
    else if(textareaValidation(textarea) == false){
        applyError(textarea)
    }
    
    else{
        alert('Mensagem enviado')
    }

});

//Function to validation fields:
function nameValidation(nome){
  
        const amount = nome.value.split(' ').length;
        const splitStr = nome.value.split(' ');
        if(nome == ''){
            return false
        }
         if(amount >=2 ){
            for( let i = 0 ; i < amount; i++ ){
                if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){       
    
                }else{
                    return false;
                }
            }
         }else{

            return false;
         }
}

function emailValidation(email){
  
    if(email == ''){
        return false;
    }
    if(email.value.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
        return false;
    }
    // return true;
}

function telValidation(tel){
    if(tel == ''){
        return false;
    }
    if(tel.value.match(/^[0-9]{2}[0-9]{5}[0-9]{4}$/) == null){
    return false
    }
}

// CORRIGIR ERRO DE VALIDAÇÃO DO TEXT AREA
function styleTextArea(){
    // textarea.style.background='red'
    
    textarea.addEventListener("focus",()=>{
        textarea.style.background=' #ffff007e'
    })
    textarea.addEventListener('blur',()=>{
        textarea.style.background=''
    })
}
styleTextArea()

//Function to show form error:
function applyError(index){
    index.style.border='2px solid red';
    index.value= '*Campo Inválido';
    index.style.color="red";
    
 }
 document.querySelectorAll("input[type=text]").forEach((index)=>{
    index.addEventListener("focusin",()=>{
    index.value='';
    index.style.color="#000";
    index.style.border ='none';
  })
 })



}



