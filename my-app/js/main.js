import './../css/style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';

//let a = document.getElementById('content').getAttribute('value1');
//let b = document.getElementById('content').getAttribute('value2');

/*const map = new Map({
  target: 'map1',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: olProj.fromLonLat([a, b]),
    zoom: 20
  })
});*/

const map1 = new Map({
  target: 'map1',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: olProj.fromLonLat([-61.1281163, -61.1281163]),
    zoom: 20
  })
});

const map2 = new Map({
  target: 'map2',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: olProj.fromLonLat([-61.1281163, -61.1281163]),
    zoom: 20
  })
});
const map3 = new Map({
  target: 'map3',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: olProj.fromLonLat([-61.1281163, -61.1281163]),
    zoom: 20
  })
});

/*// Obtenha o elemento pelo ID
let elemento = document.getElementById('myDIV');

// Adicione um ouvinte de eventos ao elemento
elemento.addEventListener('click', function () {
  let content = document.getElementById("content");
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
});*/
