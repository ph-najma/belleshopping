function updateSubmitButton() {
  const submitButton = document.getElementById("submitButton");

  if (categoryName) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "disabled");
  }
}

function validateCategoryName() {
  let name = document.getElementById("name").value;
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!name) {
    document.getElementById("nameError").innerText =
      " Category name is required";
  } else if (!name.match(nameRegex)) {
    document.getElementById("nameError").innerText =
      "Category name can only contain letters and spaces";
  } else {
    document.getElementById("nameError").innerText = "";
    updateSubmitButton();
  }
}
