
function today_date(){
    const month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var today = new Date();
    var dd = today.getDate();
    console.log(dd);
    var mm = month_names[today.getMonth()]
    var yyyy = today.getFullYear();

    const st = [1, 21, 31];
    const nd = [2, 22];
    const rd = [3, 23];
   
    if(st.includes(dd)){
        today = dd + 'st of ' + mm + ' ' + yyyy;
    } else if(nd.includes(dd)){
        today = dd + 'nd of '  + mm + ' ' + yyyy;
    }else if(rd.includes(dd)){
        today = dd + 'rd of ' + mm + ' ' + yyyy;
    }else{
        today = dd + 'th of ' + mm + ' ' + yyyy;
    }
    return today;
}

let playerNames;
function getNames(){
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
    console.log(this.playerNames);
}

let conditions_array = [];
function getPreamble(){
    try {
        conditions_array = JSON.parse(sessionStorage.preamble);
        console.log(conditions_array);  
    } catch (e) {
        conditions_array = [true, true, true, true, true, true, true, true, true, true, true, true, true, true];
        console.log(e); 
    }
}

let array = [
    ["We,", true, "regular"],
    ["Player 1, Player 2, Player 3, Player 4", true, "bold"],
    ["having solemnly resolved to constitute India into a", true, "regular"],
    ["SOVERIEGN", true, "regular"],
    ["SOCIALIST", true, "bold"],
    ["SECULAR", true, "bold"],
    ["DEMOCRATIC\n", true, "bold"],
    ["REPUBLIC", true, "regular"],
    ["", true, "break"],
    ["and to secure to all its citizens:", true, "regular"],
    ["", true, "break"],
    ["JUSTICE,", true, "regular"],
    ["social,", true, "bold"],
    ["economic,", true, "bold"],
    ["political;", true, "bold"],
    ["", true, "break"],
    ["LIBERTY of", true, "regular"],
    ["thought,", true, "bold"],
    ["expression,", true, "bold"],
    ["belief,", true, "bold"],
    ["faith,", true, "bold"],
    ["worship;\n", true, "bold"],
    ["", true, "break"],
    ["EQUALITY", true, "regular"],
    ["of", true, "regular"],
    ["status,", true, "bold"],
    ["opportunity;", true, "bold"],
    ["and to promote among all", true, "regular"],
    ["", true, "break"],
    ["FRATERNITY assuring the dignity of the individual,", true, "bold"],
    ["the unity and integrity of the Nation; \nIN OUR CONSTITUENT ASSEMBLY this", true, "regular"],
    ["today's date", true, "bold"],
    ["do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.", true, "regular"],
];

getNames();
getPreamble();
let names_array = [playerNames.A, playerNames.B,playerNames.C, playerNames.D, ];
let container = document.createElement('div');
container.style.transition='transform 5s';
container.style.transform = 'scale(10%)';

function preamble(elements){
    let wrapper = document.getElementById("u1057");
    
    container.setAttribute('id', 'preambleContainer');
    for (let i = 0; i < elements.length; i++) {
        if (elements[i][1] == true) {
            if (elements[i][2] == "regular") {
                let node = document.createElement("span");
                let node_text = document.createTextNode(elements[i][0]);
                node.setAttribute('id', 'preambleTextRegular');
                node.appendChild(node_text);
                container.appendChild(node);
                wrapper.appendChild(container);
            } else if (elements[i][2] == "bold") {
                let node = document.createElement("span");
                let node_text = document.createTextNode(elements[i][0]);
                node.setAttribute('id', 'preambleTextBold');
                node.appendChild(node_text);
                container.appendChild(node);
                wrapper.appendChild(container);
            } else if (elements[i][2] == "break") {
                let node = document.createElement("br");
                container.appendChild(node)
                wrapper.appendChild(container);
            }
        } else if (elements[i][1] == false) {
            if (elements[i][2] == "regular") {
                let node = document.createElement("span");
                let node_text = document.createTextNode(elements[i][0]);
                node.setAttribute('id', 'preambleTextDeleted');
                node.appendChild(node_text);
                container.appendChild(node);
                wrapper.appendChild(container);
            } else if (elements[i][2] == "bold") {
                let node = document.createElement("span")
                let node_text = document.createTextNode(elements[i][0]);
                node.setAttribute('id', 'preambleTextDeleted');
                node.appendChild(node_text);
                container.appendChild(node);
                wrapper.appendChild(container);
            }
        }
    }
}

function update_array(conditions, names){
    console.log(conditions);
    console.log(names);
    array[1][0] = names[0] + ", " + names[1] + ", " + names[2] + ", " + names[3]
    array[31][0] = today_date();
    const pos = [4, 5, 6, 12, 13, 14, 17, 18, 19, 20, 21, 25, 26, 29];
    for(let i = 0; i < pos.length; i++){
        let array_pos = pos[i];
        let value = conditions[i];
        array[array_pos][1] = value;
    }
    preamble(array);
}

// console.log(conditions_array);
// console.log(names_array);
// update_array(conditions_array, names_array);