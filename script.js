
//project js start
document.addEventListener('DOMContentLoaded', function () {
  const loadMoreBtn = document.getElementById('load-more-btn');
  let clickCount = 0; // Tracks the number of clicks on the button

  // Container to append new elements
  const proabContainer = document.querySelector('.proab');

  // Sample new content for loaded containers
  const newContent = [
    [
      {
        title: 'Laser  Part Pro',
        date: '05 / 08 / 2023',
        description: 'LaserPartPro delivers precision laser cutting for custom parts with unmatched quality.',
        techlist: ['React', 'Express', 'Node', 'MongoDB'],
        imgSrc: './img/resume 6.PNG',
      },
      {
        title: 'Green Sphere',
        date: '12 / 09 / 2023',
        description: 'Creating a sustainable future by promoting eco-friendly practices and a greener planet..',
        techlist: ['React', 'Express', 'Node', 'MongoDB'],
        imgSrc: './img/resume 8.webp',
      },
    ],
    [
      {
        title: 'Visionary Builds',
        date: '05 / 08 / 2023',
        description: 'Building strong foundations for a better future with precision and expertise in every project.',
        techlist: ['React', 'Redux', 'Node', 'MongoDB'],
        imgSrc: './img/resume 9.webp',
      },
      {
        title: 'Wheels On Demand',
        date: '12 / 09 / 2023',
        description: 'Rent a car effortlessly with us for a convenient, affordable, and seamless travel experience.',
        techlist: ['PHP', 'MySql', 'Talwind', 'React'],
        imgSrc: './img/resume 10.webp',
      },
    ],
  ];

  // Store references to dynamically added containers
  let dynamicContainers = [];

  // Handle button click
  loadMoreBtn.addEventListener('click', function () {
    clickCount++;

    if (clickCount <= newContent.length) {
      // Load the next section
      const contentSection = newContent[clickCount - 1];

      const addedContainers = []; // Temporary storage for this click

      contentSection.forEach((content) => {
        const newContainer = document.createElement('div');
        newContainer.classList.add('pro');

        newContainer.innerHTML = `
          <div class="image-container">
            <img src="${content.imgSrc}" alt="${content.title}">
            <div class="overlay"> <svg xmlns="http://www.w3.org/2000/svg" style="margin-top: 10%;" width="46" height="46" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                                </svg></div>
          </div>
          <div class="dat d-flex gap-4">
            <p class="p text-danger">mern-stack</p>
            <p>${content.date}</p>
          </div>
          <h3 class="h3" style="color: rgb(104, 104, 186);">${content.title}</h3>
          <div class="des d-flex gap-5">
            <p>${content.description}</p>
            <ul class="techlist">
              ${content.techlist.map((tech) => `<li>${tech}</li>`).join('')}
            </ul>
          </div>
          <br>
          <button class="bary">Check out <svg xmlns="http://www.w3.org/2000/svg"
                                     width="16" height="16" fill="currentColor"
                                    class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                    <path fill-rule="evenodd"
                                        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                                </svg></button>
          <hr>
        `;

        proabContainer.appendChild(newContainer);
        addedContainers.push(newContainer); // Add to the list of dynamically added containers
      });

      dynamicContainers.push(...addedContainers); // Add this batch to the global list

      if (clickCount === newContent.length) {
        loadMoreBtn.textContent = 'Show Less';
      }
    } else {
      // Remove only dynamically added containers
      dynamicContainers.forEach((container) => container.remove());
      dynamicContainers = []; // Clear the list

      loadMoreBtn.textContent = 'Load More';
      clickCount = 0; // Reset click count
    }
  });
});









const loadMoreButton = document.getElementById("load-more-content");
const additionalContent = document.getElementById("additional-content");
let isContentVisible = false;

loadMoreButton.addEventListener("click", function () {
  isContentVisible = !isContentVisible;

  if (isContentVisible) {
    additionalContent.style.display = "block";
    loadMoreButton.textContent = "Load Less";
  } else {
    additionalContent.style.display = "none";
    loadMoreButton.textContent = "Load More";
  }
});









