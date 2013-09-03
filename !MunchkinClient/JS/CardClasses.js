var eEquip = {
    Misc: 0,
    Footgear: 1,
    Armor: 2,
    Headgear: 3,
    Wep_Small: 4,
    Wep_Big: 5
};

var Card_Door = Class.extend({
    init: function () {
        this.oModifiers = {};
    }
});

var Card_Monster = Card_Door.extend({
    init: function (STR, LVL, GOLD, UNDEAD) {
        this._super();  //call the parent's constructor
        this.nStrength = STR;
        this.nLevelGain = LVL;
        this.nTreasureGain = GOLD;
        this.bZombie = (typeof UNDEAD === "undefined") ? false : UNDEAD;
    }
});
//Card_Monster.inherits(Card_Door);


var Card_Treasure = Class.extend({
    init: function () {
        this.nGoldVal = 0;
    }
});

var Card_Equip = Card_Treasure.extend({
    init: function (SLOT, BONUS) {
        this._super();
        this.Slot = SLOT;
        this.nBonus = BONUS;
    }
});
//Card_Equip.inherits(Card_Treasure);

