window.onload = function () {
  let seconds = 0; // Initialize as numbers
  let tens = 0; 
  let appendTens = document.getElementById("tens");
  let appendSeconds = document.getElementById("seconds");
  let buttonStart = document.getElementById('button-start');
  let buttonStop = document.getElementById('button-stop');
  let buttonReset = document.getElementById('button-reset');
  let Interval;

  buttonStart.addEventListener("click", function() {
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10); // 10ms interval for 1/100th of a second
  });

  buttonStop.addEventListener("click", function() {
      clearInterval(Interval);
  });

  buttonReset.addEventListener("click", function() {
      clearInterval(Interval);
      tens = 0;
      seconds = 0;
      appendTens.innerHTML = "00";
      appendSeconds.innerHTML = "00";
  });

  function startTimer() {
      tens++;

      if (tens <= 9) {
          appendTens.innerHTML = "0" + tens;
      }

      if (tens > 9) {
          appendTens.innerHTML = tens;
      }

      if (tens > 99) {
          seconds++;
          appendSeconds.innerHTML = seconds <= 9 ? "0" + seconds : seconds;
          tens = 0;
          appendTens.innerHTML = "00";
      }
  }
};
