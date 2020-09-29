import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

class App extends Component {
render() {
const style = {
 width: '300px',
 height: '300px'
 }
return (
 <div className="App">
 Hello World
 <Map 
 google={this.props.google} 
 zoom={10}
 initialCenter={{
 lat: 35.5496939,
 lng: -120.7060049
 }}
 style={style}
 />
 </div>
 );
 }
}
export default GoogleApiWrapper({
 apiKey: ('AIzaSyBqENhJ1BJrKktKXGodyHnWQalD-wib9B0')
})(App);

module.exports = App; 