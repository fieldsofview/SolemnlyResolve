const stats = {
    money: 0,
    appeal: 0,
    transparency: 0,
    backing: 0,
    preambleOG: [],
    preamble: [],

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

    setPreamble: function (p) {
        p.forEach((e) => {
            this.preamble.push(e);
            if(e>0){
                this.preambleOG.push(true);
            } else {
                this.preambleOG.push(false);
            }
        });
    },

    updatePreamble: function (p) {
        // this.preamble = this.preambleOG+parameter;
        p.forEach((e,index) => {
            this.preamble[index] = this.preamble[index] + e;
        });
    },

    exportPreamble: function(){
        let temp = [];
        
        this.preamble.forEach((e,index) => {
            if(e>0){
                temp.push(true);
            } else if(e<0) {
                temp.push (false);
            } else {
                temp.push(this.preambleOG[index]);
            }
        });

        sessionStorage.preamble = JSON.stringify(temp);
    },

    limiter: function (n) {
        if (n > 100) {
            return 100;
        } else if (n < 0) {
            return 0;
        } else {
            return n;
        }
    },

    getStats: function () {
        // let results = [];
        // results.push(this.limiter(this.money));

        // console.log(results);
        return [this.limiter(this.money), this.limiter(this.appeal), this.limiter(this.transparency), this.limiter(this.backing)];
    },
};

