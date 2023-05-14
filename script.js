const fieldInput = document.getElementById("field");
const fieldError = document.getElementById("field-error");

fieldInput.addEventListener("keyup", function() {
    const fieldValue = fieldInput.value;
    if (fieldValue === "") {
      fieldError.style.display = "block";

    } else {
      fieldError.style.display = "none";
    }
});