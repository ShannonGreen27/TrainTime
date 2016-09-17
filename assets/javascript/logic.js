
$(document).ready(function() {
	// Initialize Firebase
	var config = {
	apiKey: "AIzaSyAKXxRK23fd_LmRUfr9XTViQ-B8mXBLA_A",
	authDomain: "traintime-80a60.firebaseapp.com",
	databaseURL: "https://traintime-80a60.firebaseio.com",
	storageBucket: "",
	messagingSenderId: "460578727347"
	};
	firebase.initializeApp(config);

	var database = firebase.database();

	var trainName = "";
	var destination = "";
	var trainTime = 0;
	var frequency = 0;
	var trainTimeConverted;

	$('#addTrainBtn').on('click', function() {

		trainName = $('#trainNameInput').val().trim();
		destination = $('#destinationInput').val().trim();
		trainTime = $('#trainTimeInput').val().trim();
		frequency = $('#frequencyInput').val().trim();

		trainTimeConverted = moment(trainTime,"hh:mm a").subtract(1, "years");

		// Current Time
		var currentTime = moment().format('hh:mm a');
		console.log(currentTime)

		// Difference between the times
		var diffTime = currentTime.diff(trainTimeConverted, "minutes");
		console.log(diffTime)

		// Time apart (remainder)
		var remainder = diffTime % frequency;
		console.log(remainder)
		// Minute Until Train
		var minutesAway = frequency - remainder;

		// Next Train
		var nextTrain = moment().add(minutesAway, "minutes")


		database.ref().push({

			trainName: trainName,
			destination: destination,
			trainTime: trainTimeConverted,
			frequency: frequency

		})

		return false;
	})

	database.ref().on('child_added', function(snapshot){

		trainName = snapshot.val().trainName
		destination = snapshot.val().destination
		trainTime = snapshot.val().trainTimeConverted
		frequency = snapshot.val().frequency

		$('tbody').append(

			"<tr><td>"+trainName+
			"</td><td>"+destination+
			"</td><td>"+frequency+
			"</td><td>"+trainTimeConverted+"</td></tr>");

	})
 



})
