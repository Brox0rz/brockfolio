/*
============================================
; Title:  footer.js
; Author: Brock Hemsouvanh
; Date:   26 Nov 2023
; Description: contain footer for entire brockfolio site
;===========================================
*/

function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>© ${new Date().getFullYear()} Brock Hemsouvanh. <br> All rights reserved.</p>
        <nav aria-label="Footer quick links">
            <ul>
                <li><a href="https://github.com/Brox0rz" target="_blank">Brock's GitHub Repos</a></li>
                <li><a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="_blank">Bellevue University Web Dev Degree</a></li>
                <li><a href="https://www.youtube.com/@bellevueuniversity" target="_blank">Bellevue YouTube Channel</a></li>
                <li><a href="https://github.com/orgs/buwebdev/repositories" target="_blank">Course GitHub Repos</a></li>
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
