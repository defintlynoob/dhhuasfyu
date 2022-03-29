var objects =[];
var status ="";
function preload() {
    video= createVideo('video.mp4');
}
function setup() {
    canvas= createCanvas(500, 400);
    canvas.center();
    video.hide();
}
function start() {
    od=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById('hjkl').innerHTML='it atacc video';
    console.log("yes");
}
function modelloaded() {
    console.log('it also yes');
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function draw() {
    image(video,0,0,500,400);
    if (status!="") {
        od.detect(video,g);
        for (let index = 0; index < objects.length; index++){
            document.getElementById('hjkl').innerHTML='it atacc video things:';
            document.getElementById('no').innerHTML='no. of objects detected'+objects.length;
            fill(0,255,0);
            percent=floor(objects[index].confidence*100);
            text(objects[index].label+percent+'%',objects[index].x,objects[index].y);
            noFill()
            stroke(255,0,0)
            rect(objects[index].x,objects[index].y,objects[index].width,objects[index].height);
        }
    }
}
function g(no, ans) {
    if (no) {
        console.log(no+'help');
    }else{
        console.log(ans);
        objects=ans;
    }
}