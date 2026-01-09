function buildMenu() {
  const links = [
    ["Om oss", "aboutus.html"],
    ["Kontakt", "contactus.html"],
    ["Nyheter", "news.html"],
    ["Referensprojekt", "projects.html"],
    ["Tjänster", "services.html"]
  ];

  const menu = document.getElementById("menu");

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
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}



window.onload = function() {
  buildMenu();
};

