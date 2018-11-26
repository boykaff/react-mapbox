import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import '../assets/style/map.css';

class Map extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYm95a2FmZiIsImEiOiJjam9yOWs4cWwwY2QxM3FrZmgybnFnYXQzIn0.r1CLy5Rn6s0UdsaRB0saTQ';

        //设置地图区域
        let bounds = [
            [118.21, 28.11], // Southwest coordinates，西南坐标
            [122.40, 31.33]  // Northeast coordinates，东北坐标
        ];

        new mapboxgl.Map({
            style: 'mapbox://styles/boykaff/cjovo1sag33052smcriq367q5',
            center: [120.15, 30.3],
            zoom: 11.5,
            minZoom: 9,
            maxZoom: 19,
            pitch: 45,
            bearing: -17.6,
            container: 'map',
            maxBounds: bounds
        });
    }

    render() {
        return (
            <div id="map" className="map">
            </div>
        );
    }
}

export default Map;