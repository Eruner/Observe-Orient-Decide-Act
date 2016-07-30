var BOT = (function(){

	var DATA,SCOUT,REPORTER,GENERAL,ENFORCER;

	function init(){
		try{
			DATA = {UNITS:{},BUILDINGS:{},SUPPLY:{}};
			/* Add TechTree and BuildOrders into DATA */
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
		console.time("makeMove");
		SCOUT.observe();
		REPORTER.orient();
		GENERAL.decide();
		ENFORCER.act();
		console.timeEnd("makeMove");
	}

	window.addEventListener("load", init);

	return{
		makeMove:makeMove
	};

})();