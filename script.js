const sidebarButtons = document.querySelectorAll(".sidebar button");
sidebarButtons.forEach(button => button.addEventListener("click", (e) => {
    while (document.querySelector(".sidebar .selected")) {
        document.querySelector(".sidebar .selected").classList.remove("selected");
    }
    console.log(button.parentNode);
    button.classList.add("selected");
    }
    )
)

const tabButtons = document.querySelectorAll(".tabs > button");
console.log(tabButtons);
tabButtons.forEach(button => button.addEventListener('click', openTab));
function openTab(e) {
    const tabs = document.querySelectorAll('.tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    while (document.querySelector(".tabs .selected")) {
        document.querySelector(".tabs .selected").classList.remove("selected");
    }
    if (e.target.innerHTML === "Announcements") {
        document.querySelector(".announcements.tab").style.display = "block";
        e.target.classList.add("selected");
    }
    else if (e.target.innerHTML === "Trending") {
        document.querySelector(".trending.tab").style.display = "block";
        e.target.classList.add("selected");
    }
}
