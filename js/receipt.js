const downloadPdf = document.getElementById('downloadPdf');
const gotoHome = document.getElementById('gotoHome');

if (downloadPdf !== null) {
    downloadPdf.addEventListener("click", function download() {
        const element = document.getElementById("invoice");
        html2pdf()
            .from(element)
            .save();
    });
}

if (gotoHome !== null) {
    gotoHome.addEventListener("click", function download() {
        swal({
            text: "Thank you for booking.",
            icon: "success",
        }).then((result) => {
            if (result) {
                sessionStorage.removeItem('selectedMovieIndex');
                sessionStorage.removeItem('selectedSeats');
                sessionStorage.removeItem('selectedMoviePrice');
                window.location.replace('home.html');
            }
        });
    });
}

const movies = ['Iron Man', 'Ant Man', 'CaptainAmerica', 'Thor', 'Hulk'];

if (sessionStorage.getItem('selectedMovieIndex') !== null && sessionStorage.getItem('selectedSeats') && sessionStorage.getItem('selectedMoviePrice')) {
    loadReceipt();
} else {
    swal({
        text: "Please book your ticket first.",
        icon: "error",
    }).then((result) => {
        if (result) {
            window.location.replace('movie-ticket.html');
        }
    });
}

function loadReceipt() {
    const receiptClass = document.getElementById('receiptData');
    const movieIndex = sessionStorage.getItem('selectedMovieIndex');
    const selectedSeats = sessionStorage.getItem('selectedSeats');
    const movieName = movies[movieIndex];
    const totalSeats = JSON.parse(selectedSeats).length;
    const moviePrice = sessionStorage.getItem('selectedMoviePrice');
    const totalPrice = parseInt(moviePrice) * totalSeats;
    const tax = ((totalPrice / 100) * 18).toFixed(2)
    const massTotal = totalPrice + tax;
    const receiptNumber = Math.floor(1000 + Math.random() * 9000);

    const getTodayDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    $("#date").text(getTodayDate.toLocaleDateString("en-US", options));
    $("#receiptNo").text('Receipt No.' + receiptNumber);

    let receipt = `<tr>
                    <td class="col-md-5"><h4><em>${movieName}</em></h4>
                    Seat No:- ${selectedSeats}
                    </td>
                    <td class="col-md-2"> ${totalSeats} </td>
                    <td class="col-md-1 text-center">$${moviePrice}</td>
                    <td class="col-md-1 text-center">$${totalPrice}</td>
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td class="text-right">
                        <p>
                        <strong>Subtotal:</strong>
                        </p>
                        <p>
                        <strong>Tax:</strong>
                        </p>
                    </td>
                    <td class="text-center">
                        <p>
                        <strong>$${totalPrice}</strong>
                        </p>
                        <p>
                        <strong>$${tax}</strong>
                        </p>
                    </td>
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td class="text-right">
                        <h4><strong>Total:</strong></h4>
                    </td>
                    <td class="text-center text-danger">
                        <h4><strong>$${massTotal}</strong></h4>
                    </td>
                </tr>`

    receiptClass.innerHTML = receipt;
}