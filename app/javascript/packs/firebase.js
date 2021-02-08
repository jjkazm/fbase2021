function hello() {
  let greeting = "Hello JS!";
  console.log(greeting);
  alert(greeting);
}

document.addEventListener('turbolinks:load', () => {
  const clickButton = document.getElementById("hello-js");
  clickButton.addEventListener('click', (event) => {
      hello()
  });
});