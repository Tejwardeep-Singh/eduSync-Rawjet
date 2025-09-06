function headPanel(){
    var hp1=document.querySelector("#hp1")
    hp1.addEventListener("click",function(){
        gsap.to(".part",{
            display:'none',
            duration:0.5,
        })
        gsap.to(".panel_elem a",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#personalInformation",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#hp1 a",{
            color:"white",
            duration:0.5
        })
        // Save state to localStorage
        localStorage.setItem('headActivePanel', 'personalInformation');
        localStorage.setItem('headActiveButton', 'hp1');
    })
    var hp2=document.querySelector("#hp2")
    hp2.addEventListener("click",function(){
        gsap.to(".part",{
            display:'none',
            duration:0.5,
        })
        gsap.to(".panel_elem a",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#teacherInformation",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#hp2 a",{
            color:"white",
            duration:0.5
        })
        // Save state to localStorage
        localStorage.setItem('headActivePanel', 'teacherInformation');
        localStorage.setItem('headActiveButton', 'hp2');
    })
    var hp3=document.querySelector("#hp3")
    hp3.addEventListener("click",function(){
        gsap.to(".part",{
            display:'none',
            duration:0.5,
        })
        gsap.to(".panel_elem a",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#studentInformation",{
            display: 'flex',
            duration:0.5,
        })
        gsap.to("#hp3 a",{
            color:"white",
            duration:0.5
        })
        // Save state to localStorage
        localStorage.setItem('headActivePanel', 'studentInformation');
        localStorage.setItem('headActiveButton', 'hp3');
    })
    var hp4=document.querySelector("#hp4")
    hp4.addEventListener("click",function(){
        gsap.to(".part",{
            display:'none',
            duration:0.5,
        })
        gsap.to(".panel_elem a",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#leaveRequest",{
            display: 'flex',
            duration:0.5,
        })
        gsap.to("#hp4 a",{
            color:"white",
            duration:0.5
        })
        // Save state to localStorage
        localStorage.setItem('headActivePanel', 'leaveRequest');
        localStorage.setItem('headActiveButton', 'hp4');
    })
    var hp5=document.querySelector("#hp5")
    hp5.addEventListener("click",function(){
        gsap.to(".part",{
            display:'none',
            duration:0.5,
        })
        gsap.to(".panel_elem a",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#editDetails",{
            display: 'flex',
            duration:0.5,
        })
        gsap.to("#hp5 a",{
            color:"white",
            duration:0.5
        })
        // Save state to localStorage
        localStorage.setItem('headActivePanel', 'editDetails');
        localStorage.setItem('headActiveButton', 'hp5');
    })
    var hp6=document.querySelector("#hp6")
    hp6.addEventListener("click",function(){
        gsap.to(".part",{
            display:'none',
            duration:0.5,
        })
        gsap.to(".panel_elem a",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#changePassword",{
            display: 'flex',
            duration:0.5,
        })
        gsap.to("#hp6 a",{
            color:"white",
            duration:0.5
        })
        // Save state to localStorage
        localStorage.setItem('headActivePanel', 'changePassword');
        localStorage.setItem('headActiveButton', 'hp6');
    })
    var hp7=document.querySelector("#hp7")
    hp7.addEventListener("click",function(){
        gsap.to(".part",{
            display:'none',
            duration:0.5,
        })
        gsap.to(".panel_elem a",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#exams",{
            display: 'flex',
            duration:0.5,
        })
        gsap.to("#hp7 a",{
            color:"white",
            duration:0.5
        })
        // Save state to localStorage
        localStorage.setItem('headActivePanel', 'exams');
        localStorage.setItem('headActiveButton', 'hp7');
    })
    var hp8=document.querySelector("#hp8")
    hp8.addEventListener("click",function(){
        gsap.to(".part",{
            display:'none',
            duration:0.5,
        })
        gsap.to(".panel_elem a",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#admin",{
            display: 'flex',
            duration:0.5,
        })
        gsap.to("#hp8 a",{
            color:"white",
            duration:0.5
        })
        // Save state to localStorage
        localStorage.setItem('headActivePanel', 'admin');
        localStorage.setItem('headActiveButton', 'hp8');
    })

}
var toggle = 0;
var toggle2 = 0;
headPanel()
function teacherPanel(){
    var tp1=document.querySelector("#tp1")
    tp1.addEventListener("click",function(){
        gsap.to(".teacherInfo",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#teacherPanel h2",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#teacherInfo",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#tp1 ",{
            color:"#111",
            duration:0.5
        })
        // Save sub-panel state
        localStorage.setItem('headActiveSubPanel', 'teacherInfo');
    })
    var tp2=document.querySelector("#tp2")
    tp2.addEventListener("click",function(){
        gsap.to(".teacherInfo",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#teacherPanel h2",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#teacherAdd",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#tp2 ",{
            color:"#111",
            duration:0.5
        })
        // Save sub-panel state
        localStorage.setItem('headActiveSubPanel', 'teacherAdd');
    })
    var tp3=document.querySelector("#tp3")
    tp3.addEventListener("click",function(){
        gsap.to(".teacherInfo",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#teacherPanel h2",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#teacherRemove",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#tp3 ",{
            color:"#111",
            duration:0.5
        })
        // Save sub-panel state
        localStorage.setItem('headActiveSubPanel', 'teacherRemove');
    })

}
teacherPanel()
function examPanel(){
    var ep1=document.querySelector("#ep1");
    ep1.addEventListener("click",function(){
        gsap.to("#examPanel h2",{
            color:"#4E3629",
            duration:0.5,
        })
        gsap.to(".exams",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#examBox",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#datesheet",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#datesheetInput",{
            display:'flex',
            duration:0.5,
        })
        // Save sub-panel state
        localStorage.setItem('headActiveSubPanel', 'datesheet');
    })
    var ep2=document.querySelector("#ep2");
    ep2.addEventListener("click",function(){
        gsap.to("#examPanel h2",{
            color:"#4E3629",
            duration:0.5,
        })
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
        gsap.to("#viewMarks",{
            display:'flex',
            duration:0.5,
        })
        // Save sub-panel state
        localStorage.setItem('headActiveSubPanel', 'marks');
    })
}
examPanel()
function admin(){
    var ap1= document.querySelector("#ap1");
    ap1.addEventListener("click",function(){
        gsap.to(".admin",{
            display:"none",
        })
        gsap.to("#subject",{
            display:"flex",
        })
        // Save sub-panel state
        localStorage.setItem('headActiveSubPanel', 'subject');
    }) 
    var ap2= document.querySelector("#ap2");
    ap2.addEventListener("click",function(){
        gsap.to(".admin",{
            display:"none",
        })
        gsap.to("#class",{
            display:"flex",
        })
        // Save sub-panel state
        localStorage.setItem('headActiveSubPanel', 'class');
    }) 
    var ap3= document.querySelector("#ap3");
    ap3.addEventListener("click",function(){
        gsap.to(".admin",{
            display:"none",
        })
        gsap.to("#addSubjectClass",{
            display:"flex",
        })
        // Save sub-panel state
        localStorage.setItem('headActiveSubPanel', 'addSubjectClass');
    })
    var ap4= document.querySelector("#ap4");
    ap4.addEventListener("click",function(){
        gsap.to(".admin",{
            display:"none",
        })
        gsap.to("#assignTeacher",{
            display:"flex",
        })
        // Save sub-panel state
        localStorage.setItem('headActiveSubPanel', 'assignTeacher');
    })
    var ap5= document.querySelector("#ap5");
    ap5.addEventListener("click",function(){
        gsap.to(".admin",{
            display:"none",
        })
        gsap.to("#promoteClass",{
            display:"flex",
        })
        // Save sub-panel state
        localStorage.setItem('headActiveSubPanel', 'promoteClass');
    })
}
admin()
function marksViewPanel(){
    var vp1=document.querySelector("#vp1");
    vp1.addEventListener("click",function(){
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
        // Save sub-panel state
        localStorage.setItem('headActiveSubPanel', 'classReport');
    })
    var vp2=document.querySelector("#vp2");
    vp2.addEventListener("click",function(){
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
        // Save sub-panel state
        localStorage.setItem('headActiveSubPanel', 'studentReport');
    })
}
marksViewPanel();
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

