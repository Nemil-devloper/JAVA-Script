const button = document.getElementById('click');

button.addEventListener('click', function() {
    console.log('Button clicked!');
    if (confirm("Do you agree?")) {
        alert("You agree");
    } else {
        const inputText = prompt("Enter some string", "");
        alert("Hi " + inputText);
  }
});