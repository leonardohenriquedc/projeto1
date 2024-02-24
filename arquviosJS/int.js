// Criando as variaveis 

var navmb = document.querySelector("#menu-hbm")
var navp = document.querySelector("#navp-p")
var navp2 = document.querySelector("#nav-p2")

function click(){
    
    if(navp2.style.display === 'grid'){
        navp2.style.display = 'none'
    }
    else if(navp2.style.display = 'none'){
        navp2.style.display = 'grid'
    }
    console.log(navp2.style.display)
}


function rs(){
    if(window.innerWidth <= '600'){
        navmb.style.display = 'grid'
    }
    else if(window.innerWidth >= '600'){
        navmb.style.display = 'none'
    }
    console.log(navmb.style.display)
}

window.addEventListener('load', rs)

navmb.addEventListener('click', click)
