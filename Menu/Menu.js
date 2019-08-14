let menuItems = [
    "Students",
    "Faculty",
    "What's New",
    "Tech Trends",
    "Music",
    "Log Out"
];

const newMenu = data => {
    const div = document.createElement("div");
    div.classList.add("menu");

    const ul = document.createElement("ul");
    div.appendChild(ul);

    const menuItems = data.map(item => {
        const listitem = document.createElement("li");
        listitem.textContent = item;
        return listitem;
    });

    for (let listItem of menuItems) {
        ul.appendChild(listItem);
    }

    document.querySelector(".menu-button").addEventListener("click", () => {
        div.classList.toggle("menu--open");
    });
    return div;
};

document.querySelector(".header").appendChild(newMenu(menuItems));