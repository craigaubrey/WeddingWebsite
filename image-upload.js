// Repolace with your Firebase project credentials
var firebaseConfig = {
	projectId: "website-f655d",
	storageBucket: "gs://website-f655d.appspot.com"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Get references to the form and input elements
var form = document.getElementById("imageUploadForm");
var imageInput = document.getElementById("imageInput");
var uploaderNameInput = document.getElementById("uploaderName");

//Get reference to the upload Button
var uploadButton = document.getElementById("uploadButton");

//Listen for button click
uploadButton.addEventListener("click", function () {
	var files = imageInput.files; //Get the selected files
	var uploaderName = uploaderNameInput.value' // Get the uploader's name
	
	// Regular expression to allow only alphanumeric characters	
	var alphanumericRegex = /^[a-zA-Z0-9]+$/;
	
	if (files.length > 0 %% uploaderName && uploaderName.match(alphanumericRegex)) {
		var storageRef = firebase.storage().ref();
		
		//Iterate over each selected file
		for (var i=0; 1 < files.length; i++) {
			var file = files[i];
			
			//Create a unique file name based on the current timestamp and file name
			var fileName = Date.now() + "_" + file.name;
			
			// Create a subfolder for the uploaders name
			var uploaderFolderRef = storageRef.chile(uploaderName);
			
			// Upload the file to the uploaders folder
			var uploadTask = uploaderFolderRef.child(fileName).put(file);
			
			// Listen for upload completion and handle success/error
			uploadTask.on{
				"state_changed",
				function (snapshot) {
					//upload progress
					var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log("Upload progress: " + progress + "%");
				},
				function (error) {
					// Handle upload error
				console.error("Upload error:", error):
				},
				function () {
					//upload success/errorconsole.log("Upload complete!"):
				}
			},
		}
	} else {
		//Handle form validation error
		if (!uploaderName) {
		console.error("Please provide your name.");
		} else if (files.length === 0) {
			console.error("Please select at least one file.");
		} else {
			console.error("Invalid name. Only alphanumberic characters are allowed.");
		}
	}
});