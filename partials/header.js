/*
============================================
; Title:  header.js
; Author: Brock Hemsouvanh
; Date:   08 Dec 2023
; Description: contains header for Brockfolio site
;===========================================
*/

// Call this function when the document is fully loaded
document.addEventListener('DOMContentLoaded', loadContainer);

function createHeader() {
  const header = document.createElement('header');
  header.innerHTML = `
      <nav aria-label="Main navigation">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="api.html">API</a></li>
            <li><a href="databases.html">Database Diagrams</a></li>
            <li><a href="resume.html">Resume</a></li>
            <li><a href="about.html">About</a></li>
          </ul>
      </nav>
  `;
  return header;
}

function loadContainer() {
  const header = createHeader();
  document.body.prepend(header);
}


function highlightCurrentPage() {
  const navLinks = document.querySelectorAll('nav a'); // Select all nav links
  const currentPage = window.location.pathname.split('/').pop(); // Get the file name of the current page

  navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.parentElement.style.backgroundColor = '#53435C';
          link.parentElement.style.color = '#fff';
      }
  });
}

