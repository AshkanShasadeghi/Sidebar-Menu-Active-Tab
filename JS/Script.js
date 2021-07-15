let List = document.querySelectorAll(".List");
let MenuToggle = document.querySelector(".Menu");
let Navigation = document.querySelector(".Navigation");

function active(So) {
  for (i = 0; i < List.length; i++) {
    List[i].classList.remove("active");
    List[So - 1].classList.add("active");
  }
}

MenuToggle.onclick = function () {
  MenuToggle.classList.toggle("active");
  Navigation.classList.toggle("active");
};
