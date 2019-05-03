import React, { Component } from 'react'
import './Maps.css'
import GoogleMapReact from 'google-map-react';

const MapsView = ({ text }) => (
    <div style={{
        position: 'relative', color: 'white', background: 'red',
        height: 40, width: 60, top: -20, left: -30, textAlign: 'center', paddingTop: '5px'
    }}>
        {text}
    </div>
);

class Maps extends Component {

    static defaultProps = {
        center: {lat: 16.5717, lng: 81.5350},
        zoom: 11
    };

    render () {
        return (
            <div className="container">
                <p>Google Map view of a location. Play around with the coordinates to get a different view</p>
                <div className="map-container">
                    <GoogleMapReact
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <MapsView
                            lat={16.5717}
                            lng={81.5350}
                            text={'Home'}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}

export default Maps