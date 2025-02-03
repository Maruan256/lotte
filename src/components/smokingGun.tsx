//@ts-nocheck

import * as THREE from "three";
import "./smokingGun.css";

var camera, scene, renderer, geometry, material, mesh, clock, background, cubeSineDriver, textGeo, smokeParticles, delta;

function init() {
  clock = new THREE.Clock();

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.z = 1000;
  scene.background = new THREE.Color("rgb(0, 0, 0)");
  scene, (background = null);
  scene.add(camera);

  geometry = new THREE.BoxGeometry(200, 200, 200);
  material = new THREE.MeshLambertMaterial({
    color: new THREE.Color("rgb(83, 84, 255)"),
    wireframe: false,
  });
  mesh = new THREE.Mesh(geometry, material);
  // // scene.add( mesh );
  cubeSineDriver = 0;

  textGeo = new THREE.PlaneGeometry(300, 300);
  THREE.ImageUtils.crossOrigin = ""; //Need this to pull in crossdomain images from AWS

  let light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(-1, 0, 1);
  scene.add(light);

  let smokeTexture = new THREE.TextureLoader().load(
    "src/assets/whitesmoke.png",
  );
  let smokeMaterial = new THREE.MeshLambertMaterial({
    color: new THREE.Color("rgb(255, 255, 255)"),
    map: smokeTexture,
    transparent: true,
  });
  let smokeGeo = new THREE.PlaneGeometry(300, 300);
  smokeParticles = [];

  for (let p = 0; p < 20; p++) {
    var particle = new THREE.Mesh(smokeGeo, smokeMaterial);
    particle.position.set(
      Math.random() * 500 - 250,
      Math.random() * 500 - 250,
      Math.random() * 1000 - 100
    );
    particle.rotation.z = Math.random() * 360;
    scene.add(particle);
    smokeParticles.push(particle);
  }

  document.body.appendChild(renderer.domElement);
}

function animate() {
  // note: three.js includes requestAnimationFrame shim
  delta = clock.getDelta();
  requestAnimationFrame(animate);
  evolveSmoke();
  render();
}

function evolveSmoke() {
  var sp = smokeParticles.length;
  while (sp--) {
    smokeParticles[sp].rotation.z += delta * 0.05;
  }
}

function render() {
  renderer.setClearColor(0xffffff, 0);
  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.01;
  cubeSineDriver += 0.01;
  mesh.position.z = 100 + Math.sin(cubeSineDriver) * 500;
  renderer.render(scene, camera);
}

export default function SmokingGun() {
  init();
  animate();

  return <div className="Smoke" />;
}
