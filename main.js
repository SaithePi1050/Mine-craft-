var canvas = new fabric.Canvas("mycanvas");
var px = 10;
var py = 10;
var height = 30;
var widht = 30;
var playerimage = "";
var blockimage = "";

function clear_update() 
{
    fabric.Image.fromURL("player.png", function(Img)
    {
        playerimage = Img;
        playerimage.scaleToWidth(150);
        playerimage.scaleToHeight(150);
        playerimage.set({
            top: py, 
            left: px
        });
        canvas.add(playerimage); 
    });
}

function block_update(getimage) 
{
    fabric.Image.fromURL(getimage, function(Img)
    {
        blockimage = Img;
        blockimage.scaleToWidth(widht);
        blockimage.scaleToHeight(height);
        blockimage.set({
            top: py, 
            left: px
        });
        canvas.add(blockimage); 
    });
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e)   
{
    var keypress = e.keyCode;
    console.log(keypress);
    if (e.shiftKey == true && keypress == "80") 
    {
        height = height + 10;
        widht = widht + 10;
        document.getElementById("current-width").innerHTML = widht;
        document.getElementById("current-height").innerHTML = height;
    }
    if (e.shiftKey == true && keypress == "77") 
    {
        height = height - 10;
        widht = widht - 10;
        document.getElementById("current-width").innerHTML = widht;
        document.getElementById("current-height").innerHTML = height;
    }
    if (keypress == "87") 
    {
        block_update("wall.jpg");
    }
    if (keypress == "67") 
    {
        block_update("cloud.jpg");
    }
    if (keypress == "68") 
    {
        block_update("dark_green.png");
    }
    if (keypress == "71") 
    {
        block_update("ground.png");
    }
    if (keypress == "76") 
    {
        block_update("light_green.png");
    }
    if (keypress == "82") 
    {
        block_update("roof.jpg");
    }
    if (keypress == "84") 
    {
        block_update("trunk.jpg");
    }
    if (keypress == "85") 
    {
        block_update("unique.png");
    }
    if (keypress == "89") 
    {
        block_update("yellow_wall.png");
    }
}