const gameVariables = {
    index: 0,
    scenario: 0,
    playerNames: '',

    getScenario: function () {
        try {
            this.scenario = JSON.parse(sessionStorage.scenario);
            console.log(`Scenario from memory is ` + this.scenario);
        } catch (e) {
            this.scenario = 0;
            console.log(`Scenario defaulted is ` + this.scenario);
            console.log(e);
        }
    },

    scenarioSelect: function (number = 0) {
        switch (number) {
            case 0:
                stats.setStats([75, 25, 25, 50]);
                stats.setPreamble([1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1]);
                break;
            case 1:
                stats.setStats([25, 75, 25, 50]);
                stats.setPreamble([-1, -1, 1, 1, -1, 1, -1, -1, -1, 1, -1, -1, 1, -1]);
                break;
            case 2:
                stats.setStats([25, 50, 75, 25]);
                stats.setPreamble([1, -1, 1, -1, -1, 1, 1, 1, -1, 1, 1, 1, 1, 1]);
                break;
            case 3:
                stats.setStats([50, 25, 25, 75]);
                stats.setPreamble([-1, -1, 1, -1, 1, -1, 1, 1, 1, -1, -1, 1, 1, 1]);
                break;
            default:
                stats.setStats([50, 50, 50, 50]);
                stats.setPreamble([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
                break;
        }
    },

    getPlayerNames: function () {
        try {
            this.playerNames = JSON.parse(sessionStorage.playerNames);
        } catch (e) {
            playerNames = {
                A: `Player 1`,
                B: `Player 2`,
                C: `Player 3`,
                D: `Player 4`
            };
            console.log(e);
        }
        console.log(this.playerNames);
    },

    init: function () {
        this.getScenario();
        this.getPlayerNames();
        this.scenarioSelect(this.scenario);
    },
};


// -------------------------
// To update the text inside span
// $("#id")[0].textContent="";

// ------------------------



// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }

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
        let lengths = this.numberToPixel(stats.getStats());
        console.log(lengths);
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
const moneySidebar = {
    Name0: document.querySelector("#u861_text").children[0].children[0],
    Name1: document.querySelector("#u868_text").children[0].children[0],
    Name2: document.querySelector("#u875_text").children[0].children[0],
    Name3: document.querySelector("#u882_text").children[0].children[0],

    update: function () {
        this.Name0.textContent = playerCoins.Name0;
        this.Name1.textContent = playerCoins.Name1;
        this.Name2.textContent = playerCoins.Name2;
        this.Name3.textContent = playerCoins.Name3;
    },
};

const moneyBox = {
    whiteShape: 'images/main/rectangle_234_u1031.svg',
    blueShape: 'images/main/rectangle_235_u1032.svg',
    boxWrapper: document.querySelector("#u1029"),
    Name0: document.querySelector("#Name0"),
    Name1: document.querySelector("#Name1"),
    Name2: document.querySelector("#Name2"),
    Name3: document.querySelector("#Name3"),
    counterUI: document.querySelector("#u1043_text").children[0].children[0],
    up: document.querySelector("#u1045"),
    down: document.querySelector("#u1044"),
    giveButton: document.querySelector("#u1046"),

    dx: 295,
    choiceTracker: 'delta1',
    boxDisplayFlag: false,

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

        this.giveButton.addEventListener("click", this._clickingGive);
    },

    clickingUp: function () {
        // console.log("up and up and up");
        if (moneyBox.moneyCount < playerCoins[moneyBox.current]) {
            moneyBox.moneyCount++;
        }
        // console.log(moneyBox.moneyCount);
        moneyBox.counterupdater();
    },

    clickingDown: function () {
        if (moneyBox.moneyCount > 1) {
            moneyBox.moneyCount--;
        }
        moneyBox.counterupdater();
    },

    _clickingGive: function () {
        moneyBox.clickingGive();
    },

    clickingGive: function () {
        playerCoins[this.current] = playerCoins[this.current] - this.moneyCount;
        this.moneyCount = 1;
        this.boxDisplayFlag = false;
        console.log(this.choiceTracker);
        moveThingsAlong(this.choiceInt());
    },

    counterupdater: function () {
        this.counterUI.textContent = this.moneyCount;
    },

    choiceInt: function () {
        return parseInt(this.choiceTracker.slice(-1));
    },

    boxDisplay: function () {
        if (this.boxDisplayFlag) {
            this.boxWrapper.style.zIndex = '9999';
            console.log((this.dx * this.choiceInt() - 277) + 'px');
            this.boxWrapper.style.left = (this.dx * this.choiceInt() - 277) + 'px';
        } else {
            this.boxWrapper.style.zIndex = '-1';
            // console.log("else");
        }
    },

    actionTime: function (t) {
        this.choiceTracker = t;
        this.boxDisplayFlag = !this.boxDisplayFlag;
        this.boxDisplay();
    },

};

const choicesUI = {
    choice1: document.querySelector("#u987"),
    choice2: document.querySelector("#u1001"),
    choice3: document.querySelector("#u1015"),
    button: document.querySelector("#u1053"),
    display: false,
    buttonDisplay: true,
    deltaTop:'-45px',
    newHeight: '367px',

    buttonInit: function () {
        this.button.addEventListener('click', choicesUI.choicesShow);
    },

    choicesHide: function () {
        choicesUI.choice1.style.display = 'none';
        choicesUI.choice2.style.display = 'none';
        choicesUI.choice3.style.display = 'none';
        choicesUI.display = false;
        choicesUI.button.style.display = 'block';
        choicesUI.buttonDisplay = true;
    },

    choicesShow: function () {
        choicesUI.choice1.style.display = 'block';
        choicesUI.choice2.style.display = 'block';
        choicesUI.choice3.style.display = 'block';
        choicesUI.display = true
        choicesUI.button.style.display = 'none'
        choicesUI.buttonDisplay = false;
    },

    choicesMakeBigger: function(){
        this.choice1.style.top = this.deltaTop;
        document.querySelector("#u988_div").style.height=this.newHeight;
        this.choice2.style.top = this.deltaTop;
        document.querySelector("#u1002_div").style.height=this.newHeight;
        this.choice3.style.top = this.deltaTop;
        document.querySelector("#u1016_div").style.height=this.newHeight;

    }
};

//no matter what the consent buttons will always send out delta1 delta 2 delta 3
const choicesFx = {
    choice1Consent: document.querySelector("#u991"),
    choice2Consent: document.querySelector("#u1005"),
    choice3Consent: document.querySelector("#u1019"),
    choice1Give: document.querySelector("#u994"),
    choice2Give: document.querySelector("#u1008"),
    choice3Give: document.querySelector("#u1022"),
    deltaTop: '60px',

    choiceSenderConsent: function () {
        moneyBox.boxDisplayFlag = false;
        console.log(this.attributes['data-label'].textContent);
        let temp = parseInt(this.attributes['data-label'].textContent.slice(-1));
        moveThingsAlong(temp);
    },

    choiceSenderGive: function () {
        moneyBox.actionTime(this.attributes['data-label'].textContent);
    },

    choicesInit: function () {
        this.choice1Consent.addEventListener("click", choicesFx.choiceSenderConsent);
        this.choice2Consent.addEventListener("click", choicesFx.choiceSenderConsent);
        this.choice3Consent.addEventListener("click", choicesFx.choiceSenderConsent);

        this.choice1Give.addEventListener("click", choicesFx.choiceSenderGive);
        this.choice2Give.addEventListener("click", choicesFx.choiceSenderGive);
        this.choice3Give.addEventListener("click", choicesFx.choiceSenderGive);
    },

    moveButtonsDown: function(){
        this.choice1Consent.style.top = this.deltaTop;
        this.choice1Give.style.top = this.deltaTop;
        this.choice2Consent.style.top = this.deltaTop;
        this.choice2Give.style.top = this.deltaTop;
        this.choice3Consent.style.top = this.deltaTop;
        this.choice3Give.style.top = this.deltaTop;
    },
};

//switch them out or comment out to get to production game state
choicesUI.choicesHide();
choicesUI.choicesShow();

const overlayThings = {
    imageGroup: document.querySelector("#imageGroup"),
    imageBox: document.querySelector("#u1057_img"),
    bgLayer: document.querySelector("#u1057_img"),
    displayFlag: false,

    init: function () {
        this.imageBox.src = './images/situations/' + gameVariables.scenario + '.png';
        // this.imageGroup.style.zIndex = '-1'
        this.imageGroup.style.display = 'block';
        this.imageGroup.addEventListener('click', this.clickDisappear);
    },

    clickDisappear: function () {
        overlayThings.displayFlag = false;
        updateEverything();
        nextScenario();
    },

    display: function () {
        if (this.displayFlag) {
            this.imageGroup.style.display = 'block';
        } else {
            this.imageGroup.style.display = 'none';
        }
    },

    changeImage: function (src, flag) {
        this.imageBox.src = src;
        this.displayFlag = flag;
        this.display();
    },
};

function initEverything() {
    gameVariables.init();
    playerNamesFrontEnd.updatePlayerNames(gameVariables.playerNames);
    situationFrontEnd.updateSituation(situations[gameVariables.index]);
    barsFrontEnd.updateBars();
    moneySidebar.update();
    moneyBox.initOnClick();

    overlayThings.init();

    choicesUI.choicesMakeBigger();
    choicesFx.moveButtonsDown();
    choicesUI.buttonInit();
    choicesFx.choicesInit();

    updateEverything();
}

function updateEverything() {
    console.log("update everythin!")
    moneyBox.counterupdater();
    moneySidebar.update();
    moneyBox.boxDisplay();
    barsFrontEnd.updateBars();
    overlayThings.display();
}


function moveThingsAlong(d) {
    let temp = './images/newspapers/' + gameVariables.index + 'choice' + d + '.png';
    console.log(temp);
    overlayThings.changeImage(temp, true);

    let delta = 'delta' + d;
    let deltaP= 'delta' + d + 'p';
    console.log(situations[gameVariables.index][delta]);
    stats.updateStats(situations[gameVariables.index][delta]);
    stats.updatePreamble(situations[gameVariables.index][deltaP]);

    updateEverything();
}

function nextScenario() {
    //add code here to check for after scenario 6 and 12
    if (gameVariables.index < 11) {
        gameVariables.index++;
    } else {
        //export thing to memory
        stats.exportPreamble();

        //go to preamble page
        window.location.href = './preamble.html';
    }

    situationFrontEnd.updateSituation(situations[gameVariables.index]);
}

initEverything();
// situationFrontEnd.updateSituation(situations[4]);


// document.querySelector("#u890_text").children[0].textContent = "";

// 18px (295) 313px 608

// 277