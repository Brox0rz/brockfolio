/*
============================================
; Title:  containers.js
; Author: Brock Hemsouvanh
; Date:   26 Nov 2023
; Description: contains header and footer for entire site
;===========================================
*/

function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>© ${new Date().getFullYear()} Brock Hemsouvanh. All rights reserved.</p>
        <nav aria-label="Footer quick links">
            <ul>
                <li><a href="https://github.com/Brox0rz">GitHub</a></li>
            </ul>
        </nav>
    `;
    return footer;
}

function loadContainer() {
    const footer = createFooter();
    document.body.appendChild(footer);
}

// Call this function when the document is fully loaded
document.addEventListener('DOMContentLoaded', loadContainer);
