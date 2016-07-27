function Reporter(scope){

	var DATA = scope;

	function orient(){
		try{
			/* Understand raw information into simpler data structure */
			console.log('Reporter oriented');
		}catch(Pokemon){
			alert('Error in orient:\n'+Pokemon);
		}
	}

	console.log('Reporter initialized');

	return{
		orient:orient
	};
}