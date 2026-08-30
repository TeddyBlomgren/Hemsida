const projects = [
  {
    title: "Scania Södertälje",
    description: "Nybyggnation batteriefabrik B228",
    image: "images/scania.batteri.ute.jpg",
    link: "projekt1.html",
  },
  {
    title: "Ragn-Sells Bro",
    description: "Tillbyggnad samt ombyggnad av tankgård",
    image: "images/tankgard.webp",
    link: "projekt2.html",
  },
  {
    title: "Produktionsliner B228",
    description: " Batteriefabriken Scania Södertälje",
    image: "images/scania.batteri.inne.jpg",
    link: "projekt3.html",
  },
  {
    title: "Övriga installationer",
    description: "",
    image: "images/icon/black_logo_transparent_background.png",
    link: "projekt4.html",
  },
  {
    title: "AstraZeneca",
    description: "Rörinstallation av värmeåtervinning ",
    image: "images/Astra.jpg",
    link: "projekt5.html",
  },
  {
    title: "AstraZeneca",
    description: "Rörinstallationer för nya kylmaskiner",
    image: "images/Astra.jpg",
    link: "projekt6.html",
  },
];

window.onload = function () {
  buildMenu();

  const container = document.getElementById("projects-container");
  projects.forEach((project) => {
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
