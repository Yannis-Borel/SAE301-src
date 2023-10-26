<script setup>
import { onMounted, ref} from 'vue'
import * as Leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'

let tileLayer = Leaflet.tileLayer
let map = ref()

let coordMe = ref ({
    latitude : 0,
    longitude : 0
})

onMounted ( async ()=> {
    tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
);

map = Leaflet.map('map',
{
    zoomControl: true,
    layers: [tileLayer],
    maxZoom: 18,
    minZoom: 6
})

.setView([47.495328, 6.8044455], 17);

let myIco = Leaflet.icon({
    iconUrl: 'images/marker-icon.png',
    shadowUrl: 'images/marker-shadow.png',
    iconSize: [25, 41],
    shadowSize: [25,41],
    iconAnchor: [-10, -10],
    shadowAnchor: [-10, -10],
    popupAnchor: [0,0]
})

let marker = Leaflet.marker([47.495328, 6.8044455], {icon: myIco}).addTo(map);

marker.bindPopup('Ma position')

setTimeout(
    function() {
        map.panTo([47.50133850064826, 6.807621746718467])
    }, 5000
)

let marker2 = Leaflet.marker([47.50133850064826, 6.807621746718467], {icon: myIco}).addTo(map);

marker2.bindPopup('TaVue est ici')

const locMe = () => {
    navigator.geolocation.getCurrentPosition(shadowLocation)
}

const showLocation = (position) => {
console.log("position", position)

    coordMe.value.latitude = position.coords.latitude
    coordMe.value.longitude = position.coords.longitude
    map.panTo([coordMe.value.latitude, coordMe.value.longitude])    
    let markerMe = Leaflet.marker([coordMe.value.latitude, coordMe.value.longitude]).addTo(map)
    markerMe.bindPopup("l'université est ici !")
}

})
</script>
<template>
    <div class="bg-gray-200">
    <h1 class="mt-[50px] text-center font-bold font-Montserrat text-[30px]">Localisation de TaVue</h1>
    <div class="underline bg-black w-1/2 h-1 mx-auto mt-2.5"></div>
    <div class="container-fluid" style="color: black;">
        <br>
        <br>
        <br>
        <h1 style="text-align: center;"></h1>
        <br><br>
        <h2></h2>
        <div class="input-group">
            <button class="btn btn-success form-control">coordonnées : latitude</button>
            <button class="btn btn-dark form-control">{{ coordMe.latitude }}</button>
            <button class="btn btn-success form-control">coordonnées : longitude</button>
            <button class="btn btn-dark form-control">{{ coordMe.longitude }}</button>
            <button class="btn btn-primary form-control" @click="lockMe()">Se localiser</button>
        </div>
        <br><br><br>
      <div class="container-fluid">
            <div id="map">
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
    #map {
        align-items: center;
        width:80%;
        height:70vh;
    }
</style>