// State restoration function
function restoreHeadState() {
    // Restore main panel state
    var activePanel = localStorage.getItem('headActivePanel');
    var activeButton = localStorage.getItem('headActiveButton');
    
    if (activePanel && activeButton) {
        // Hide all parts first
        gsap.set(".part", { display: 'none' });
        gsap.set(".panel_elem a", { color: "#4E3629" });
        
        // Show the active panel
        gsap.set(`#${activePanel}`, { display: 'flex' });
        gsap.set(`#${activeButton} a`, { color: "white" });
    }
    
    // Restore sub-panel state
    var activeSubPanel = localStorage.getItem('headActiveSubPanel');
    if (activeSubPanel) {
        // Hide all sub-panels first
        gsap.set(".teacherInfo", { display: 'none' });
        gsap.set(".exams", { display: 'none' });
        gsap.set(".admin", { display: 'none' });
        gsap.set(".report", { display: 'none' });
        gsap.set("#examBox", { display: 'none' });
        gsap.set("#viewMarksBox", { display: 'none' });
        
        // Show the active sub-panel
        gsap.set(`#${activeSubPanel}`, { display: 'flex' });
        
        // Special handling for exam panels
        if (activeSubPanel === 'datesheet') {
            gsap.set("#examBox", { display: 'flex' });
            gsap.set("#datesheetInput", { display: 'flex' });
        }
        
        // Special handling for marks panels
        if (activeSubPanel === 'marks') {
            gsap.set("#examBox", { display: 'flex' });
            gsap.set("#viewMarks", { display: 'flex' });
        }
        
        // Special handling for marks view panels
        if (activeSubPanel === 'classReport' || activeSubPanel === 'studentReport') {
            gsap.set("#viewMarksBox", { display: 'flex' });
        }
    }
}

// Restore state when page loads
document.addEventListener('DOMContentLoaded', function() {
    restoreHeadState();
});

