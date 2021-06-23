const seatsRemaining = document.querySelector(".seats-remaining");
const seatsOccupied = document.querySelector(".seats-occupied");
const seatContainer = document.querySelector(".container");
let seatsOccupiedCount = 0;
let seatsRemainingCount = 42;

seatContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("seat")) {
    if (e.target.classList.contains("booked")) {
      alert("Sorry! This seat has already been booked🤷‍♂️");
    } else {
      const confirmation = confirm("Do you want to confirm your booking?");
      if (confirmation == true) {
        e.target.classList.add("booked");
        seatsOccupiedCount++;
        seatsRemainingCount--;
        console.log(seatsOccupiedCount);
        console.log(seatsRemainingCount);
        seatsOccupied.innerHTML = seatsOccupiedCount;
        seatsRemaining.innerHTML = seatsRemainingCount;
      }
    }
  }
});
