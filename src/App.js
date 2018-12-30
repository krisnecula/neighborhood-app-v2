import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Container from './components/Container';

class App extends Component {

//remember to let React access the google variable as a window object with window.google.maps
initMap() {
  let map = new window.google.maps.Map(document.getElementById("map"), {
    center: {lat: 40.7128, lng: 74.0060},
    zoom: 8
  });
}

//load the asynchronous script so that React will define the google map variable
//get script tags from our API's parentNode, the body of the page,
//and insert our script into the first position on the list with scriptsOnPage[0]
loadScript () {
  let scriptElem = this.createMapScript();
  let pageScripts = document.getElementsByTagName("script");
  let script = pageScripts[0];
  console.log(pageScripts);
  console.log(script.parentNode);
  script.parentNode.insertBefore(scriptElem, script);
  window.initMap = this.initMap;
}

//create the google maps script src with javascript: https://developers.google.com/maps/documentation/javascript/tutorial
createMapScript () {
  let mapScript = document.createElement("script");
  const API_KEY = "AIzaSyCniC4fK-9sawh8y4YRpH_IBWFMbfArEeo";
  mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
  mapScript.async = true;
  mapScript.defer = true;
  return mapScript;

}
  render() {
    this.loadScript();
    return (

    <div className="App">
      <Header />
      <Container />
    </div>
  )
  }
}

export default App;
