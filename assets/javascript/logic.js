
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
  var firstTrainTime = 0;
  var frequency = 0;

  $('#addTrainBtn').on('click', function() {

  	trainName = $('#trainNameInput').val().trim();
  	destination = $('#destinationInput').val().trim();
  	firstTrainTime = $('#firstTrainTimeInput').val().trim();
  	frequency = $('#frequencyInput').val().trim();

  	database.ref().push({

  		trainName: trainName,
  		destination: destination,
  		firstTrainTime: firstTrainTime,
  		frequency: frequency
  	})

  	return false;
  })