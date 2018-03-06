import $ from 'jquery';
import * as three from 'three';

document.addEventListener('DOMContentLoaded', start);

const canvas: HTMLCanvasElement = $('#thecanvas')[0] as HTMLCanvasElement;
const renderer = new three.WebGLRenderer({ canvas, antialias: true });
renderer.setClearColor(0x00ff00);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

function start() {
    console.log('hi');
}
