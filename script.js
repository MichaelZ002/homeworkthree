// set values for each of the button that when cliked on or off will be put into the password
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz'
var num = '0123456789';
var sym = '!@#.)($%^&*=-_';

var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var upperBox = document.getElementById("upper");
var lowerBox = document.getElementById("lower");
var symBox = document.getElementById("sym");
var submit = document.getElementById("submit");
var yourPw = document.getElementById("yourPw");
var characters = ""
// this is an event that will happen. what its doing is two things. one checking to see if the number that the user needs is greater than 7 and less than 129. if its not they will get an alert that will say the character length must be between 8 and 128. if thhe number is between the two than the code will run based on what check boxes you have. if no check box is clicked you will get no password. 
submit.addEventListener("click", function (e) {

	var charNumVal = parseInt(charNum.value)
	console.log(charNumVal)
	if (charNumVal > 7 && charNumVal < 129) {

		(upperBox.checked) ? characters += upper : '';
		(lowerBox.checked) ? characters += lower : '';
		(numBox.checked) ? characters += num : '';
		(symBox.checked) ? characters += sym : '';
		yourPw.value = password(charNum.value, characters);
	}
	else alert("Characters must be between 8 and 128")
});
// this is the for loop for the event. it will keep runing for the number of given by the user
function password(l, characters) {
	var pwd = '';
	for (var i = 0; i < l; i++) {
		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return pwd;
}