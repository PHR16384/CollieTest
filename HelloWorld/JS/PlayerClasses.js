// deprecated enums:
var eSex = {
    Female: 0,
    Male: 1
};
var eRace = {
    //Human: 0,
    Elf: 1,
    Dwarf: 2,
    Halfling: 3
};
var eClass = {
    Warrior: 1,
    Cleric: 2,
    Wizard: 3,
    Thief: 4
};


var Player = Class.extend({
    init: function () {
        this.Name = "PLAYER";
        this.Sex = 1;
        this.Race = new Array();
        this.Class = new Array();

        this.Level = 1;
        this.Gear = 0;
        this.Attack = 1;

        this.Weapons = new Array();
        this.Armor = null;
        this.Headgear = null;
        this.Footgear = null;

        this.Hand = new Array();
        this.nHandMax = 6;
        this.Bag = new Array();

        this.nRun = 5;
    }
});

