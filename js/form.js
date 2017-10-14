
var x = document.getElementById("form_sample");

var createform = document.createElement('form'); // Create New Element form
	createform.setAttribute("action", "");        // Setting action Attribute on form
	createform.setAttribute("method", "post");  // Setting method Attribute on form
	x.appendChild(createform);

var heading = document.createElement('h2'); // Heading of form
	heading.innerHTML = "Queixas A La Colau ";  
	createform.appendChild(heading);

var line = document.createElement('hr');  //giving horizontal row after heading
	createform.appendChild(line);

var linebreak = document.createElement('br');
	createform.appendChild(linebreak);

var emailbreak = document.createElement('br');
	createform.appendChild(emailbreak);

// Append Textarea
var messagelabel = document.createElement('label'); 
	messagelabel.innerHTML = "Your Message : ";
	createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea'); 
	texareaelement.setAttribute("name", "dmessage");
	createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
	createform.appendChild(messagebreak);

// Append Submit Button
var submitelement = document.createElement('input'); 
	submitelement.setAttribute("type", "submit");
	submitelement.setAttribute("name", "dsubmit");
	submitelement.setAttribute("value", "Submit");
	createform.appendChild(submitelement);