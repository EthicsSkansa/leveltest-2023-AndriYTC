// Toggle clas active
const navbarNav = document.querySelector 
('.navbar-nav');
// Ketika Hamburger Menu Di Klik
document.querySelector('#hamburger-menu').
onclick = ( ) => {
    navbarNav.classList.toggle('active')
};

// Klik Di Luar Sidebar Untuk Menghilangkan Nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) &&  !navbarNav.contains (e.target)){
    navbarNav.classList.remove('active');
    }
});

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}