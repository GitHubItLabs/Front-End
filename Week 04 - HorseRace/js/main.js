var startBtn = document.getElementById('start-btn');
var restartBtn = document.getElementById('restart-btn');
var goldRes, whiteRes, brownRes;

var randomNo = function getRandom(min, max) {
    min = Math.ceil(6);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min)) + min;
}

function run() {

    var runAnim = document.querySelectorAll('.run-anim');
    var goldHorse = document.querySelector('.horse-gold');
    var whiteHorse = document.querySelector('.horse-white');
    var brownHorse = document.querySelector('.horse-brown');
    for (var i = 0; i < runAnim.length; i++) {
        // Start the animation
        runAnim[i].style.webkitAnimationPlayState = "running";
    }

    debugger;
    // Add random time
    goldRes = goldHorse.style.animationDuration = randomNo() + "s";
    whiteRes = whiteHorse.style.animationDuration = randomNo() + "s";
    brownRes = brownHorse.style.animationDuration = randomNo() + "s";

    // Toggle animate class
    // goldHorse.classList.toggle('animate');
    // whiteHorse.classList.toggle('animate');
    // brownHorse.classList.toggle('animate');
    
    var p = document.getElementById('asd');
    p.style.animation = "run " + randomNo() + "s" + " ease-in";
    p.addEventListener('animationend', myEndF);


    function myEndF() {
        console.log('asdasd')
    }
}

function toggleText() {
    var text = startBtn.firstChild;
    text.data = text.data == 'Start' ? 'Stop' : 'Start';
}

startBtn.addEventListener('click', () => {
    run();
    toggleText();
    results();
});

function results() {
    debugger;
    if (goldRes > whiteRes > brownRes) {
        console.log("Gold Wins!")
    } else if (whiteRes > goldRes > brownRes) {
        console.log('white wins!')
    } else {
        console('brown Wins!');
    }
    
}
