export class Input{
  constructor(canvas){
    this.mouse= new Mouse(canvas);
    this.key = new Key();
  }
}

class Mouse{
  constructor(canvas){
    this.pos = {x:0, y:0};
    this.isDown = false;
    canvas.addEventListener("mousemove",(e)=>{
      const rect = canvas.getBoundingClientRect();
      this.pos.x = e.clientX - rect.left;
      this.pox.y = e.clientX - rect.top;
    });

    window.addEventListener("mousedown",()=>{this.isDown = true;});
    window.addEventListener("mouseup",()=>{this.isDown = false});
  }
}

class Key{
  constructor(){
    this.key = [];

    window.addEventListener("keydown",(e)=>{
      this.key[e.key] = true;
    });
    window.addEventListener("keyup",(e)=>{
      this.key[e.key] = false;
    })
  }

  isDown(k){
    return this.key[k];
  }
}
