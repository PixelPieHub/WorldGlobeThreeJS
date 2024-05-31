import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// creating a sphere using Sphere geometry in Three.js

//scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x262626);

//camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 3;

//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

//sphere
const geometry = new THREE.SphereGeometry(1,36,36);
const material = new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader().load('worldTexture.png')} );
const sphere = new THREE.Mesh( geometry, material );
sphere.castShadow = true; //default is false
sphere.receiveShadow = false; //default
scene.add( sphere );

//orbitcontrols
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0,0,0);
controls.autoRotate = true;
controls.autoRotateSpeed = 1;
controls.enableDamping = true;

//animation
function animate() {

    controls.update();

	renderer.render( scene, camera );

}