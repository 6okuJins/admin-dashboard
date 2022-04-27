const sidebarButtons = document.querySelectorAll(".sidebar button");
sidebarButtons.forEach(button => button.addEventListener("click", (e) => {
    if (window.innerWidth > 414) {
        return
    }
    while (document.querySelector(".sidebar .selected")) {
        document.querySelector(".sidebar .selected").classList.remove("selected");
    }
    button.classList.add("selected");
    }
    )
)

const tabButtons = document.querySelectorAll(".tabs > button");
tabButtons.forEach(button => button.addEventListener('click', openTab));
function openTab(e) {
    if (window.innerWidth > 414) {
        return
    }
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

const projectCards = document.querySelectorAll(".project");
projectCards.forEach(card => addCardButtons(card));
function addCardButtons(card) {
    const buttonCluster = document.createElement("div");
    buttonCluster.classList.add("button-cluster");
    const favorite =  document.createElement("button");
    const watch = document.createElement("button");
    const share = document.createElement("button");
    
    favorite.innerHTML =  '<svg><path d="M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C17.3 12 16.6 12.1 15.9 12.4L18.1 10.5L13.7 10.1L12 6.1L10.3 10.1L5.9 10.5L9.2 13.4L8.2 17.7L12 15.4L12.5 15.7C12.3 16.2 12.1 16.8 12.1 17.3L5.8 21M17 14V17H14V19H17V22H19V19H22V17H19V14H17Z" /></svg>';
    watch.innerHTML = '<svg><path d="M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C12.36,19.5 12.72,19.5 13.08,19.45C13.03,19.13 13,18.82 13,18.5C13,17.94 13.08,17.38 13.24,16.84C12.83,16.94 12.42,17 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12C17,12.29 16.97,12.59 16.92,12.88C17.58,12.63 18.29,12.5 19,12.5C20.17,12.5 21.31,12.84 22.29,13.5C22.56,13 22.8,12.5 23,12C21.27,7.61 17,4.5 12,4.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,14.5V17.5H15V19.5H18V22.5H20V19.5H23V17.5H20V14.5H18Z" /></svg>';
    share.innerHTML = '<svg><path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08M18 4C18.55 4 19 4.45 19 5S18.55 6 18 6 17 5.55 17 5 17.45 4 18 4M6 13C5.45 13 5 12.55 5 12S5.45 11 6 11 7 11.45 7 12 6.55 13 6 13M18 20C17.45 20 17 19.55 17 19S17.45 18 18 18 19 18.45 19 19 18.55 20 18 20Z" /></svg>';

    buttonCluster.appendChild(favorite);
    buttonCluster.appendChild(watch);
    buttonCluster.appendChild(share);
    card.appendChild(buttonCluster);
}