import React, { Component } from 'react';
import ColorDisplay from '../colors/ColorDisplay';

export default class RandomColor extends Component {
  state = {
    backgroundColor: 'black'
  };

  selectColor = () => {
    const colors = ['red', 'green', 'black', 'yellow', 'purple', 'grey', 'pink', 'brown', 'blue', 'lavender', 'thistle', 'magenta', 'darkorchid', 'indigo', 'mediumpurple', 'lightcoral', 'peachpuff', 'darkseagreen', 'seagreen', 'darkturquoise', 'darkcyan', 'steelblue', 'hotpink', 'mistyrose', 'maroon'];
    const random = Math.floor(Math.random() * colors.length);
    this.setState({ backgroundColor: colors[random] });
  };

  componentDidMount() {
    this.selectColor();
    setInterval(this.selectColor, 1000);
  }

  render() {
    const { backgroundColor } = this.state;
  
    return (
      <>
        <ColorDisplay backgroundColor={backgroundColor} />
      </>
    );
  }
}