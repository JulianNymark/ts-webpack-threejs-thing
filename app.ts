import * as three from 'three';

document.addEventListener('DOMContentLoaded', start);

const canvas = document.getElementById('thecanvas') as HTMLCanvasElement;

const scene = new three.Scene();
const renderer = new three.WebGLRenderer({ canvas, antialias: true });
renderer.setClearColor(0x00ff00);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const width = 20;
const height = 20;
const camera = new three.OrthographicCamera(width / - 2, width / 2, height / 2, height / - 2, 0.1, 1000);
scene.add(camera);

const box = new three.BoxGeometry(10, 10, 10);

renderer.render(scene, camera);

function start() {
    console.log('hi');

}
