const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

function activateTab(name){

    tabs.forEach(tab => {

        tab.classList.toggle("active", tab.dataset.target === name);

    });

    contents.forEach(content => {

        content.classList.toggle("active", content.id === name);

    });

    localStorage.setItem("datesheetTab", name);

}

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        activateTab(tab.dataset.target);

    });

});

const savedTab = localStorage.getItem("datesheetTab") || "generate";

activateTab(savedTab);