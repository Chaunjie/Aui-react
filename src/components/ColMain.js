require('normalize.css/normalize.css');
require('styles/common.css');

import React from 'react';
import {Link} from 'react-router';
import Container from './components/Container/Container';
import Block from './components/Block/Block';
import Col from './components/Col/Col';


class ButtonMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="button-container aui-content-padded common-col">
        <Block className="xudao"><Col col={1} className="col" onClick={this.handleClick.bind(this)}>一格</Col></Block>
        <Block><Col col={2} className="col">二格</Col></Block>
        <Block><Col col={3} className="col">三格</Col></Block>
        <Block><Col col={4} className="col">四格</Col></Block>
        <Block><Col col={5} className="col">五格</Col></Block>
        <Block><Col col={6} className="col">六格</Col></Block>
        <Block><Col col={7} className="col">七格</Col></Block>
        <Block><Col col={8} className="col">八格</Col></Block>
        <Block><Col col={9} className="col">九格</Col></Block>
        <Block><Col col={10} className="col">十格</Col></Block>
        <Block><Col col={11} className="col">十一格</Col></Block>
        <Block><Col col={12} className="col">十二格</Col></Block>
      </Container>
    );
  }

  handleClick() {
    alert(666);
  }
}

export default ButtonMain;
