export class SceneManager {
  constructor() {
    this.current = null;
  }

  change(scene) {
    if (this.current) this.current.exit();
    this.current = scene;
    this.current.enter();
  }

  update(delta) {
    this.current?.update(delta);
  }

  draw(ctx) {
    this.current?.draw(ctx);
  }
}
