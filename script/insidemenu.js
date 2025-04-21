function insideMenu() {
    const links = [
        ["Rör1", "projekt1"],
        ["Rör2", "projekt2"],
        ["Rör3", "projekt3"],
        ["Rör4", "projekt4"]
    ];
    const menu = document.getElementById("insidemenu");

    if (menu) {
        for (let i = 0; i < links.length; i++) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = links[i][1];
            a.textContent = links[i][0];
            li.appendChild(a);
            menu.appendChild(li);
        }
    } else {
        console.error("Menyn hittades inte.");
    }
}

const projects = [
    {
        title: "Scania Södertälje",
        description: "Nybyggnation batteriefabrik B228",
        image: "images/scania.batteri.ute.jpg",
        link: "projekt1.html"
    },
    {
        title: "Ragn-sell Bro",
        description: "Tillbyggnad samt ombyggnad av tankgård",
        image: "images/tankgard.webp",
        link: "projekt2.html"
    },
    {
        title: "Produktionsliner B228",
        description: " Batteriefabriken Scania Södertälje",
        image: "images/scania.batteri.inne.jpg",
        link: "projekt3.html"
    },
    {
        title: "Södertälje",
        description: "Installationer i Södertälje",
        image: "images/rör2.jpg",
        link: "projekt4.html"
    }
];

window.onload = function () {
    buildMenu();
    insideMenu();

    const container = document.getElementById("projects-container");
    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
        <a href="${project.link}">
          <img src="${project.image}" alt="${project.title}">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </a>
      `;

        container.appendChild(card);
    });
};