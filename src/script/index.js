const mainsection = document.querySelector(".landingpage-main-section")

const divcontainer = document.createElement("div")
const buttondiv = document.createElement("div")
const edugate = document.createElement("h1")
const welcometext = document.createElement("p")
const signup = document.createElement("button")
const login = document.createElement("button")

edugate.textContent = "Edugate"
welcometext.textContent = "Welcome to Edugate, the platform that lets you access your exam results online."
signup.textContent = "Sign Up"
login.textContent = "Log In"

welcometext.classList.add("landingpage-paragraph-text")
divcontainer.classList.add("landingpage-div")
buttondiv.classList.add("landingpage-button-div")
edugate.classList.add("landingpage-h1")
signup.classList.add("landingpage-signup-btn")
login.classList.add("landingpage-login-btn")

divcontainer.appendChild(edugate)
divcontainer.appendChild(welcometext)
buttondiv.appendChild(signup)
buttondiv.appendChild(login)
mainsection.appendChild(buttondiv)
mainsection.appendChild(divcontainer)

signup.addEventListener("click", function() {
    window.location.href="../src/pages/sign-up.html"
})

login.addEventListener("click", function() {
    window.location.href="../src/pages/log-in.html"
})