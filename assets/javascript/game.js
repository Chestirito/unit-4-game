$(function() {
    /*var g1;
    var g2;
    var g3;
    var g4;*/
    var nums = [];
    var scoreGol;
    var currScor;
    var wins = 0;
    var losses = 0;

    function diffGemNumGen(){
        while(nums.length<4){
            var compNum = Math.floor((Math.random() * 12) + 1);
            if(!nums.includes(compNum)){
                nums.push(compNum);
            }
        }
    }
    function scoreGolGen(){
        return Math.floor((Math.random() * 100) + 20);
    }
    /*function tagsNumAssign(n1){
        $("#gem1").data("hSscore", n1);
    }*/
    function setGoalTag(){
        $("#totals").text(scoreGol);
    }
    function setCurrScorTag(){
        $("#score").text(currScor);
    }
    function startGame(){
        /*g1 = diffGemNumGen();
        g2 = diffGemNumGen();
        g3 = diffGemNumGen();
        g4 = diffGemNumGen();*/
        nums.length = 0;
        diffGemNumGen();
        console.log( nums.toString());
        currScor = 0;
        scoreGol = scoreGolGen();
        setGoalTag();
        setCurrScorTag();
    }
    
    $(".gems").click(function(gemTarget){
        var gemId = gemTarget.target.id;
        if(gemId === "gem1"){
            currScor += nums[0];
            setCurrScorTag(currScor);
            checkWin();
        }
        else if(gemId === "gem2"){
            currScor += nums[1];
            setCurrScorTag(currScor);
            checkWin();
        }
        else if(gemId === "gem3"){
            currScor += nums[2];
            setCurrScorTag(currScor);
            checkWin();
        }
        else if(gemId === "gem4"){
            currScor += nums[3];
            setCurrScorTag(currScor);
            checkWin();
        }
    });

    function checkWin(){
        if(currScor === scoreGol){
            wins += 1;
            //console.log(wins);
            $("#wins").text(wins);
            $("#message").text("You Win!");
            $("#message").css("visibility","visible");
            startGame();
        }
        else if(currScor > scoreGol){
            losses += 1;
            //console.log(losses);
            $("#loses").text(losses);
            $("#message").text("You Lose!");
            $("#message").css("visibility","visible");
            startGame();
        }

    }

    startGame();
    $("#message").css("visibility","hidden");
});