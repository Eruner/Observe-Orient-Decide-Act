function Enforcer(scope){

	var DATA = scope;

	function act(){
		try{
			/* Chose execute commands in effective way, micro units, place buildings */
			console.log('Enforcer acted');
		}catch(Pokemon){
			alert('Error in act:\n'+Pokemon);
		}
	}

	console.log('Enforcer initialized');

	return{
		act:act
	};
}