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
    var view=document.querySelector("#view")
    view.addEventListener("click",function(){
        gsap.to(".request",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#viewLeave",{
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
function studentPanel(){
    var ts1=document.querySelector("#ts1");
    ts1.addEventListener("click",function(){
        gsap.to(".studentInfo2",{
            display:"none"
        })
        gsap.to("#studentInfo",{
            display:"flex"
        })
    })
    var ts3=document.querySelector("#ts3");
    ts3.addEventListener("click",function(){
        gsap.to(".studentInfo2",{
            display:"none"
        })
        gsap.to("#studentDelete",{
            display:"flex"
        })
    })
}
studentPanel()
function examPanel(){
    var ep1=document.querySelector("#ep1");
    ep1.addEventListener("click",function(){
        gsap.to(".exams",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#examBox",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#datesheetUpload",{
            display:'flex',
            duration:0.5,
        })
    })
    var ep2=document.querySelector("#ep2");
    ep2.addEventListener("click",function(){
        gsap.to(".exams",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#examBox",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#marks",{
            display:'flex',
            duration:0.5,
        })
    })
}
examPanel()
function marksPanel(){
    var mp1=document.querySelector("#mp1");
    mp1.addEventListener("click",function(){
        gsap.to("#marksPanel",{
            display:'none',
            duration:0.5,
        })
        gsap.to(".marksElem",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#marksBox",{
            display:"flex",
            duration:0.5,
        })
        gsap.to("#viewMarks",{
            display:'flex',
            duration:0.5,
        })
    })
    var mp2=document.querySelector("#mp2");
    mp2.addEventListener("click",function(){
        gsap.to("#marksPanel",{
            display:'none',
            duration:0.5,
        })
        gsap.to(".marksElem",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#marksBox",{
            display:"flex",
            duration:0.5,
        })
        gsap.to("#uploadMarks",{
            display:'flex',
            duration:0.5,
        })
    })
}
function marksViewPanel(){
    var vp1=document.querySelector("#vp1");
    vp1.addEventListener("click",function(){
        gsap.to("#marksViewPanel",{
            display:'none',
            duration:0.5,
        })
        gsap.to(".report",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#viewMarksBox",{
            display:"flex",
            duration:0.5,
        })
        gsap.to("#classReport",{
            display:'flex',
            duration:0.5,
        })
    })
    var vp2=document.querySelector("#vp2");
    vp2.addEventListener("click",function(){
        gsap.to("#marksViewPanel",{
            display:'none',
            duration:0.5,
        })
        gsap.to(".report",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#viewMarksBox",{
            display:"flex",
            duration:0.5,
        })
        gsap.to("#studentReport",{
            display:'flex',
            duration:0.5,
        })
    })
}
marksPanel()
marksViewPanel()
function approve(){
    var buttons = document.querySelectorAll("#leaveInfo button");
    buttons.forEach(function(button){
        button.addEventListener("click",function(){
            gsap.to("#leaveInfo button",{
                innerText:"APPROVED",
                backgroundColor:"green"
            })
        })
    })
}
approve()
