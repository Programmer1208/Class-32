class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.img2 = loadImage("sprites/smoke.png");;
  
    this.trajectory= []; 
  //this.trajectory=[[x,y],[x1,y1],[x2,y2],[x3,y3]]
//this.trajectory[0][0]  

}


  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;


    super.display();
  
  if(this.body.velocity.x>10 && this.body.position.x >200)
  {
    var position= [this.body.position.x, this.body.position.y];
    this.trajectory.push(position);
  }
//console.log(this.body);
    
    for(var i=0;i<this.trajectory.length;i++)
{
    image(this.img2,this.trajectory[i][0],this.trajectory[i][1]);

}  
  
  }
}
