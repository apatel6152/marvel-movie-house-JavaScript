let seatData = [
  {
<<<<<<< Updated upstream
    seat1: 'seat', seat2: 'seat', seat3: 'seat occupied', seat4: 'seat occupied', seat5: 'seat', seat6: 'seat', seat7: 'seat', seat8: 'seat', seat9: 'seat'
=======
<<<<<<< HEAD
    seat1: 'seat',
    seat2: 'seat',
    seat3: 'seat occupied',
    seat4: 'seat occupied',
    seat5: 'seat',
    seat6: 'seat',
    seat7: 'seat',
    seat8: 'seat',
    seat9: 'seat',
>>>>>>> Stashed changes
  },
  {
    seat1: 'seat', seat2: 'seat', seat3: 'seat', seat4: 'seat', seat5: 'seat', seat6: 'seat', seat7: 'seat', seat8: 'seat occupied', seat9: 'seat occupied'
  },
  {
    seat1: 'seat', seat2: 'seat', seat3: 'seat', seat4: 'seat', seat5: 'seat occupied', seat6: 'seat', seat7: 'seat', seat8: 'seat', seat9: 'seat'
  },
  {
    seat1: 'seat', seat2: 'seat', seat3: 'seat', seat4: 'seat', seat5: 'seat', seat6: 'seat', seat7: 'seat', seat8: 'seat', seat9: 'seat'
  },
  {
    seat1: 'seat', seat2: 'seat', seat3: 'seat', seat4: 'seat', seat5: 'seat', seat6: 'seat', seat7: 'seat', seat8: 'seat', seat9: 'seat'
  },
  {
<<<<<<< Updated upstream
    seat1: 'seat', seat2: 'seat', seat3: 'seat', seat4: 'seat', seat5: 'seat', seat6: 'seat', seat7: 'seat', seat8: 'seat', seat9: 'seat'
=======
    seat1: 'seat',
    seat2: 'seat',
    seat3: 'seat',
    seat4: 'seat',
    seat5: 'seat',
    seat6: 'seat',
    seat7: 'seat',
    seat8: 'seat',
    seat9: 'seat',
=======
    seat1: 'seat', seat2: 'seat', seat3: 'seat occupied', seat4: 'seat occupied', seat5: 'seat', seat6: 'seat', seat7: 'seat', seat8: 'seat', seat9: 'seat'
  },
  {
    seat1: 'seat', seat2: 'seat', seat3: 'seat', seat4: 'seat', seat5: 'seat', seat6: 'seat', seat7: 'seat', seat8: 'seat occupied', seat9: 'seat occupied'
  },
  {
    seat1: 'seat', seat2: 'seat', seat3: 'seat', seat4: 'seat', seat5: 'seat occupied', seat6: 'seat', seat7: 'seat', seat8: 'seat', seat9: 'seat'
  },
  {
    seat1: 'seat', seat2: 'seat', seat3: 'seat', seat4: 'seat', seat5: 'seat', seat6: 'seat', seat7: 'seat', seat8: 'seat', seat9: 'seat'
  },
  {
    seat1: 'seat', seat2: 'seat', seat3: 'seat', seat4: 'seat', seat5: 'seat', seat6: 'seat', seat7: 'seat', seat8: 'seat', seat9: 'seat'
  },
  {
    seat1: 'seat', seat2: 'seat', seat3: 'seat', seat4: 'seat', seat5: 'seat', seat6: 'seat', seat7: 'seat', seat8: 'seat', seat9: 'seat'
>>>>>>> 1b21f1d (Adding sign in and signup)
>>>>>>> Stashed changes
  },
];

loadSeatData(seatData);

function loadSeatData(seatData) {
  const chairClass = document.getElementById('seat-chairs');
  let seatChairs = '';

  for (let seat of seatData) {
    seatChairs += `<div class="row">
    <div class="${seat.seat1}"></div>
    <div class="${seat.seat2}"></div>
    <div class="${seat.seat3}"></div>
    <div class="${seat.seat4}"></div>
    <div class="${seat.seat5}"></div>
    <div class="${seat.seat6}"></div>
    <div class="${seat.seat7}"></div>
    <div class="${seat.seat8}"></div>
    <div class="${seat.seat9}"></div>
<<<<<<< Updated upstream
    </div>`
=======
<<<<<<< HEAD
    </div>`;
=======
    </div>`
>>>>>>> 1b21f1d (Adding sign in and signup)
>>>>>>> Stashed changes
  }
  chairClass.innerHTML = seatChairs;
}

<<<<<<< Updated upstream

=======
<<<<<<< HEAD
=======

>>>>>>> 1b21f1d (Adding sign in and signup)
>>>>>>> Stashed changes
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const bookTicket = document.getElementById('book-ticket');

populateUI();

let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  sessionStorage.setItem('selectedMovieIndex', movieIndex);
  sessionStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

<<<<<<< Updated upstream
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
=======
<<<<<<< HEAD
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
=======
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
>>>>>>> 1b21f1d (Adding sign in and signup)
>>>>>>> Stashed changes

  sessionStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

  setMovieData(movieSelect.selectedIndex, movieSelect.value);
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(sessionStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = sessionStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
<<<<<<< Updated upstream
movieSelect.addEventListener('change', e => {
=======
<<<<<<< HEAD
movieSelect.addEventListener('change', (e) => {
=======
movieSelect.addEventListener('change', e => {
>>>>>>> 1b21f1d (Adding sign in and signup)
>>>>>>> Stashed changes
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
<<<<<<< Updated upstream
container.addEventListener('click', e => {
=======
<<<<<<< HEAD
container.addEventListener('click', (e) => {
=======
container.addEventListener('click', e => {
>>>>>>> 1b21f1d (Adding sign in and signup)
>>>>>>> Stashed changes
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();

//book ticket
<<<<<<< Updated upstream
bookTicket.addEventListener("click", function book() {
  swal({
    text: "Are you sure you want to confirm?",
    icon: "warning",
=======
<<<<<<< HEAD
bookTicket.addEventListener('click', function book() {
  swal({
    text: 'Are you sure you want to confirm?',
    icon: 'warning',
=======
bookTicket.addEventListener("click", function book() {
  swal({
    text: "Are you sure you want to confirm?",
    icon: "warning",
>>>>>>> 1b21f1d (Adding sign in and signup)
>>>>>>> Stashed changes
    buttons: true,
  }).then((result) => {
    if (result) {
      window.location.replace('receipt.html');
<<<<<<< Updated upstream
      // alert("Thank you for choosing out service.");
    }
  });
});
=======
<<<<<<< HEAD
    }
  });
});
=======
      // alert("Thank you for choosing out service.");
    }
  });
});
>>>>>>> 1b21f1d (Adding sign in and signup)
>>>>>>> Stashed changes
