status="";
objects=[];

function setup()
{
    canvas=createCanvas(640,440);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
      
}

function modelLoaded()
{
console.log("coco-SSD hass loadeddrrr");
status=true;
}
function gotResult(error,results)
{
if(error ){
console.log(error);
}
else{
console.log(results);
objects=results;
}



}
function draw()
{
image(video,0,0,650,450);
if(status!="")
{r=random(255);
    g=random(255);
    b=random(255);
    
    objectDetector.detect(video,gotResult);
for(i=0;i<objects.length;i++)
{


document.getElementById("status").innerHTML="status:objectos detecteduo";

stroke(r,g,b);
noFill();
percent=floor(objects[i].confidence* 100);
text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
stroke(r,g,b);
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
if(objects[i].label==objectName)
{
video.stop();
objectDetector.detect(gotResult);
document.getElementById("xdnameST").innerHTML=objectName+"found";
synth=window.speechSynthesis; 
utterThis=new SpeechSynthesisUtterance(objectName+" found" );
synth.speak(utterThis);
}
else
{
    document.getElementById("xdnameST").innerHTML=objectName+"nots found";
}
}
}
}
function start()
{
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status:Detecting objects";
    objectName=document.getElementById("zenophyx").value;
}