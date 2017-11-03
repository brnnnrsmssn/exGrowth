/*
	GLOSSAARY
	- experientia: the accumulation of a characters experiences. used to distinguish between experiences{this} (events) from experience points{!this} (stats).
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

/////////////////////////////////////////////////////////////////////////////////////////
/*   FUNCTIONS   */
/////////////////////////////////////////////////////////////////////////////////////////


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
	this.cha = new Array (score:undefined, mod:undefined, exp:undefined);
}

function findCharacter(pc) { //iterates through all the character sheets and returns the correstponding sheet to a character object
	var sheet = undefined;
	do {
		//*get new sheet
		break; //*temporary until the rest of the code is filled in
	} while (pc.name != sheet.name);
	return sheet;
}

function pullCharacter(pc) { //pulls character information from the character sheet and fills out the correct playerCharacer object with those values

	/*
	var sheet = findCharacter(pc)
	// pc.level = sheet.level;
	pc.str = {sheet.str, sheet.strMod, sheet.strExp};
	pc.dex = {sheet.dex, sheet.dexMod, sheet.dexExp};
	pc.con = {sheet.con, sheet.conMod, sheet.conExp};
	pc.int = {sheet.int, sheet.intMod, sheet.intExp};
	pc.wis = {sheet.wis, sheet.wisMod, sheet.wisExp};
	pc.cha = {sheet.cha, sheet.chaMod, sheet.chaExp};
	*/

}

function pushCharacter(pc) { //pushes updated character stats to the correct character sheet

	/*
	find character
	push pc object stats to sheet
	*/
}

function didAThing(/*pc,stat,exp*/) { //implements the application of experientia to a players stats
	
	/*
	pc.
	*/

}


/////////////////////////////////////////////////////////////////////////////////////////
/*   CONSTANTS   */
/////////////////////////////////////////////////////////////////////////////////////////

var ACTIONS = new Array ();
var STR_ACTIONS = ACTIONS[0] = new Array ();
var DEX_ACTIONS = ACTIONS[1] = new Array ();
var CON_ACTIONS = ACTIONS[2] = new Array ();
var INT_ACTIONS = ACTIONS[3] = new Array ();
var WIS_ACTIONS = ACTIONS[4] = new Array ();
var CHA_ACTIONS = ACTIONS[5] = new Array ();
