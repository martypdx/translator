
var input = document.getElementById('input');
var button = document.getElementById('button');
var result = document.getElementById('result');

button.addEventListener( 'click', function(){

	$.post('/translate', {
		text: input.value
	}, function(data){
		result.textContent = data.text;
		// $result.text(data.text);
	});


});
