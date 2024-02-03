const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')
const nav1 = document.getElementById('nav-1')
const nav2 = document.getElementById('nav-2')
const nav3 = document.getElementById('nav-3')
const nav4 = document.getElementById('nav-4')
const nav5 = document.getElementById('nav-5')
const navItems = [nav1,nav2,nav3,nav4,nav5]
function navAnimation(dir1,dir2){
    navItems.forEach((nav,i)=>{
        nav.classList.replace(`slide-${dir1}-${i+1}`,`slide-${dir2}-${i+1}`)
    })
}
function toggleNav(){
    // toggle menu bars
    menuBars.classList.toggle('change')
    // togle menu active
    overlay.classList.toggle('overlay-active')
    if(overlay.classList.contains('overlay-active')){
     
        overlay.classList.replace('overlay-slide-left','overlay-slide-right')
        // for(let i=0 ;i<navItems.length;i++){
        //     navItems[i].classList.replace(`slide-out-${i+1}`,`slide-in-${i+1}`)
        // }
      navAnimation('out','in')
    }else{
        overlay.classList.replace('overlay-slide-right','overlay-slide-left')
       navAnimation('in','out')
    }
}

//Event listeners
menuBars.addEventListener('click',toggleNav)
navItems.forEach((nav)=>{
    nav.addEventListener('click',toggleNav)
})
