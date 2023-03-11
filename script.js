let score = {};

function OpeningCeremony(score, callbackFnc){
    setTimeout(() => {
        console.log("Let the games begin");
        score = {red:0, blue:0, green:0, yellow:0};
        Race100M(score, callbackFnc);
    }, 1000);
}

function Race100M(score, callbackFnc){
    setTimeout(() => {
        console.log("Score");
        console.log();

        const time = {
            red: Math.floor(Math.random() * 6) + 10, // 10
            blue:  Math.floor(Math.random() * 6) + 10, // 15
            green:  Math.floor(Math.random() * 6) + 10, // 12
            yellow:  Math.floor(Math.random() * 6) + 10 // 11
        };
        const sortedArr = Object.keys(time).sort((a, b) => time[a] - time[b]);
        // sortedArr = [blue, green, yellow, red];

        let newObj = {};
        newObj[sortedArr[0]] = 50;
        newObj[sortedArr[1]] = 25;
        
        console.log("Winner of 100M race is " + sortedArr[0]);

        score[sortedArr[0]] += 50;
        score[sortedArr[1]] += 25;

        console.log("Updated Score");
        console.log(score);

        callbackFnc(score, HighJump);
    }, 3000); 
}

function LongJump(score, callbackFnc){
    setTimeout(() => {
        console.log("Prev Score");
        console.log(score);

        const i = Math.floor(Math.random() * 4) + 1; // return 1 to 4
        if(i == 1){
            let val = score.red;
            val += 150;
            score.red = val;
            console.log("Winner of LongJump is " + "red");
        } else if(i == 2){
            let val = score.yellow;
            val += 150;
            score.yellow = val;
            console.log("Winner of LongJump is " + "yellow");
        } else if(i == 3){
            let val = score.green;
            val += 150;
            score.green = val;
            console.log("Winner of LongJump is " + "green");
        } else if(i == 4){
            let val = score.blue;
            val += 150;
            score.blue = val;
            console.log("Winner of LongJump is " + "blue");
        }

        console.log("Updated Score");
        console.log(score);

        callbackFnc(score, AwardCeremony);
    }, 2000);
}

function HighJump(score, callbackFnc){
    console.log("Prev Score");
    console.log(score);

    let color = prompt("Please enter the Colour");

    if (color == null || color == "" || (!(color === "red") && !(color === "green") && !(color === "blue") && !(color === "yellow"))) {
        console.log("Event Was cancelled");
        AwardCeremony(score);
    } else {
        if(color == "red"){
            score.red += 100;
            console.log("Winner of HighJump is red");
        } else if(color == "blue"){
            score.blue += 100;
            console.log("Winner of HighJump is blue");
        } else if(color == "green"){
            score.green += 100;
            console.log("Winner of HighJump is green");
        } else if(color == "yellow"){
            score.yellow += 100;
            console.log("Winner of HighJump is yellow");
        }

        console.log("Updated Score");
        console.log(score);

        callbackFnc(score);
    }
}

function AwardCeremony(score){
    
    let sortedArr = Object.keys(score).sort((a, b) => score[a] - score[b]);
    // red yellow green blue
    
    let n = sortedArr.length;
    
    console.log(`${sortedArr[n-1]} Came First with ${score[sortedArr[n-1]]} points`);
    console.log(`${sortedArr[n-2]} Came Second with ${score[sortedArr[n-2]]} points`);
    console.log(`${sortedArr[n-3]} Came Third with ${score[sortedArr[n-3]]} points`);
}

// Ceremony Start From here
OpeningCeremony(score, LongJump);