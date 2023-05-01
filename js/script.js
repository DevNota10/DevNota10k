
window.onload = function(){
 
    const changeBackground = document.querySelector(".box-ch-background #check")
    changeBackground.addEventListener('click',function(){
        const text = document.querySelectorAll('.text p');
        document.body.classList.toggle('dark')
        text.forEach((el)=>{
            el.classList.toggle('color-text')
        })
    })

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
           const  distanceFromTheTop = getDistanceFromtheTop(event_1.target) - 200;
        smoothScrollTo(0,distanceFromTheTop,)
        
        }

        menuLinks.forEach((link)=>{
            link.addEventListener("click",scrollToSection);

        });

        function smoothScrollTo(endX, endY, duration) {
            const startX = window.scrollX || window.pageXOffset;
            const startY = window.scrollY || window.pageYOffset;
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
        




        const btnMobile = document.querySelector("#btn-mobile");

        function toggleMenu(event_2){
            if(event_2.type === 'touchstart ') event_2.preventDefault();
               
            
            const nav = document.querySelector("nav");
            nav.classList.toggle('active');
            const active = nav.classList.contains('active');
            event_2.currentTarget.setAttribute('aria-expanded',active);
            if(active){event_2.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        }else{
            event_2.currentTarget.setAttribute('aria-label', 'Abrir Menu') ;
        }
        }

        btnMobile.addEventListener('click',toggleMenu);
        btnMobile.addEventListener('touchstart',toggleMenu);
   
 

    
    //  Animation section Projects: 

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

    window.addEventListener('scroll',function(){
        animateScroll();
    });

}



