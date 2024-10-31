export function Seats() {
  console.log("hejhej");
  const changeSeat = document.querySelectorAll(".seat");
  changeSeat.forEach((changeSeat) => {
    changeSeat.addEventListener("click", function () {
      changeSeat.classList.add("selected");
    });
  });
}