document.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll(".changing-text");
  let currentIndex = 0;

  const updateText = () => {
    // Remove 'active' class from current text
    texts[currentIndex].classList.remove("active");

    // Update index for next text
    currentIndex = (currentIndex + 1) % texts.length;

    // Add 'active' class to the next text
    texts[currentIndex].classList.add("active");
  };

  // Change text every 3 seconds
  setInterval(updateText, 3000);
});





document.addEventListener("scroll", function () {
  const followMeSection = document.querySelector(".follow-me");

  // Check if the page is scrolled down
  if (window.scrollY > window.innerHeight) {
    followMeSection.classList.add("hidden"); // Hide the section
  } else {
    followMeSection.classList.remove("hidden"); // Show the section
  }
});









function toggleContent(button) {
  // Select the container of the button
  const container = button.closest('.service-box');
  // Select the additional content div
  const moreContent = container.querySelector('.more-content');
  // Toggle the display of the additional content
  if (moreContent.style.display === 'none' || moreContent.style.display === '') {
    moreContent.style.display = 'block'; // Show the content
    container.style.height = 'auto'; // Adjust container height
    button.textContent = 'SEE LESS'; // Change button text
  } else {
    moreContent.style.display = 'none'; // Hide the content
    container.style.height = ''; // Reset container height
    button.textContent = 'SEE MORE'; // Change button text
  }
}














//skill js start

document.addEventListener("DOMContentLoaded", function () {
  const karryContainer = document.getElementById("karry-container");
  const loadButton = document.getElementById("dash-button");

  // Define new content to be loaded
  const additionalContent = [
    `<div style="margin-top: 15px;" class="karry d-flex gap-2">
        <div class="dal d-flex">
          <img src="./img/java-removebg-preview.png" alt="">
          <h4>Java</h4>
        </div>
        <div class="dal d-flex gap-2" style="margin-left: 10px;">
          <img src="./img/csharp-removebg-preview.png" alt="">
          <h4>C#</h4>
        </div>
      </div>`,
    `<div style="margin-top: 15px;" class="karry d-flex gap-2">
        <div class="dal d-flex">
          <img src="./img/html-removebg-preview.png" alt="">
          <h4>HTML</h4>
        </div>
        <div class="dal d-flex gap-2" style="margin-left: 10px;">
          <img src="./img/css-removebg-preview.png" alt="">
          <h4>CSS</h4>
        </div>
      </div>`,
    `<div style="margin-top: 15px;" class="karry d-flex gap-2">
        <div class="dal d-flex">
          <img src="./img/download tp.jfif" alt="">
          <h4>TypeScript</h4>
        </div>
        <div class="dal d-flex gap-2" style="margin-left: 10px;">
          <img src="./img/mysql-removebg-preview.png" alt="">
          <h4>MySQL</h4>
        </div>
      </div>`
  ];

  let clickCount = 0; // Track button clicks

  // Add scroll animation to new content
  function scrollIntoView(container) {
    container.lastElementChild.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }

  // Button click handler
  loadButton.addEventListener("click", function () {
    if (clickCount < additionalContent.length) {
      // Add new content
      const content = document.createElement("div");
      content.innerHTML = additionalContent[clickCount];
      karryContainer.appendChild(content);
      scrollIntoView(karryContainer); // Scroll to the newly added content
      clickCount++;

      // Change button to "Load Less" after all content is loaded
      if (clickCount === additionalContent.length) {
        loadButton.innerText = "Load Less";
      }
    } else {
      // Reset the container and button
      karryContainer.innerHTML = `
        <div class="karry d-flex gap-2">
            <div class="dal d-flex">
                <img class="figma" src="./img/react.png" alt="">
                <h4 style="margin-right: 40px;">React</h4>
            </div>
            <div class="dal d-flex gap-2" style="margin-left: 10px;">
                <img src="./img/nodepic-removebg-preview.png" alt="">
                <h4>Node</h4>
            </div>
        </div>
        <div style="margin-top: 15px;" class="karry d-flex gap-2">
            <div class="dal d-flex">
                <img src="./img/php-removebg-preview.png" alt="">
                <h4>Php</h4>
            </div>
            <div class="dal d-flex gap-2" style="margin-left: 10px;">
                <img src="./img/python-removebg-preview.png" alt="">
                <h4>Python</h4>
            </div>
        </div>`;
      clickCount = 0; // Reset click count
      loadButton.innerText = "Load more";
    }
  });
});












