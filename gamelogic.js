const stats = {
    money: 0,
    appeal: 0,
    transparency: 0,
    backing: 0,

    setStats: function (init = [0, 0, 0, 0]) {
        this.money = init[0];
        this.appeal = init[1];
        this.transparency = init[2];
        this.backing = init[3];
    },

    updateStats: function (delta = [0, 0, 0, 0]) {
        this.money = this.money + delta[0];
        this.appeal = this.appeal + delta[1];
        this.transparency = this.transparency + delta[2];
        this.backing = this.backing + delta[3];
    },

    getStats: function () {
        return [this.money, this.appeal, this.transparency, this.backing];
    },
};

let scenario = 0;
try {
    scenario = JSON.parse(sessionStorage.scenario);
} catch (e) {
    scenario = 0;
    console.log(e);
}
console.log(`Scenario from memory is ` + scenario);

let playerNames;
try {
    playerNames = JSON.parse(sessionStorage.playerNames);
} catch (e) {
    playerNames = {
        A: `Player 1`,
        B: `Player 2`,
        C: `Player 3`,
        D: `Player 4`
    };
    console.log(e);
}
console.log(playerNames);
// -------------------------
// To update the text inside span
// $("#id")[0].textContent="";

// ------------------------

function scenarioSelect(number = 0) {
    switch (number) {
        case 0:
            stats.setStats([75, 25, 25, 50]);
            break;
        case 1:
            stats.setStats([25, 75, 25, 50]);
            break;
        case 2:
            stats.setStats([25, 50, 75, 25]);
            break;
        case 3:
            stats.setStats([50, 25, 25, 75]);
            break;
        default:
            stats.setStats([50, 50, 50, 50]);
            break;
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function giveButton(whichOne) {
    //move the box accordingly
    //make the box visible
    //have the blue bar on the first name

    //Set the current CHOICE-GIVE VARIABLE to a/b/c

    //On click of the names
    //move blue bar to name or appear-disappear using classes to define positions
    //set GIVER-NAME VARIABLE TO NAME

    //ON UP-DOWN
    //CHANGE VALUE ON DISPLAY
    //CHANGE VALUE ON VARIABLE

    //ON PRESSING GIVE
    //Pass CHOICE, NAME, AMOUNT variable to main game back state

}


const centralImage = document.querySelector("#u1057_img");
centralImage.src = "/images/situations/1.png";

const playerNamesFrontEnd = {
    A: document.querySelector("#u890_text").children[0].children[0],
    B: document.querySelector("#u925_text").children[0].children[0],
    C: document.querySelector("#u938_text").children[0].children[0],
    D: document.querySelector("#u963_text").children[0].children[0],
    boxA: document.querySelector("#u1035_text").children[0].children[0],
    boxB: document.querySelector("#u1036_text").children[0].children[0],
    boxC: document.querySelector("#u1037_text").children[0].children[0],
    boxD: document.querySelector("#u1038_text").children[0].children[0],
    updatePlayerNames: function (p) {
        this.A.textContent = p.A;
        this.B.textContent = p.B;
        this.C.textContent = p.C;
        this.D.textContent = p.D;
        this.boxA.textContent = p.A;
        this.boxB.textContent = p.B;
        this.boxC.textContent = p.C;
        this.boxD.textContent = p.D;
    },
};

// playerNamesFrontEnd.updatePlayerNames(playerNames);

const situationFrontEnd = {
    index: document.querySelector("#u850_text").children[0].children[0],
    progressBar: document.querySelector("#u853_div"),
    text: document.querySelector("#u851_text").children[0].children[0],
    choice1: document.querySelector("#u989_text").children[0].children[0],
    choice2: document.querySelector("#u1003_text").children[0].children[0],
    choice3: document.querySelector("#u1017_text").children[0].children[0],

    updateSituation: function (s) {
        this.index.textContent = 'SITUATION ' + (s.index + 1);
        this.progressBar.style.width = (15 + 48 * s.index) + 'px';
        this.text.textContent = s.text;
        this.choice1.textContent = s.choice1;
        this.choice2.textContent = s.choice2;
        this.choice3.textContent = s.choice3;
    },
};

const barsFrontEnd = {
    total: 248,
    money: document.querySelector("#u839_div"),
    appeal: document.querySelector("#u811_div"),
    transparency: document.querySelector("#u827_div"),
    backing: document.querySelector("#u791_div"),

    numberToPixel: function (p) {
        let pix = [];

        p.forEach(e => {
            pix.push((e * this.total / 100) + 'px');
        });

        return pix;
    },

    updateBars: function () {
        let lengths = this.numberToPixel * (stats.getStats());
        this.money.style.width = lengths[0];
        this.appeal.style.width = lengths[1];
        this.transparency.style.width = lengths[2];
        this.backing.style.width = lengths[3];
    },
};

let playerCoins = {
    Name0: 10,
    Name1: 10,
    Name2: 10,
    Name3: 10
}

const moneyBox = {
    whiteShape: 'images/main/rectangle_234_u1031.svg',
    blueShape: 'images/main/rectangle_235_u1032.svg',
    Name0: document.querySelector("#Name0"),
    Name1: document.querySelector("#Name1"),
    Name2: document.querySelector("#Name2"),
    Name3: document.querySelector("#Name3"),
    counterUI: document.querySelector("#u1043_text").children[0].children[0],
    up: document.querySelector("#u1045"),
    down: document.querySelector("#u1044"),

    current: 'Name1',
    moneyCount: 1,

    getBox: function (p) {
        return moneyBox[p].children[0].children[0];
    },

    nameClickingBox: function () {
        console.log(this.id);
        moneyBox.nameClicking(this.id);
    },

    nameClicking: function (n) {
        console.log(n);
        if (this.current != n) {
            moneyBox.getBox(n).src = moneyBox.blueShape;
            this.getBox(this.current).src = this.whiteShape;
            this.current = n;
            moneyBox.moneyCount = 1;
            moneyBox.counterupdater();
        }
    },

    initOnClick: function () {
        this.Name0.addEventListener("click", this.nameClickingBox);
        this.Name1.addEventListener("click", this.nameClickingBox);
        this.Name2.addEventListener("click", this.nameClickingBox);
        this.Name3.addEventListener("click", this.nameClickingBox);

        this.up.addEventListener("click", this.clickingUp);
        this.down.addEventListener("click", this.clickingDown);
    },

    clickingUp: function () {
        console.log("up and up and up");
        if (moneyBox.moneyCount < playerCoins[moneyBox.current]) {
            moneyBox.moneyCount++;
        }
        console.log(moneyBox.moneyCount);
        moneyBox.counterupdater();
    },

    clickingDown: function () {
        if (moneyBox.moneyCount > 1) {
            moneyBox.moneyCount--;
        }
        moneyBox.counterupdater();
    },

    counterupdater: function () {
        this.counterUI.textContent = this.moneyCount;
    },
};

moneyBox.initOnClick();





// situationFrontEnd.updateSituation(situations[4]);


// document.querySelector("#u890_text").children[0].textContent = "";