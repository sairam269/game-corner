function Pipe(){
	var spacing=random(50,height/2);
	var centery=random(spacing,height-spacing);
	this.top=centery-spacing/2;
	this.bottom=height-(centery+spacing/2);
	this.x=width;
	this.w=30;

	this.highLight=false;

	this.show=function(){
		noStroke();
		fill(100,255,0);
		if(this.highLight){
			fill(255,0,0);
		}
		rect(this.x,0,this.w,this.top);
		rect(this.x,height-this.bottom,this.w,this.bottom);
	}

	this.update=function(){
		this.x-=speed;
	}



	this.hits=function(bird){
		if(bird.y<this.top || bird.y>height-this.bottom){
			if(bird.x>this.x && bird.x<this.x+this.w){
				this.highLight=true;
				return true;
			}
		}
		this.highLight=false;
		return false;
	}

	this.offScreen=function(){
		if(this.x<-this.w){
			return true;
		}else{
			return false;
		}
	}
}