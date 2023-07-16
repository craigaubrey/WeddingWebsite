// countdown.js
// Example code for countdown functionality
//Replace "targetDate" with your desired date
const targetDate = new Date("2023-10-24").getTime();
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
	const currentDate = new Date().getTime();
	const timeRemaining = targetDate - currentDate;
	// Calculate remaining days, hours, minutes and seconds
	const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
	
	// update the countdown Element
	const countdownElement = document.getElementById("countdown");
	if (timeRemaining <= 0) {
		countdownElement.textContent = "The wedding is here!";
	} else {
	countdownElement.textContent = days + "d " + hours "h " + minutes + "m " + seconds + "s ";
}

// update the countdown every second
setInterval(updateCountdown, 1000);
	