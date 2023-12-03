/*
============================================
; Title:  containers.js
; Author: Brock Hemsouvanh
; Date:   26 Nov 2023
; Description: contains header and footer reference for entire site
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
                <li><a href="resume.html">Resume</a></li>
                <li><a href="databases.html">Database Diagrams</a></li>
                <li><a href="api.html">API</a></li>
            </ul>
        </nav>
    `;
    return header;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>© ${new Date().getFullYear()} Brock Hemsouvanh. All rights reserved.</p>
        <nav aria-label="Footer quick links">
            <ul>
                <li><a href="github.com/Brox0rz">GitHub</a></li>
            </ul>
        </nav>
    `;
    return footer;
}

function loadContainer() {
    const header = createHeader();
    const footer = createFooter();
    document.body.prepend(header);
    document.body.appendChild(footer);
}

// Call this function when the document is fully loaded
document.addEventListener('DOMContentLoaded', loadContainer);
