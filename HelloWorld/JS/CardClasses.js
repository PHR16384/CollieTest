var eEquip = {
    Misc: 0,
    Footgear: 1,
    Armor: 2,
    Headgear: 3,
    Wep_Small: 4,
    Wep_Big: 5
};


function Card_Door() {
    
}

function Card_Monster(STR,LVL,GOLD) {
    this.nStrength = STR;
    this.nLevelGain = LVL;
    this.nTreasureGain = GOLD;
    this.BadStuff = new Object();
}
Card_Monster.inherits(Card_Door);


function Card_Treasure() {
    this.nGoldVal = 0;
}

function Card_Equip(SLOT,BONUS) {
    this.Slot = SLOT;
    this.nBonus = BONUS;
}
Card_Equip.inherits(Card_Treasure);

