export class Game{
  constructor(canvas,sceneManager){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.sceneManager = sceneManager;
    this.lastTime =0;
  }

  start(initScene){
    this.sceneManager.change(initScene);
    requestAnimationFrame(this.loop.bind(this));
  }

  loop(time){
    //Delta-timing関連
    const delta = (time - this.lastTime)/1000;
    this.lastTime = time;

    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
    this.sceneManager.update(delta);
    this.sceneManager.draw(this.ctx);
    requestAnimationFrame(this.loop.bind(this));
  }
}

//Gameクラスから引っ張ると不要なものが出せてしまうので
//このクラスでGameの中を引っ張ってきてください
export class GameContext {
  constructor(input, ctx, sceneManager) {
    this.input = input;
    this.ctx = ctx;
    this.changeScene = sceneManager.change.bind(sceneManager);
  }
}
