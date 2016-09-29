export default class SkyBox {

  constructor(/*container*/) {

    this.element = document.body;
    this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.set(0, 10, 30);
    this.scene = new THREE.Scene();
    this.light = new THREE.DirectionalLight(0xaaaae5, 2);
    this.light.position.set(15, 16, -50);
    this.scene.add(this.light);

    this.loadSkyBox();

    this.renderer = new THREE.WebGLRenderer({
      antialias: true
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.element.appendChild(this.renderer.domElement);

    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target = new THREE.Vector3(0,0,0);
  }

  createSide(path) {
    let texture = THREE.ImageUtils.loadTexture(path),
      material = new THREE.MeshBasicMaterial({
        map: texture,
        overdraw: 0.5
      });

    return material;
  }

  loadSkyBox() {
    let materials = [
      this.createSide('../media/right.png'),
      this.createSide('../media/left.png'),
      this.createSide('../media/top.png'),
      this.createSide('../media/bottom.png'),
      this.createSide('../media/back.png'),
      this.createSide('../media/front.png')
    ];

    var mesh = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100, 1, 1 ,1), new THREE.MeshFaceMaterial(materials));
    mesh.scale.set(-1, 1, 1);
    this.scene.add(mesh);
  }

  animate() {
    if(this.controls != null) {
      this.controls.update;
    }

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate.bind(this));
  }
}
