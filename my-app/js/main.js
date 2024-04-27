import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import * as olProj from 'ol/proj';
import OSM from 'ol/source/OSM';
import './../css/style.css';

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
    center: olProj.fromLonLat([-61.2781724, 3.390454]),
    zoom: 15
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
    center: olProj.fromLonLat([-60.6878565, 2.838429]),
    zoom: 12
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
    center: olProj.fromLonLat([-61.1764325, -0.403568]),
    zoom: 12
  })
});

const map4 = new Map({
  target: 'map4',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: olProj.fromLonLat([-60.705668, 2.7303008]),
    zoom: 15
  })
});

// Pega o modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Pega a div que abre o modal
var div = document.getElementById("myDiv");
var div2 = document.getElementById("myDiv2");
var div3 = document.getElementById("myDiv3");

// Quando o usuário clica na div, abre o modal 
div.addEventListener('click', function () {
  modal.style.display = "block";
});

div2.addEventListener('click', function () {
  modal2.style.display = "block";
});

div3.addEventListener('click', function () {
  modal3.style.display = "block";
});

// Quando o usuário clica em qualquer lugar fora do modal, fecha ele
window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

window.addEventListener('click', function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
});

window.addEventListener('click', function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
});

