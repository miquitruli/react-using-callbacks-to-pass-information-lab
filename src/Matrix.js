import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js' //
import ColorSelector from './ColorSelector.js' //is the interface where users will be able to select a color

export default class Matrix extends Component {
  //initial state, white
  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  }

  //increment, this method is to change the default value
  //this method updates selectedColor with whatever is passed into it as an argument.
  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  //Cell, on the other hand, only needs to know the currently selected color, not change it. 
  //We can pass this in to every Cell returned by genRow() as a prop called selectedColor:
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}