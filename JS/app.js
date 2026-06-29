let themeBtn = document.querySelector("#themeBtn");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}
/* why this condition? [localStorage.getItem("theme") === "dark"]
To check the previous state of the theme and if it was dark then we will add the dark class to body so that when user refreshes the page the theme remains same as before
*/

themeBtn.addEventListener("click" , function(){
    document.body.classList.toggle("dark");
    /*
    Why this condition? [document.body.classList.toggle("dark")]
    agar dark class hai body me to use hata dega aur agar nahi to use add kar dega
    */

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme" , "dark");
    }
    else{
        localStorage.setItem("theme" , "light");
    }
})


renderMembers();
renderProjects();

const contactForm = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const nameMsg = document.querySelector("#nameMsg");
const emailMsg = document.querySelector("#emailMsg");
const textareaMsg = document.querySelector("#textareaMsg");
const emailHelp = document.querySelector("#emailHelp");

const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click" , function(event){

    event.preventDefault();

    // Flag ---> check karne ke liye agar ek bhi invalid nikla to hum input field ka data erase nahi karenge
    let isValid = true;

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let message = messageInput.value.trim();

    // Reset old messages
    nameMsg.textContent = "";
    emailMsg.textContent = "";
    textareaMsg.textContent = "";

    // Name Validation
    if(name === ""){
        nameMsg.textContent = "Name is required";
        nameMsg.style.color = "red";
        isValid = false;
    }

    // Message Validation
    if(message === ""){
        textareaMsg.textContent = "Message is required";
        textareaMsg.style.color = "red";
        isValid = false;
    }

    // Email Validation
    if(email === ""){
        emailMsg.textContent = "Email is required";
        emailMsg.style.color = "red";
        emailHelp.style.display = "none";
        isValid = false;
    }
    else if(!email.includes("@") || !email.includes(".")){
        emailMsg.textContent = "Enter a valid email";
        emailMsg.style.color = "red";
        emailHelp.style.display = "none";
        isValid = false;
    }
    else{
        emailHelp.style.display = "none";
    }

    // Clear fields only if everything is valid
    if(isValid){
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";

        alert("Form Submitted Successfully");
    }

});
