var dataBase;
var bird;
var mic;
var pipes=[];
var frame=0;
var speed=5;
var score=0;
var clapping=false;
var sliderTop;
var sliderBottom;

function setup(){
	createCanvas(800,600);
	mic=new p5.AudioIn();
	mic.start();
	sliderTop=createSlider(0,1,0.3,0.01);
	sliderBottom=createSlider(0,1,0.1,0.01);
	bird=new Bird();
	pipes[0]=new Pipe();
}

function draw(){
	background(0);
	var vol=mic.getLevel();
	select("#score").html("SCORE : "+score);

	bird.show();
	bird.update();

	noStroke();
	fill(0,255,0);
	var y=map(vol,0,1,height,0);
	rect(width-50,y,50,height-y);

	var thT=sliderTop.value();
	var thB=sliderBottom.value();
	var ty=map(thT,0,1,height,0);
	stroke(255,0,0);
	strokeWeight(4);
	line(width-50,ty,width,ty);

	if(vol>thT && !clapping){
		bird.up();
		clapping=true;
	}
	if (vol<thB){
		clapping=false;
	}

	if(frameCount%50===0){
		frame+=1;
		pipes[frame]=new Pipe();
		score+=5;
	}

	for(let i=pipes.length;i>=0;i--){
		if(pipes[i]==null){
			continue;
		}
		pipes[i].show();
		pipes[i].update();

		

		if(pipes[i].hits(bird)){
			score=0;
		}

		if(pipes[i].offScreen()){
			pipes.splice(i,1);
		}
	}
}

function keyPressed(){
	if(key==' '){
		bird.up();
	}
}