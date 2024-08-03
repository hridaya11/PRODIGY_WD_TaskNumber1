window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 20) {
    header.classList.add("glassy");
  } else {
    header.classList.remove("glassy");
  }
});

function toggleVisibility() {
  document.querySelector("#burger").classList.toggle("hidden");
  document.querySelector("#hdcross").classList.toggle("hidden");
  document.querySelector(".nav").classList.toggle("show");
}

// Add event listener to the burger icon
document.querySelector("#burger").addEventListener("click", () => {
  toggleVisibility();
});

// Add event listener to the cross icon
document.querySelector("#hdcross").addEventListener("click", () => {
  toggleVisibility();
});
