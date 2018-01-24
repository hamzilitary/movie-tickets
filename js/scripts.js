//back end logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

var calcPoints = function(inputtedMovie, inputtedAge, inputtedTime) {
  var points = 0;
	if (inputtedMovie === "Avengers 7: The Dawn of Tommorow's Final Battle of the Universe") {
  	points = points + 2;
  } else if (inputtedMovie === "Jumanji") {
  	points = points + 1;
  } else {
  	points = points;
  }
  if (inputtedAge === "Under 17") {
  	points = points + 2;
  } else if (inputtedAge === "Adult") {
  	points = points + 3;
  } else {
  	points = points + 1;
  }
  if (inputtedTime === "11AM") {
  	points = points + 1;
  } else if (inputtedTime === "4PM") {
  	points = points + 2;
  } else {
  	points = points + 3;
  }
  	return points;
 };

 var determinePrice = function(points) {
 	if (points <= 4) {
  	$("#price9").text($("ul#ticketInfo").append("<li><span class='price'>$9</span></li>"));
  } else if (points > 4 && points < 8 ) {
  	$("#price18").text($("ul#ticketInfo").append("<li><span class='price'>$18</span></li>"));
  } else {
  	$("#price27").text($("ul#ticketInfo").append("<li><span class='price'>$27</span></li>"));
  }
 };

 //front end logic
 $(document).ready(function() {
   $("form#ticketPicker").submit(function(event){
   event.preventDefault();

   var inputtedMovie = $("#moviePick").val();
   var inputtedAge = $("#agePick").val();
   var inputtedTime = $("#timePick").val();

   var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);

   var ticketDetail = newTicket.movie + ", " + newTicket.time;
   var results = calcPoints(inputtedMovie, inputtedAge, inputtedTime)
   $("ul#ticketInfo").append("<li><span class='ticketClass'>" + ticketDetail + "</span></li>");

   console.log(results);
   determinePrice(results);
  });
 });
