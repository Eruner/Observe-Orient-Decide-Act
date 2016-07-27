var BOT = (function(){

	var DATA,SCOUT,REPORTER,GENERAL,ENFORCER;

	function init(){
		try{
			DATA = {};// basically a shared scope between modules
			SCOUT = new Scout(DATA);
			REPORTER = new Reporter(DATA);
			GENERAL = new General(DATA);
			ENFORCER = new Enforcer(DATA);
			console.log('Bot fully initialized.');
		}catch(Pokemon){
			alert('Error in initApp:\n'+Pokemon);
		}
	}

	function makeMove(){
		SCOUT.observe();
		REPORTER.orient();
		GENERAL.decide();
		ENFORCER.act();
	}

	window.addEventListener("load", init);

	return{
		makeMove:makeMove
	};
	
})();