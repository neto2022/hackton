import './../css/style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';

let a = document.getElementById('ts').getAttribute('value1');
let b = document.getElementById('ts').getAttribute('value2');

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: olProj.fromLonLat([a, b]),
    zoom: 20
  })
});

// Obtenha o elemento pelo ID
let elemento = document.getElementById('myDIV');

// Adicione um ouvinte de eventos ao elemento
elemento.addEventListener('click', function () {
  let content = document.getElementById("content");
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
});


function myFunction() {

}
