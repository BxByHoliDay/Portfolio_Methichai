window.onload = pageLoad;

function pageLoad() 
{
    document.getElementById("start").onclick = startGame;
}

function startGame() 
{
    clearScreen();
    addBox();
    timeStart();
}

function timeStart() 
{
    var TIMER_TICK = 1000;
    var timer = null;
    var second = 30;
    var x = document.getElementById('clock');
    x.innerHTML = second;

    timer = setInterval(timeCount, TIMER_TICK);

    function timeCount() 
    {
        var allbox = document.querySelectorAll("#layer div");
        second--;
        x.innerHTML = second;
        if (allbox.length === 0 && second > 0) {
            alert("You win!");
            clearInterval(timer);
            clearScreen();
        } else if (second <= 0) {
            if (allbox.length > 0) {
                alert("Game over");
                clearScreen();
            }
            clearInterval(timer);
        }
    }
}

function addBox()
{
    var numbox = parseInt(document.getElementById("numbox").value);
    var colorDrop = document.getElementById("color").value;
    var gameLayer = document.getElementById("layer");
    var boxSize = 50;
    var areaSize = 500;
    for (var i = 0; i < numbox; i++) 
        {
        var tempbox = document.createElement("div");
        tempbox.className = "square";
        tempbox.id = "box" + i;

        tempbox.style.left = Math.random() * (areaSize - boxSize) + "px";
        tempbox.style.top = Math.random() * (areaSize - boxSize) + "px";
        tempbox.style.backgroundColor = colorDrop;
        gameLayer.appendChild(tempbox);
        bindBox(tempbox);
    }
}

function bindBox(box) {
    box.onclick = function () {
        box.parentNode.removeChild(box);
    }
}

function clearScreen() {
    var gameLayer = document.getElementById("layer");
    var allbox = document.querySelectorAll("#layer div");
    for (var i = 0; i < allbox.length; i++) {
        gameLayer.removeChild(allbox[i]);
    }
}