<<<<<<< Updated upstream
checkLogin();
=======
<<<<<<< HEAD
>>>>>>> Stashed changes
loadnavbar();
loadheader();
populateHomeScreen();

function loadnavbar() {

    const navbar = document.getElementById('navbar');
    if (navbar !== null) {
        const navbarData = `<div class="header-name">
                            Welcome, 
                            <div id="username"></div>
                        </div>
                        <ul>
                            <li><a href="home.html">Home</a></li>
                            <li><a href="movie-trailer.html">Watch Trailer</a></li>
                            <li><a href="movie-ticket.html">Book Ticket</a></li>
                            <li><a href="movie-song.html">Play Music</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="contactus.html">Contact Us</a></li>
                        </ul>`
        navbar.innerHTML = navbarData;
    }

}

function loadheader() {

    const header = document.getElementById('dynamic-header');
    if (header !== null) {
        const headerData = `<div>
                            <button id="toggle" class="toggle">
                            <i class="fa fa-bars fa-2x"></i>
<<<<<<< Updated upstream
                            </button>
                            <button class="log-out" id='logout'><i class="fa  fa-power-off fa-2x"></i></button>
=======
                            </button>    
=======
checkLogin();
loadnavbar();
loadheader();
populateHomeScreen();

function loadnavbar() {

    const navbar = document.getElementById('navbar');
    if (navbar !== null) {
        const navbarData = `<div class="header-name">
                            Welcome, 
                            <div id="username"></div>
                        </div>
                        <ul>
                            <li><a href="home.html">Home</a></li>
                            <li><a href="movie-trailer.html">Watch Trailer</a></li>
                            <li><a href="movie-ticket.html">Book Ticket</a></li>
                            <li><a href="movie-song.html">Play Music</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="contactus.html">Contact Us</a></li>
                        </ul>`
        navbar.innerHTML = navbarData;
    }

}

function loadheader() {

    const header = document.getElementById('dynamic-header');
    if (header !== null) {
        const headerData = `<div>
                            <button id="toggle" class="toggle">
                            <i class="fa fa-bars fa-2x"></i>
                            </button>
                            <button class="log-out" id='logout'><i class="fa  fa-power-off fa-2x"></i></button>
>>>>>>> 1b21f1d (Adding sign in and signup)
>>>>>>> Stashed changes
                        </div>
                        <div class="containBg">
                        <h1 id= "bgColor">Marvel Movie House</h1>
                        <p>
                            We are provide a service of Online booking of Movie Ticket
                        </p>
                        <a href="movie-ticket.html" class="btn btn-danger">Book Ticket</a>
                        </div>
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
                        `;
    header.innerHTML = headerData;
  }
=======
>>>>>>> Stashed changes
                        `
        header.innerHTML = headerData;
    }

}

function checkLogin() {
    const checkBit = sessionStorage.getItem('login') !== null ? sessionStorage.getItem('login') : false;
    if (!checkBit) {
        swal({
            title: "Error!!",
            text: "Currently you are not logged In. Please Sign In.",
            icon: "error",
        }).then((result) => {
            if (result) {
                window.location.replace("index.html");
            }
        });
    }
<<<<<<< Updated upstream
=======
>>>>>>> 1b21f1d (Adding sign in and signup)
>>>>>>> Stashed changes
}

const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
<<<<<<< Updated upstream
const logout = document.getElementById('logout');

//Get username for display
function populateHomeScreen() {
    const username = sessionStorage.getItem('user');
    $("#username").text(username);
}
=======
<<<<<<< HEAD
>>>>>>> Stashed changes

function closeNavbar(e) {
    if (
        document.body.classList.contains('show-nav') &&
        e.target !== toggle &&
        !toggle.contains(e.target) &&
        e.target !== navbar &&
        !navbar.contains(e.target)
    ) {
        document.body.classList.toggle('show-nav');
        document.body.removeEventListener('click', closeNavbar);
    } else if (!document.body.classList.contains('show-nav')) {
        document.body.removeEventListener('click', closeNavbar);
    }
}

if (toggle !== null) {
<<<<<<< Updated upstream
=======
  // Toggle nav
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
    document.body.addEventListener('click', closeNavbar);
  });
=======
const logout = document.getElementById('logout');

//Get username for display
function populateHomeScreen() {
    const username = sessionStorage.getItem('user');
    $("#username").text(username);
}

function closeNavbar(e) {
    if (
        document.body.classList.contains('show-nav') &&
        e.target !== toggle &&
        !toggle.contains(e.target) &&
        e.target !== navbar &&
        !navbar.contains(e.target)
    ) {
        document.body.classList.toggle('show-nav');
        document.body.removeEventListener('click', closeNavbar);
    } else if (!document.body.classList.contains('show-nav')) {
        document.body.removeEventListener('click', closeNavbar);
    }
}

if (toggle !== null) {
>>>>>>> Stashed changes
    // Toggle nav
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('show-nav');
        document.body.addEventListener('click', closeNavbar);
    });

}

//Log Out
if (logout !== null) {
    logout.addEventListener('click', () => {
        swal({
            text: "You successfully Logout.",
            icon: "success",
        }).then((result) => {
            if (result) {
                sessionStorage.removeItem('user');
                sessionStorage.removeItem('login');
                window.location.replace("index.html");
            }
        });
    });
<<<<<<< Updated upstream
=======
>>>>>>> 1b21f1d (Adding sign in and signup)
>>>>>>> Stashed changes
}
