function initAppThemeController() {
    // Theme Elements
    const themeButton = document.getElementById("themeToggler");
    const modeIcon = document.getElementById("modeIcon");
    const modeText = document.getElementById("modeText");

    // Resume Modal Elements (New)
    const resumeTrigger = document.getElementById("resumeTrigger");

    // Theme Toggle Logic
    themeButton.addEventListener("click", () => {
        const currentMode = document.documentElement.getAttribute("data-viewmode");
        
        if (currentMode === "dark") {
            document.documentElement.removeAttribute("data-viewmode");
            modeIcon.textContent = "🌙";
            modeText.textContent = "Dark Mode";
        } else {
            document.documentElement.setAttribute("data-viewmode", "dark");
            modeIcon.textContent = "☀️";
            modeText.textContent = "Light Mode";
        }
    });

    // Resume Button Click (Add your custom action here, e.g., open a link)
    resumeTrigger.addEventListener("click", () => {
        // Replace 'your-resume.pdf' with your actual file path
        window.open('your-resume.pdf', '_blank'); 
    });
}

document.addEventListener("DOMContentLoaded", initAppThemeController);