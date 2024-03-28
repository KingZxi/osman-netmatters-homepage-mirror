document
  .querySelector(".contact__form form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(event.target);

    fetch("php/contact-submission.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        handleFormData(data);
      })
      .catch((error) => {
        handleFormData(error);
      });
  });
function handleFormData(data) {
  let error = document.querySelector(".contact__error");

  if (data.success) {
    error.innerHTML = "";
    //Handle the success message here

    let successMessageElement = document.createElement("div");
    successMessageElement.className = "contact__success__msg";
    successMessageElement.innerHTML = `<p>${data.success}</p><button type="button" class="contact__success__close">×</button>`;

    //Add an event listener to the close button
    successMessageElement
      .querySelector(".contact__success__close")
      .addEventListener("click", function () {
        //Remove the error message element when the close button is clicked
        successMessageElement.remove();
      });

    error.appendChild(successMessageElement);
  } else if (data.errors) {
    //Clear the error container
    error.innerHTML = "";

    //Validation errors handled:
    data.errors.forEach((errorMessage) => {
      let errorMessageElement = document.createElement("div");
      errorMessageElement.className = "contact__error__msg";
      errorMessageElement.innerHTML = `<p>${errorMessage}</p><button type="button" class="contact__error__close">×</button>`;

      //Add an event listener to the close button
      errorMessageElement
        .querySelector(".contact__error__close")
        .addEventListener("click", function () {
          //Remove the error message element when the close button is clicked
          errorMessageElement.remove();
        });

      error.appendChild(errorMessageElement);
    });
  }
}

document
  .querySelector(".contact__form form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);

    //Clear any previous error
    let inputFields = form.querySelectorAll("input, textarea");
    inputFields.forEach((inputField) => {
      inputField.classList.remove("input-error");
    });

    //Validation
    let errors = [];
    let name = formData.get("name");
    let email = formData.get("email");
    let telephone = formData.get("telephone");
    let message = formData.get("message");
    let company = formData.get("company");

    if (!name) {
      errors.push("Name is required.");
      form.querySelector('input[name="name"]').classList.add("input-error");
    } else if (name.length > 255) {
      errors.push("Name is too long.");
      form.querySelector('input[name="name"]').classList.add("input-error");
    }

    if (!email) {
      errors.push("Email is required.");
      form.querySelector('input[name="email"]').classList.add("input-error");
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      errors.push("Email is not valid.");
      form.querySelector('input[name="email"]').classList.add("input-error");
    } else if (email.length > 255) {
      errors.push("Email is too long.");
      form.querySelector('input[name="email"]').classList.add("input-error");
    }

    if (!telephone) {
      errors.push("Telephone is required.");
      form
        .querySelector('input[name="telephone"]')
        .classList.add("input-error");
    } else if (telephone.length !== 11 || !/^\d+$/.test(telephone)) {
      errors.push("Phone number is invalid.");
      form
        .querySelector('input[name="telephone"]')
        .classList.add("input-error");
    }

    if (!message) {
      errors.push("Message is required.");
      form
        .querySelector('textarea[name="message"]')
        .classList.add("input-error");
    } else if (message.length > 1000) {
      errors.push("Message is too long.");
      form
        .querySelector('textarea[name="message"]')
        .classList.add("input-error");
    }

    if (company && company.length > 255) {
      errors.push("Company name is too long.");
      form.querySelector('input[name="company"]').classList.add("input-error");
    }

    if (errors.length > 0) {
      handleFormData({ errors: errors });
    } else {
      //If there are no validation errors, submit the form data to the server
      fetch("php/contact-submission.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          handleFormData(data);
        })
        .catch((error) => {
          handleFormData(error);
        });
    }
  });
