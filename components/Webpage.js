const React = require('react')
const FillerText = require('./FillerText')

class Webpage extends React.Component {
  render(){
    return(
      <h1>The world's coolest webpage.</h1>
      <FillerText />
      <FillerText />
    )
  }
}

module.exports = Webpage
