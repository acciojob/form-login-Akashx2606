function getFormvalue() {
    //Write your code here
	const form = document.getElementById("form1");
	const firstName = form.fname.value;
	const lastName = form.lname.value;

		alert(firstName + " "+ lastName);
	
}

