export function Seats() {
  const changeSeat = document.querySelectorAll(".seat");
  changeSeat.forEach((changeSeat) => {
    changeSeat.addEventListener("click", function () {
      changeSeat.classList.toggle("selected");
    });
  });
}
