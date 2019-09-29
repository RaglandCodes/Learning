// https://youtu.be/8jP4xpga6yY
// Done by following this ^^ tutorial


let scene, camera, renderer, cube;

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  let geometry = new THREE.BoxGeometry(3, 3, 3);
  let material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  cube = new THREE.Mesh(geometry, material);

  scene.add(cube);
  camera.position.z = 5;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.05;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();