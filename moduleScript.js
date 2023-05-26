const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle");
      
toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

function dropMenu() {
    document.getElementById("weeksList").classList.toggle("show");
    document.getElementById("dropArrow").classList.toggle("bx-chevron-down");
    document.getElementById("dropArrow").classList.toggle("bx-chevron-up");
  }