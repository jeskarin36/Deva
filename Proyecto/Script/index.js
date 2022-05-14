 
 'use strict';

 const numeroProject=document.querySelector(".project");
 const numeroworldclients1=document.querySelector(".wordl1");
 const numeroworldclients2=document.querySelector(".wordl2");
 const numeroCups=document.querySelector(".cups");
 const contenedor=document.querySelector(".contenedor-built");

 let i=0;
 let j=0;
 let m=0;

function contador(){
    setInterval(()=>{
        if(i<=1458){
            numeroProject.innerHTML=i;
        }
        if(j<1247){
            numeroCups.innerHTML=j;
        }
        if(m<1763){
            numeroworldclients1.innerHTML=m;
            numeroworldclients2.innerHTML=m;
        }
        i++;
        j++;
        m++;
    },5)
}

    let options = {
        //root: document.querySelector(''),
        //rootMargin: '0px',
        //threshold: 0
      }
      
      function callback(entries,observer){
         contador();
      }

      let observer = new IntersectionObserver(callback, options);
      observer.observe(contenedor);
 

