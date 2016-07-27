function General(scope){

	var DATA = scope;

	function decide(){
		try{
			/* Chose combat strategy, build order, behaviour */
			console.log('General decided');
		}catch(Pokemon){
			alert('Error in decide:\n'+Pokemon);
		}
	}

	console.log('General initialized');

	return{
		decide:decide
	};
}