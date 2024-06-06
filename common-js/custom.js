function getValue() {
  // Get the textarea element by its ID
  let textarea = document.getElementById("myMessage");

  // Get the value of the textarea
  let value = textarea.value;

  // Display the value in an alert
  alert("Textarea value: " + value);
}
