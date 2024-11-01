const changeSeat = document.querySelectorAll(".seat");

export function Seats() {
  changeSeat.forEach((changeSeat) => {
    changeSeat.addEventListener("click", function () {
      changeSeat.classList.toggle("selected");
    });
  });
}

export function SelectedSeats() {
  const selectedSeats = document.getElementsByClassName("selected");
  const seatCount = selectedSeats.length;

  document.getElementById("count").textContent = seatCount;
}

document.querySelectorAll(".seat").forEach((seat) => {
  seat.addEventListener("click", SelectedSeats);
});
