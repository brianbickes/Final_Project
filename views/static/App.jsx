import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import Default from '../components/Default';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
render() {
const style = {
 width: '300px',
 height: '300px'
 }
return (
    <Default>
 <div className="App">
 Local Phoenix Area map for shelters and rescues
 <Map 
 google={this.props.google} 
 zoom={10}
 initialCenter={{
 lat: 33.425060,
 lng: -112.117980
 }}
 style={style}
 />
 </div>
 </Default>
 );
 }
}

export default GoogleApiWrapper({
 apiKey: ('AIzaSyBqENhJ1BJrKktKXGodyHnWQalD-wib9B0')
})(App);

module.exports = App; 