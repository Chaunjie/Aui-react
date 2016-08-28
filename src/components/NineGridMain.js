require('normalize.css/normalize.css');

import React from 'react';
import {Link} from 'react-router';
import Container from './components/Container/Container';
import NineGrid from './components/NineGrid/NineGrid';
import Block from './components/Block/Block';

class NineGridMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const options = [
      {
        className: 'aui-text-center',
        onClick: this.handleClick.bind(this),
        children: <Block> <span className="aui-iconfont aui-icon-edit aui-text-primary"></span><p>栏目</p></Block>
      },
      {
        className: 'aui-text-center',
        onClick: this.handleClick.bind(this),
        children: <Block><span className="aui-iconfont aui-icon-emoji aui-text-danger"></span><p>栏目</p></Block>
      },
      {
        className: 'aui-text-center',
        onClick: this.handleClick.bind(this),
        children: <Block> <span className="aui-iconfont aui-icon-favor aui-text-warning"></span><p>栏目</p></Block>
      },
      {
        className: 'aui-text-center',
        onClick: this.handleClick.bind(this),
        children: <Block><span className="aui-iconfont aui-icon-phone aui-text-pink"></span><p>栏目</p></Block>
      },
      {
        className: 'aui-text-center',
        onClick: this.handleClick.bind(this),
        children: <Block> <span className="aui-iconfont aui-icon-taxi aui-text-dark"></span><p>栏目</p></Block>
      },
      {
        className: 'aui-text-center',
        onClick: this.handleClick.bind(this),
        children: <Block><span className="aui-iconfont aui-icon-camera aui-text-info"></span><p>栏目</p></Block>
      },
      {
        className: 'aui-text-center',
        onClick: this.handleClick.bind(this),
        children: <Block><span className="aui-iconfont aui-icon-like aui-text-blue"></span><p>栏目</p></Block>
      },
      {
        className: 'aui-text-center',
        onClick: this.handleClick.bind(this),
        children: <Block><span className="aui-iconfont aui-icon-deliver aui-text-danger"></span><p>栏目</p></Block>
      },
      {
        className: 'aui-text-center',
        onClick: this.handleClick.bind(this),
        children: <Block><span className="aui-iconfont aui-icon-evaluate aui-text-danger"></span><p>栏目</p></Block>
      }
    ];
    return (
      <Block>
        <NineGrid items={options}/>
      </Block>
    );
  }

  handleClick(i) {
    alert(i);
  }
}

export default NineGridMain;
