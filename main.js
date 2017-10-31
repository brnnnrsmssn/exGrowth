/*
	GLOSSAARY

	- : the accumulation of a characters experiences. used to distinguish between experiences (events) from experience points (stats). falna will be used to represent event type experiences.

	- experience points [experience, exp, xp]: granted to players for doing actions. they are the underlying metric for a characters stats.

	- statistics [stats, abilities]: the measure of a character. divided into six categories: strength, dexterity, constitution, intelligence, wisdom, charisma. governs the chance for success when performing actions.

	- strength [str]:

	- dexterity [dex]:

	- constitution [con]:

	- intelligence [int]:

	- wisdom [wis]:

	- charisma [cha]:

	- modifier [mod]:
*/

function playerCharacter() { //character constructor
	this.name = undefined;
	this.level = undefined;
	//strength variables
	this.str = new Array (score:undefined, mod:undefined, exp:undefined);
	//dexterity variabls
	this.dex = new Array (score:undefined, mod:undefined, exp:undefined);
	//constitution variables
	this.con = new Array (score:undefined, mod:undefined, exp:undefined);
	//intelligence variables
	this.int = new Array (score:undefined, mod:undefined, exp:undefined);
	//wisdom variables
	this.wis = new Array (score:undefined, mod:undefined, exp:undefined);
	//charisma variables
	this.str = new Array (score:undefined, mod:undefined, exp:undefined);

	
}

function findCharacter(pc) {
	//get character name from sheet store as sheetName;
	while (pc.name != sheetName) {
		
	}
}

function pullCharacter(pc) { //pulls character information from the character sheet and fills out the correct playerCharacer object with those values

	/*
	get pc name from pc.name;
	find matching character sheet;
	pull stats from sheet and store in pc;
	*/

}

function pushCharacter(pc) { //pushes updated character stats to the correct character sheet

	/*
	get pc name 
	*/
}

function didAThing(pc,stat,exp) { //implements the application of falna to a players stats
	
	/*
	pc.
	*/

}
