function loader(){
    var tl=gsap.timeline()
    var grow=0
    setInterval(function(){
        if(grow<100){
            h5timer.innerHTML=grow++
        }
        else{
            h5timer.innerHTML=grow
        }
    })
    tl.from(".nl img",{
        y:"300%",
        opacity:0,
        duration:1
    })
    tl.from(".line h1",{
        y:"300%",
        duration:1,
        stagger:"0.5",
    })
    tl.from(".nr-r",{
        y:"300%",
        duration:1,
        opacity:0,
    })
    tl.from(".nr-l a",{
        x:"300%",
        duration:1,
        opacity:0,
        stagger:"-0.5"
    })
    tl.from("nav",{
        backgroundColor:"transparent",
        duration:0.5
    })
    tl.from(".pg1-text h2",{
        y:"300%",
        duration:0.5,
        opacity:0,
        stagger:"0.5"
    })
   
}   

function nav(){
    var nav=document.querySelector(".nr-r i")
    var log=document.querySelector("#log_button")
    var nav2=0
    var login=0
    nav.addEventListener("click",function(){
        if(nav2==0){
            gsap.to(".nr-l",{
                transform:"translateX(0)",
                duration:0.5,
                stagger:-0.5
            })
            nav2=1
        }
        else{
            gsap.to(".nr-l",{
                transform:"translateX(200%)",
                duration:0.5,
                stagger:0.5
            })
            nav2=0
        }
    })
    log.addEventListener("click",function(){
        if(login==0){
            gsap.to("#login_items",{
                display:"flex",
                duration:0.5,
                stagger:-0.5
            })
            login=1
        }
        else{
            gsap.to("#login_items",{
                display:"none",
                duration:0.5,
                stagger:0.5
            })
            login=0
        }
        gsap.to("#login_items",{
            display:"none",
            duration:0.5,
            delay:2,
            stagger:0.5})
    })
}
nav()