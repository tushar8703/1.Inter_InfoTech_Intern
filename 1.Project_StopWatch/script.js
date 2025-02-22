// improting html id and class
let StartBtn = document.querySelector('#start');
let StopBtn = document.querySelector('.stop');
let ResetBtn = document.querySelector('.reset');

let startimg = document.getElementById('startimg');
let stopimg = document.getElementById('stopimg');

let hrs = 00;
let mints = 00;
let secds = 00;
let miliSec = 00;

// create a Events and fuctions in StopWatch
// create a Start function of the StopWatch 
function startBtnClick() {

    // adding a onclick event in start button 
    StartBtn.addEventListener('click', () => {

        timerID = true;
        if (timerID == true) {
            startimg.style.display = "block";
            stopimg.style.display = "none";
        }
        StopWatch();//calling the StopWach()
    });

}//end of the startBtnClick()

// create a Stop function of the StopWatch
function stopBtnClick() {

    // adding a onclick event in stop button 
    StopBtn.addEventListener('click', () => {

        if (timerID == true) {
            startimg.style.display = "none";
            stopimg.style.display = "block";
        }
        else {
            startimg.style.display = "block";
            stopimg.style.display = "none";
        }
        timerID = false;
    });

}//end of the stopBtnClick()

// create a Reset function of the StopWatch
function resetBtnClick() {

    // adding a onclick event in reset button 
    ResetBtn.addEventListener('click', () => {
        if (timerID !== true) {
            startimg.style.display = "block";
            stopimg.style.display = "none";
        }
        timerID = false;
        // reset a timer in StopWatch
        hrs = 00;
        mints = 00;
        secds = 00;
        miliSec = 00;
        // display the reset time in the StopWatch
        document.getElementById('hr').innerHTML = "00:";
        document.getElementById('min').innerHTML = "00:";
        document.getElementById('sec').innerHTML = "00:";
        document.getElementById('milis').innerHTML = "00";
    });
} //end of the resetBtnClick()

// calling the startBtnClick function
startBtnClick();

// calling the startBtnClick function
stopBtnClick();

// calling the startBtnClick function
resetBtnClick()


// create a function in StopWatch
function StopWatch() {
    //checked the timeId is equal to true then the timer (StopWatch) is run.
    if (timerID) {
        miliSec++;//mili secound counting ++
        if (miliSec == 100) {
            secds++;
            miliSec = 0;
        }//secound secound counting ++
        if (secds == 60) {
            mints++;
            secds = 0;
        }//minites secound counting ++   
        if (mints == 60) {
            hrs++;
            mints = 0;
            secds = 0;
        }//hourse secound counting ++

        let hrString = hrs;
        let mintString = mints;
        let secString = secds;
        let miliString = miliSec;

        if (hrs < 10) {
            hrString = "0" + hrString;
        }
        if (mints < 10) {
            mintString = "0" + mintString;
        }
        if (secds < 10) {
            secString = "0" + secString;
        }
        if (miliSec < 10) {
            miliString = "0" + miliString;
        }
        //the timer has display to the StopWatch timer
        document.getElementById('hr').innerHTML = hrString + ':';
        document.getElementById('min').innerHTML = mintString + ':';
        document.getElementById('sec').innerHTML = secString + ':';
        document.getElementById('milis').innerHTML = miliString;
        setTimeout(StopWatch, 10);

    }
}