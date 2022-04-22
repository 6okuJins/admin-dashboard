const sidebarButtons = document.querySelectorAll(".sidebar button");
sidebarButtons.forEach(button => button.addEventListener("click", (e) => {
    while (document.querySelector(".selected")) {
        document.querySelector(".selected").classList.remove("selected")
    }
    console.log(button.parentNode);
    button.classList.add("selected");
    button.parentNode.classList.add("selected");
    }
    )
)