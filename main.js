
import * as maplibregl from "https://cdn.skypack.dev/maplibre-gl";

const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
    //style: 'https://demotiles.maplibre.org/style.json', // style URL
    style: './assets/style.json',
    center: [5.680337062453696, 51.966022790210062], // starting position [lng, lat]
    zoom: 1 // starting zoom
});

import { Protocol } from "https://esm.sh/pmtiles";
const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);