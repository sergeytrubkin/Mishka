var item = document.querySelectorAll(".catalog-item");
var popup = document.querySelector(".popup");
var bg = document.querySelector(".popup__bg");

[].forEach.call(item, function(e) {
  e.addEventListener("click", function(ev) {
    ev.preventDefault();
    popup.classList.add("popup--visible");
  })
})

bg.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup--visible");
})
