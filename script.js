let frontendBtn = document.querySelector(".frontend");
let backendBtn = document.querySelector(".backend");
let dsaBtn = document.querySelector(".dsa");

let frontendSection = document.querySelector(".frontend-section");
let backendSection = document.querySelector(".backend-section");
let dsaSection = document.querySelector(".dsa-section");

frontendBtn.addEventListener("click", () => {
    frontendBtn.classList.add("active");
    frontendBtn.classList.remove("inactive");
    backendBtn.classList.remove("active");
    backendBtn.classList.add("inactive");
    dsaBtn.classList.remove("active");
    dsaBtn.classList.add("inactive");
    
    frontendSection.style.display = "flex";
    backendSection.style.display = "none";
    dsaSection.style.display = "none";
});

backendBtn.addEventListener("click", () => {
    backendBtn.classList.add("active");
    backendBtn.classList.remove("inactive");
    frontendBtn.classList.remove("active");
    frontendBtn.classList.add("inactive");
    dsaBtn.classList.remove("active");
    dsaBtn.classList.add("inactive");
    
    backendSection.style.display = "flex";
    frontendSection.style.display = "none";
    dsaSection.style.display = "none";
});

dsaBtn.addEventListener("click", () => {
    dsaBtn.classList.add("active");
    dsaBtn.classList.remove("inactive");
    frontendBtn.classList.remove("active");
    frontendBtn.classList.add("inactive");
    backendBtn.classList.remove("active");
    backendBtn.classList.add("inactive");
    
    dsaSection.style.display = "flex";
    frontendSection.style.display = "none";
    backendSection.style.display = "none";
});
