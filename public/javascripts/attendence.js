const boxes =
document.querySelectorAll(".attendance");

document
.getElementById("presentAll")
.onclick=()=>{

boxes.forEach(box=>{

box.checked=true;

});

};

document
.getElementById("absentAll")
.onclick=()=>{

boxes.forEach(box=>{

box.checked=false;

});

};