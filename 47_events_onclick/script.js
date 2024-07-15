let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let title = document.getElementById("title");

console.log(btn);

btn.addEventListener("click", function () {
  btn2.style.color = "red";
});

title.addEventListener("click", function () {
  let subtitle = document.getElementById("subtitle");

  // subtitle.style.display = "none";
});

let subtitle = document.getElementById('subtitle')

subtitle.addEventListener('dblclick', function () {
  console.log("clique duplo");
})