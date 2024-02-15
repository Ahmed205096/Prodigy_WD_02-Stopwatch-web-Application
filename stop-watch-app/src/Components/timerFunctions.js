// Start initialize the counter variables
let SecondTimer = 0;
let minuteTimer = 0;
let hoursTimer = 0;
let timerInterval;
// End initialize the counter variables

export let secondReturn = "00";
export let minuteReturn = "00";
export let hourReturn = "00";

// Start build the seconds increment
export function startSecondTimer() {
  // increment the seconds counter
  SecondTimer++;

  // Check if the counter is less than 10 then appear the result like that (01 , 02 , 03 ,...) rather than (1 , 2, 3 , ...)
  if (SecondTimer < 10) secondReturn = "0" + SecondTimer;
  else secondReturn = SecondTimer;

  // Check if the counter is equal to 60 then reset the counter to 0 and increment the minutes counter
  if (SecondTimer === 60) {
    SecondTimer = 0;
    secondReturn = SecondTimer + "0";
    minuteTimer++;
    if (minuteTimer < 10) minuteReturn = "0" + minuteTimer;
    else minuteReturn = minuteTimer;
  }
  if (minuteTimer === 60) {
    minuteTimer = 0;
    minuteReturn = minuteTimer + "0";
    hoursTimer++;
    if (hoursTimer < 10) hourReturn = "0" + hoursTimer;
    else hourReturn = hoursTimer;
  }

  // Check if the hours counter is equal to 24 then reset the counter to 0
  if (hoursTimer === 24) {
    hoursTimer = 0;
    hourReturn = "0" + hoursTimer;
  }
}
// End build the seconds increment

// Start building the function that will be called when the user press start
export function startTimer(stop) {
  // Check if the user is press pause to stop the counter , else continue
  if (stop) {
    clearInterval(timerInterval);
  } else {
    timerInterval = setInterval(startSecondTimer, 1000);
  }
}
// End building the function that will be called when the user press start

// Start building the function that will be called when the user press restart
export function restartTimer() {
  SecondTimer = 0;
  hoursTimer = 0;
  minuteTimer = 0;
  secondReturn = 0 + "0";
  minuteReturn = 0 + "0";
  hourReturn = 0 + "0";
}
// End building the function that will be called when the user press restart
