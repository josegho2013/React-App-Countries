const axios = require("axios");
const { Activity } = require("../db");




async function allActivity(req, res, next){
	const act = req.body;
	
    const activityCreated = await Activity.create({
		name: act.name,
		difficulty: act.difficulty,
		duration: act.duration,
		season: act.season,
	});

	

	if (act.countries) {
		let aux = act.countries.split(',');
		aux.map(async (e) => {
			let country = await Country.findByPk(e);
			
			await country.addActivity([activityCreated]);
		});
	}
	res.send(activityCreated);
;
}
module.exports ={

allActivity,
} 

    