// Get references to the toggle menu and nav links
const offcanvasMenu = document.getElementById('offcanvasMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Function to hide the menu
function closeMenu() {
    offcanvasMenu.style.display = 'none'; // Hides the toggle menu
}

// Add event listeners to each link
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target ID
        const targetElement = document.getElementById(targetId); // Find the target section
        
        // Scroll to the section
        targetElement.scrollIntoView({ behavior: 'smooth' });
        
        // Close the menu
        closeMenu();
    });
});









// Get all nav links

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav-link');

  // Get all container sections
  const containerSections = document.querySelectorAll('.container-section');

  // Add click event listener to each navigation link
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior

      // Remove 'active' class and reset styles for all links
      navLinks.forEach(nav => {
        nav.classList.remove('active');
        nav.style.backgroundColor = 'transparent'; // Default background color
        nav.style.color = 'rgb(114, 112, 112)'; // Default text color
      });

      // Add 'active' class and styles to the clicked link
      this.classList.add('active');
      this.style.backgroundColor = 'transparent'; // Active background color
      this.style.color = 'rgb(249 115 22)'; // Active text color

      // Get the target container from data-target attribute
      const target = this.getAttribute('data-target');

      // Show the corresponding container and hide others
      containerSections.forEach(section => {
        if (section.id === target) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });
});









document.addEventListener("DOMContentLoaded", function () {
  // Select all footer links
  const footerLinks = document.querySelectorAll('.yrtfg a');

  // Add click event to each link
  footerLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior

      // Get the target section ID from the link's href
      const targetId = this.getAttribute('href').substring(1); // Remove the '#' from the href
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Scroll to the target section smoothly
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});









function submitForm() {
  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate inputs
  if (!name) {
      alert('Please enter your name.');
      return;
  }
  if (!email || !validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
  }
  if (!message) {
      alert('Please enter a message.');
      return;
  }

  // Simulate sending the message
  alert(`Thank you, ${name}! Your message has been sent successfully.`);
  
  // Clear the form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}












// Select the scroll icon by its ID
document.addEventListener('DOMContentLoaded', () => {
  const scrollIcon = document.getElementById('scrolfvl-icon');

  scrollIcon.addEventListener('click', () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});











document.addEventListener("DOMContentLoaded", function () {
  const downloadCVButton = document.getElementById("downloadCV");

  downloadCVButton.addEventListener("click", function () {
    // The URL of your CV file (change this to the actual path of your CV)
    const cvFileUrl = './img/Modern-Grace.docx';  // Update this with your CV file path

    // Create an anchor element to initiate the download
    const link = document.createElement('a');
    link.href = cvFileUrl;
    link.download = 'Your_CV_Name.pdf';  // Optional: set the name of the downloaded file
    link.click();  // Trigger the download

    // Optionally, you can clean up the link afterwards
    link.remove();
  });
});







// Function to toggle the menu visibility
// Function to toggle the menu visibility
function toggleMenu() {
  const offcanvasNavbar = document.getElementById('offcanvasNavbar');
  if (offcanvasNavbar.classList.contains('show')) {
    // Hide the menu if it's already open
    closeMenu();
  } else {
    // Show the menu
    offcanvasNavbar.classList.add('show');
    offcanvasNavbar.style.visibility = 'visible';
  }
}

// Function to close the menu
function closeMenu() {
  const offcanvasNavbar = document.getElementById('offcanvasNavbar');
  offcanvasNavbar.classList.remove('show');
  offcanvasNavbar.style.visibility = 'hidden';
}

// Add event listener to the close button
document.querySelector('.btn-close').addEventListener('click', closeMenu);







const seeMoreBtn = document.getElementById('see-more-btn');
const hiddenProjects = document.querySelectorAll('.hidden'); // Select by class

seeMoreBtn.addEventListener('click', () => {
  hiddenProjects.forEach(project => {
    project.style.display = 'block';
  });
  seeMoreBtn.style.display = 'none';
});







document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".Contact input, .Contact textarea");

  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      if (this.matches(":-webkit-autofill")) {
        // Reapply styles for autofilled input
        this.style.backgroundColor = "transparent";
        this.style.color = "aliceblue";
      }
    });
  });
});
