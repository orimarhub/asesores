
const users = {
    "brian.g": "Telcel#2025Bg",
    "jaque.l": "Telcel#2025Jl",
    "magaly.g": "Telcel#2025Mg",
    "irving.d": "Telcel#2025Id",
    "martha.d": "Telcel#2025Md",
    "ares.r": "Telcel#2025Ar",
    "alfredo.g": "Telcel#2025Ag",
    "alexis.d": "Telcel#2025Ad",
    "juan.r": "Telcel#2025Jr",
    "aline.c": "Telcel#2025Ac",
    "carmen.f": "Telcel#2025Cf",
    "eduardo.e": "Telcel#2025Ee"
};

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            if (users[username] && users[username] === password) {
                localStorage.setItem("loggedUser", username);
                window.location.href = "dashboard.html";
            } else {
                document.getElementById("errorMsg").textContent = "Usuario o contraseña incorrectos";
            }
        });
    }

    if (window.location.pathname.includes("dashboard.html")) {
        const loggedUser = localStorage.getItem("loggedUser");
        if (!loggedUser) {
            window.location.href = "index.html";
        }
    }
});

function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "./dashboard.html";
}
