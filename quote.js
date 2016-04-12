var getNumberJsonFct = getTestNumberJson; // getTestNumberJson or getNumberJson

// format the page from the received json
function loadFromNumberJson(json) {
	jQuery('#number').html(json.number);
	jQuery('#contents').html(json.text.replace(json.number, '...'));
}

// get number data for testing without hitting the api
function getTestNumberJson() {
	return loadFromNumberJson({
		"text": "15250 is the number of times the average driver will honk in a lifetime.",
		"number": 15250,
		"found": true,
		"type": "trivia"
	});
}

// get number data from the api
function getNumberJson() {
	return jQuery.getJSON("http://numbersapi.com/random/trivia?json", loadFromNumberJson);
}

// when the page is ready
jQuery(document).ready(function() {
  	jQuery("#next").on("click", getNumberJsonFct);
	getNumberJsonFct();
}); 
