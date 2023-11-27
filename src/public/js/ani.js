function onNav() {
  const mobile = document.getElementById("lin");
  const links = document.querySelectorAll("#mobile .linksMobile a");

  mobile.classList.add("derecha");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      mobile.classList.remove("derecha");
    });
  });
}

function offNav(){
    const mobile = document.getElementById("lin");
    mobile.classList.remove("derecha");
}
