import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';

let a = document.getElementById('ts').getAttribute('value1');
console.log(`a.value`, a);

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: olProj.fromLonLat([-61.1281163,1.813445]),
    zoom: 20
  })
});
