/*
============================================
; Title:  containers.js
; Author: Brock Hemsouvanh
; Date:   26 Nov 2023
; Description: contains header and footer for entire site
;===========================================
*/

function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <nav aria-label="Main navigation">
            <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="api.html">API</a></li>
                <li><a href="databases.html">Database Diagrams</a></li>
                <li><a href="resume.html">Resume</a></li>
            </ul>
        </nav>
    `;
    return header;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>© ${new Date().getFullYear()} Brockfolio. All rights reserved.</p>
        <nav aria-label="Footer quick links">
            <ul>
                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                <li><a href="terms-of-service.html">Terms of Service</a></li>
            </ul>
        </nav>
    `;
    return footer;
}

function highlightCurrentPage() {
    const navLinks = document.querySelectorAll('nav a'); // Select all nav links
    const currentPage = window.location.pathname.split('/').pop(); // Get the file name of the current page

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.backgroundColor = // Apply contrasting color
            link.style.color = '#fff'; Change text color for better visibility
        }
    });
}

function loadContainer() {
    const header = createHeader();
    const footer = createFooter();
    document.body.prepend(header);
    document.body.appendChild(footer);
}

// Call this function when the document is fully loaded
document.addEventListener('DOMContentLoaded', loadContainer);
