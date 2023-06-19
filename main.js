difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video = createCapture(VIDEO)
    video.size(550, 500);
    
    canvas = createCanvas(550, 500);
    canvas.position(560,150)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('Im working btw if u didnt notice シシシシシ')
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log('leftWristX = '+leftWristX+' rightWristX = '+rightWristX+' difference = '+difference);
    }
}

function draw(){
    background('#35b3cc')
    document.getElementById('font_size').innerHTML = 'font size of text shall be----->>' + difference + 'px';
    textSize(difference);
    fill('#fa3e00')
    text('Zac',50,400)
}