const sidebarItems = document.querySelectorAll(".sidebar li");
const contentSections = document.querySelectorAll(".content");
const themeSwitcher = document.getElementById("theme-switcher");
const themeIcon = document.getElementById("theme-icon");
const languageSwitcher = document.getElementById("language-switcher");

const icons = [
  { name: "Html", file: "frame.svg" },
  { name: "Css", file: "frame1.svg" },
  { name: "Js", file: "frame2.svg" },
  { name: "Tailwind", file: "frame3.svg" },
  { name: "Vue", file: "frame4.svg" },
  { name: "Redux", file: "frame5.svg" },
  { name: "GitHub", file: "frame6.svg" },
  { name: "React", file: "frame7.svg" },
  { name: "Next", file: "frame8.svg" },
  { name: "Ts", file: "frame9.svg" },
];
const Projects = [
  {
    name: "1",
    file: "Thumb.png",
    link: "http://127.0.0.1:5500/index.html ",
    description: `it is a beauty website that i am working on it and it is nearly done. 
        <br>it is called ZibatoShop <br>`,
  },
  {
    name: "2",
    file: "Wsa.png",
    link: "https://wsamasters.acetech.ir/",
    description: `It is a Site for Mini football Events and it is called Wsa Masters <br><br> !Click on it to go to the website!`,
  },
  {
    name: "3",
    file: "austria.png",
    link: "https://austriatour.acetech.ir/",
    description: `It is a Site for Mini football Events and it is called Austria Tour <br><br> !Click on it to go to the website!`,
  },
  {
    name: "4",
    file: "socca.png",
    link: "https://soccaaustria.com/en",
    description: `We developed leauges in this site and Make overlays for streams of the matches Have panels for Players, referee and teams! <br><br> !Click on it to go to the website!`,
  },
  {
    name: "5",
    file: "setare1.png",
    link: "https://setareyek.ir/",
    description: `I was a small part of this Pwa app and done some of the car service part of this App <br><br> !Click on it to go to the website to download the App!`,
  },
];
const iconContainer = document.querySelector(".icon-container");
const ProjectsContainer = document.querySelector(".project-container");

function displayIcons() {
  icons.forEach((icon) => {
    const img = document.createElement("img");
    img.src = `icons/${icon.file}`;
    img.alt = `${icon.name} icon`;
    img.width = 60;
    img.height = 60;
    img.classList.add("icon");

    iconContainer.appendChild(img);
  });
}

document.addEventListener("DOMContentLoaded", displayIcons);

function displayProject() {
  Projects.forEach((icon) => {
    const anchor = document.createElement("a");
    anchor.href = icon.link;
    anchor.target = "_blank";
    anchor.className = "icon-link";

    const img = document.createElement("img");
    img.src = `images/${icon.file}`;
    img.alt = `${icon.name} icon`;
    img.width = 370;
    img.height = 302;
    img.classList.add("project");
    const description = document.createElement("span");
    description.className = "description";
    description.innerHTML = icon.description;

    anchor.appendChild(img);
    anchor.appendChild(description);

    ProjectsContainer.appendChild(anchor);
  });
}

document.addEventListener("DOMContentLoaded", displayProject);
const menuToggle = document.getElementById("menu-toggle");
const closeSidebarButton = document.getElementById("close-sidebar");
const sidebar = document.querySelector(".sidebar");
const navItems = document.querySelectorAll(".sidebar ul li");

const isMobile = () => window.innerWidth <= 768;

menuToggle.addEventListener("click", () => {
  if (isMobile()) {
    sidebar.classList.add("visible");
    sidebar.classList.remove("hidden");
  }
});

closeSidebarButton.addEventListener("click", () => {
  if (isMobile()) {
    sidebar.classList.remove("visible");
    sidebar.classList.add("hidden");
  }
});

document.addEventListener("click", (event) => {
  if (
    isMobile() &&
    !sidebar.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    sidebar.classList.remove("visible");
    sidebar.classList.add("hidden");
  }
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (isMobile()) {
      sidebar.classList.remove("visible");
      sidebar.classList.add("hidden");
    }
  });
});

window.addEventListener("resize", () => {
  if (!isMobile()) {
    sidebar.classList.remove("hidden");
    sidebar.classList.add("visible");
  } else {
    sidebar.classList.remove("visible");
    sidebar.classList.add("hidden");
  }
});

function activatePage(pageId) {
  sidebarItems.forEach((i) => i.classList.remove("active"));
  contentSections.forEach((section) => section.classList.remove("active"));

  const activeItem = [...sidebarItems].find(
    (item) => item.getAttribute("data-page") === pageId
  );
  const activeSection = document.getElementById(pageId);

  if (activeItem && activeSection) {
    activeItem.classList.add("active");
    activeSection.classList.add("active");
  }
}
function switchLanguage(lang) {
  document.body.classList.remove("en", "fa");
  document.body.classList.add(lang);

  localStorage.setItem("language", lang);

  languageSwitcher.textContent = lang === "fa" ? "FA" : "EN ";
}
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "en";
  switchLanguage(savedLanguage);

  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.src = "icons/moon-icon.svg";
  }
});

languageSwitcher.addEventListener("click", () => {
  const currentLang = document.body.classList.contains("fa") ? "fa" : "en";
  const newLang = currentLang === "en" ? "fa" : "en";
  switchLanguage(newLang);
});

document.addEventListener("DOMContentLoaded", () => {
  const savedPage = localStorage.getItem("activePage") || "home";
  const savedTheme = localStorage.getItem("theme") || "light";

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.src = "icons/moon-icon.svg";
  }

  activatePage(savedPage);
});

sidebarItems.forEach((item) => {
  item.addEventListener("click", () => {
    const pageId = item.getAttribute("data-page");
    localStorage.setItem("activePage", pageId);
    activatePage(pageId);
  });
});

themeSwitcher.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");

  if (isDarkMode) {
    themeIcon.src = "icons/moon-icon.svg";
  } else {
    themeIcon.src = "icons/sun-icon.svg";
  }

  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

function toggleCard(card) {
  card.classList.toggle("expanded");
}
function toggleCard1(card1) {
  card1.classList.toggle("expanded1");
}
function toggleCard2(card2) {
  card2.classList.toggle("expanded2");
}
