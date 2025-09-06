function studentPanel(){
    var details=document.querySelector("#details")
    details.addEventListener("click",function(){
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
        gsap.to("#details ",{
            color:"#111",
            duration:0.5
        })
        // Save state to localStorage
        localStorage.setItem('studentActivePanel', 'personalInformation');
        localStorage.setItem('studentActiveButton', 'details');
    })
    var attendance=document.querySelector("#datesheetPanel")
    attendance.addEventListener("click",function(){
        gsap.to(".part",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#panel h2",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#datesheetBox",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#datesheetPanel",{
            color:"#111",
            duration:0.5
        })
        // Save state to localStorage
        localStorage.setItem('studentActivePanel', 'datesheetBox');
        localStorage.setItem('studentActiveButton', 'datesheetPanel');
    })
    var leaveRequest=document.querySelector("#leaveRequest")
    leaveRequest.addEventListener("click",function(){
        gsap.to(".part",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#panel h2",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#leaveRequestBox",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#leaveRequest",{
            color:"#111",
            duration:0.5
        })
        // Save state to localStorage
        localStorage.setItem('studentActivePanel', 'leaveRequestBox');
        localStorage.setItem('studentActiveButton', 'leaveRequest');
    })
    var report=document.querySelector("#report")
    report.addEventListener("click",function(){
        gsap.to(".part",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#panel h2",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#marksBox",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#viewMarks",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#viewMarksPanel",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#report",{
            color:"#111",
            duration:0.5
        })
        // Save state to localStorage
        localStorage.setItem('studentActivePanel', 'marksBox');
        localStorage.setItem('studentActiveButton', 'report');
    })
    var editDetails=document.querySelector("#editDetails")
    editDetails.addEventListener("click",function(){
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
        gsap.to("#editDetails ",{
            color:"#111",
            duration:0.5
        })
        // Save state to localStorage
        localStorage.setItem('studentActivePanel', 'editDetails');
        localStorage.setItem('studentActiveButton', 'editDetails');
    })
    var changePassword=document.querySelector("#changePassword")
    changePassword.addEventListener("click",function(){
        gsap.to(".part",{
            display:'none',
            duration:0.5,
        })
        gsap.to("#panel h2",{
            color:"#4E3629",
            duration:0.5
        })
        gsap.to("#changePasswordBox",{
            display:'flex',
            duration:0.5,
        })
        gsap.to("#changePassword",{
            color:"#111",
            duration:0.5
        })
        // Save state to localStorage
        localStorage.setItem('studentActivePanel', 'changePasswordBox');
        localStorage.setItem('studentActiveButton', 'changePassword');
    })
}
studentPanel()
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
        // Save sub-panel state
        localStorage.setItem('studentActiveSubPanel', 'applyLeave');
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
        // Save sub-panel state
        localStorage.setItem('studentActiveSubPanel', 'viewLeave');
    })
}
leavePanel()
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
        gsap.to("#fullReport",{
            display:'flex',
            duration:0.5,
        })
        // Save sub-panel state
        localStorage.setItem('studentActiveSubPanel', 'fullReport');
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
        gsap.to("#particularReport",{
            display:'flex',
            duration:0.5,
        })
        // Save sub-panel state
        localStorage.setItem('studentActiveSubPanel', 'particularReport');
    })
}
marksViewPanel();

// State restoration function
function restoreStudentState() {
    // Restore main panel state
    var activePanel = localStorage.getItem('studentActivePanel');
    var activeButton = localStorage.getItem('studentActiveButton');
    
    if (activePanel && activeButton) {
        // Hide all parts first
        gsap.set(".part", { display: 'none' });
        gsap.set("#panel h2", { color: "#4E3629" });
        
        // Show the active panel
        gsap.set(`#${activePanel}`, { display: 'flex' });
        gsap.set(`#${activeButton}`, { color: "#111" });
        
        // Special handling for marks panel
        if (activePanel === 'marksBox') {
            gsap.set("#viewMarks", { display: 'flex' });
            gsap.set("#viewMarksPanel", { display: 'flex' });
        }
    }
    
    // Restore sub-panel state
    var activeSubPanel = localStorage.getItem('studentActiveSubPanel');
    if (activeSubPanel) {
        // Hide all sub-panels first
        gsap.set(".request", { display: 'none' });
        gsap.set(".report", { display: 'none' });
        gsap.set("#marksViewPanel", { display: 'none' });
        gsap.set("#viewMarksBox", { display: 'none' });
        
        // Show the active sub-panel
        gsap.set(`#${activeSubPanel}`, { display: 'flex' });
        
        // Special handling for marks view panels
        if (activeSubPanel === 'fullReport' || activeSubPanel === 'particularReport') {
            gsap.set("#viewMarksBox", { display: 'flex' });
        }
    }
}

// Restore state when page loads
document.addEventListener('DOMContentLoaded', function() {
    restoreStudentState();
});