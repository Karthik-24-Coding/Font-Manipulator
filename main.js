nose_x=0;
nose_y=0;
left_wrist=0;
right_wrist=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);
}

function modelloaded(){
    console.log("Posenet is Initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose x = "+ nose_x+"nose y = "+nose_y);

        left_wrist= results[0].pose.leftWrist.x;
        right_wrist=results[0].pose.rightWrist.x;
        difference=floor(left_wrist-right_wrist);
        console.log("left wrist x= "+ left_wrist+"right wrist x= "+ right_wrist+"difference ="+difference)
    }
}

function draw(){
    document.getElementById("square_side").innerHTML="width and height of a square will be "+difference+"px";
    background("red");
    fill("#40e3e6");
    stroke("#40e3e6");
    square(nose_x,nose_y,difference);
}