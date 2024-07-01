/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
//select each section
const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");
const section4 = document.querySelector("#section4");


//data structure to store sections
const sections = [section1, section2, section3, section4];


//select ul list
const ul = document.querySelector('ul');

//loop over data structure
for (let i = 0; i < sections.length; i++) {
    const section = sections[i];

  //create list element
  const li = document.createElement("li");

  //add  section text to each li element 
  li.textContent = "Section " + (i + 1); 

  // add the li element as the last child element of ul element
  ul.appendChild(li);
}

/**
 * End Global Variables
 *
 *
 *
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
