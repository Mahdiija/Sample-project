const sidebarItems = document.querySelectorAll(".sidebar li");
const contentSections = document.querySelectorAll(".content");
const themeSwitcher = document.getElementById("theme-switcher");
const themeIcon = document.getElementById("theme-icon"); // Select the image element for the icon
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
    { name: "1", file: "Thumb.png", link:"http://127.0.0.1:5500/index.html ",description: `it is a beauty website that i am working on it and it is nearly done. 
        <br>it is called ZibatoShop <br>`},
    { name: "2", file: "Wsa.png", link:"https://wsamasters.acetech.ir/",description: `It is a Site for Mini football Events and it is called Wsa Masters <br><br> !Click on it to go to the website!` },
    { name: "3", file: "austria.png", link:"https://austriatour.acetech.ir/",description: `It is a Site for Mini football Events and it is called Austria Tour <br><br> !Click on it to go to the website!` },
    { name: "4", file: "socca.png", link:"https://soccaaustria.com/en",description: `We developed leauges in this site and Make overlays for streams of the matches Have panels for Players, referee and teams! <br><br> !Click on it to go to the website!` },
    { name: "5", file: "setare1.png", link:"https://setareyek.ir/",description: `I was a small part of this Pwa app and done some of the car service part of this App <br><br> !Click on it to go to the website to download the App!` },

];
const iconContainer = document.querySelector(".icon-container");
const ProjectsContainer = document.querySelector(".project-container");

// Function to create and add icons dynamically
function displayIcons() {
  icons.forEach((icon) => {
    const img = document.createElement("img");
    img.src = `icons/${icon.file}`; // Set the SVG icon source
    img.alt = `${icon.name} icon`; // Add alt text
    img.width = 60; // Set the icon size (you can customize this)
    img.height = 60; // Set the icon size (you can customize this)
    img.classList.add("icon"); // Add class for styling (optional)

    // Append the icon to the container
    iconContainer.appendChild(img);
  });
}

// Call the function to display the icons when the page loads
document.addEventListener("DOMContentLoaded", displayIcons);


function displayProject() {
    Projects.forEach((icon) => {


       const anchor = document.createElement('a');
    anchor.href = icon.link; // Set the href to the external URL
    anchor.target = '_blank'; 
    anchor.className = 'icon-link';

    const img = document.createElement("img");
    img.src = `images/${icon.file}`; // Set the SVG icon source
    img.alt = `${icon.name} icon`; // Add alt text
    img.width = 370; // Set the icon size (you can customize this)
    img.height = 302; // Set the icon size (you can customize this)
    img.classList.add("project"); // Add class for styling (optional)
    const description = document.createElement('span');
    description.className = 'description';
    description.innerHTML = icon.description;
    // Append the icon to the container
    anchor.appendChild(img);
    anchor.appendChild(description);
    // Append the anchor (with the icon inside) to the container
    ProjectsContainer.appendChild(anchor);
  });
}

// Call the function to display the icons when the page loads
document.addEventListener("DOMContentLoaded", displayProject);

// Function to activate a specific page
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
  // Update the body class to switch languages (EN/FA)
  document.body.classList.remove("en", "fa");
  document.body.classList.add(lang);

  // Save the selected language in localStorage
  localStorage.setItem("language", lang);

  // Update the language switcher button text
  languageSwitcher.textContent = lang === "fa" ? "FA" : "EN ";
}
document.addEventListener("DOMContentLoaded", () => {
  // Get saved language from localStorage, default to English (en)
  const savedLanguage = localStorage.getItem("language") || "en";
  switchLanguage(savedLanguage);

  // Check for the theme (dark or light) from localStorage and apply
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.src = "icons/moon-icon.svg"; // Change to moon icon
  }
});

// Add click event listener to the language switcher button
languageSwitcher.addEventListener("click", () => {
  const currentLang = document.body.classList.contains("fa") ? "fa" : "en";
  const newLang = currentLang === "en" ? "fa" : "en";
  switchLanguage(newLang);
});

// On page load, check localStorage for the active page and theme
document.addEventListener("DOMContentLoaded", () => {
  const savedPage = localStorage.getItem("activePage") || "home";
  const savedTheme = localStorage.getItem("theme") || "light";

  // Set theme on load
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.src = "icons/moon-icon.svg"; // Switch to moon icon
  }

  activatePage(savedPage);
});

// Add click event listener to each sidebar item
sidebarItems.forEach((item) => {
  item.addEventListener("click", () => {
    const pageId = item.getAttribute("data-page");
    localStorage.setItem("activePage", pageId);
    activatePage(pageId);
  });
});

// Theme toggle functionality
themeSwitcher.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");

  // Update the icon based on the theme
  if (isDarkMode) {
    themeIcon.src = "icons/moon-icon.svg";
  } else {
    themeIcon.src = "icons/sun-icon.svg";
  }

  // Save the theme in localStorage
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});



function toggleCard(card) {
  // Toggle the 'expanded' class on the card
  card.classList.toggle("expanded");
}
function toggleCard1(card1) {
  // Toggle the 'expanded' class on the card
  card1.classList.toggle("expanded1");
}
function toggleCard2(card2) {

  card2.classList.toggle("expanded2");
}