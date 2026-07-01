const tabs = document.querySelectorAll(".tab-btn");

const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab=>{

    tab.onclick=()=>{

        tabs.forEach(t=>t.classList.remove("active"));

        contents.forEach(c=>c.classList.remove("active"));

        tab.classList.add("active");

        document
        .getElementById(tab.dataset.target)
        .classList.add("active");

    }

});