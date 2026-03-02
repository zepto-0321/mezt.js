/*
Scene基底クラスです
scensディレクトリにあるすべてのシーンのクラスはこのクラスを継承してください
*/ 

export class Scene {
  constructor(gameContext) {
    this.gameContext = gameContext;
  }

  enter() {}
  update(delta) {}
  draw(ctx) {}
  exit() {}
}
