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
        this.Race = [];
        this.Class = [];

        this.Level = 1;
        this.Gear = 0;
        this.Attack = 1;

        this.Weapons = [];
        this.Armor = null;
        this.Headgear = null;
        this.Footgear = null;

        this.Hand = [];
        this.nHandMax = 6;
        this.Bag = [];

        this.nRun = 5;
    }
});

