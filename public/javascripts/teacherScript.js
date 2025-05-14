function teacherPanel(){
    var tp1=document.querySelector("#tp1")
    tp1.addEventListener("click",function(){
        gsap.to(".part",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#panel h2",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#personalInformation",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#tp1 ",{
            color:"#111",
            duration:0.5
        })
    })
    var tp2=document.querySelector("#tp2")
    tp2.addEventListener("click",function(){
        gsap.to(".part",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#panel h2",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#studentInformation",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#tp2 ",{
            color:"#111",
            duration:0.5
        })
    })
    var tp3=document.querySelector("#tp3")
    tp3.addEventListener("click",function(){
        gsap.to(".part",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#panel h2",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#exams",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#tp3 ",{
            color:"#111",
            duration:0.5
        })
    })
    var tp4=document.querySelector("#tp4")
    tp4.addEventListener("click",function(){
        gsap.to(".part",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#panel h2",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#leaveRequest",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#tp4 ",{
            color:"#111",
            duration:0.5
        })
    })
    var tp5=document.querySelector("#tp5")
    tp5.addEventListener("click",function(){
        gsap.to(".part",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#panel h2",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#editDetails",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#tp5 ",{
            color:"#111",
            duration:0.5
        })
    })
    var tp6=document.querySelector("#tp6")
    tp6.addEventListener("click",function(){
        gsap.to(".part",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#panel h2",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#changePassword",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#tp6 ",{
            color:"#111",
            duration:0.5
        })
    })
}
teacherPanel()
function leavePanel(){
    var apply=document.querySelector("#apply")
    apply.addEventListener("click",function(){
        gsap.to(".request",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#applyLeave",{
            display:'flex',
            duration:0.5,
        })
    })
    var approve=document.querySelector("#approve")
    approve.addEventListener("click",function(){
        gsap.to(".request",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#approveLeave",{
            display:'flex',
            duration:0.5,
        })
    })
}
leavePanel()