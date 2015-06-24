var vowels = {
	a: true,
	e: true,
	i: true,
	o: true,
	u: true
};

function translate(input){
	var words = input.split(' ');
	words = words.map(translateWord);
	return words.join(' ');
}

function translateWord(input){
	if ( !input ) { return; }
	var firstLetter = input[0];
	var result;
	if ( vowels[firstLetter.toLowerCase()] ) {
		result = input + '-ay';
	}
	else {
		var restOfWord = input.slice(1);
		result = restOfWord + '-' + firstLetter + 'ay';
	}
	return result;
}

module.exports = translate;
