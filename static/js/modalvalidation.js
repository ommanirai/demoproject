// script for modal and validation
const modal = document.getElementById("popupModal");
const btn = document.getElementById("enquireButton");
const closeBtn = document.querySelector(".close");

const orgCheckbox = document.getElementById("organization");
const individualCheckbox = document.getElementById("individual");
const firstNameFields = document.querySelectorAll(".conditionalField");
const companyNameField = document.getElementById("companyNameField");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const companyNameInput = document.getElementById("companyName");

function initializeForm() {
    individualCheckbox.checked = true;
    orgCheckbox.checked = false;
    firstNameFields.forEach(field => (field.style.display = "block"));
    firstNameInput.setAttribute("required", "required");
    lastNameInput.setAttribute("required", "required");
    companyNameField.style.display = "none";
    companyNameInput.removeAttribute("required");
}

btn.onclick = function (event) {
    event.preventDefault();
    modal.style.display = "block";
    document.body.classList.add("modal-open");
};

closeBtn.onclick = function () {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
};

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
};

orgCheckbox.addEventListener("change", function () {
    if (orgCheckbox.checked) {
        firstNameFields.forEach(field => (field.style.display = "none"));
        firstNameInput.removeAttribute("required");
        lastNameInput.removeAttribute("required");
        companyNameField.style.display = "block";
        companyNameInput.setAttribute("required", "required");
        individualCheckbox.checked = false;
    }
});

individualCheckbox.addEventListener("change", function () {
    if (individualCheckbox.checked) {
        firstNameFields.forEach(field => (field.style.display = "block"));
        firstNameInput.setAttribute("required", "required");
        lastNameInput.setAttribute("required", "required");
        companyNameField.style.display = "none";
        companyNameInput.removeAttribute("required");
        orgCheckbox.checked = false;
    }
});

document.querySelector("form").addEventListener("submit", function (event) {
    if (orgCheckbox.checked && !companyNameInput.value.trim()) {
        event.preventDefault();
        alert("Please fill out the required Company Name field.");
        return;
    }

    if (individualCheckbox.checked && (!firstNameInput.value.trim() || !lastNameInput.value.trim())) {
        event.preventDefault();
        alert("Please fill out the required First and Last Name fields.");
        return;
    }

    // event.preventDefault();
    // alert("Form submitted successfully!");

    modal.style.display = "none";
    document.body.classList.remove("modal-open");
});
// end of script for modal and validation