/**
 * Created by xudao on 16/8/14.
 */

import React from 'react';

class Block extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  componentDidMount() {

  }

  render() {
    const props = this.props;
    const className = props.className ? props.className : '';

    return React.createElement(
      'div',
      {className: className, onClick: this.handleClick.bind(this)},
      this.props.children
    )
  }

  handleClick() {
    this.props.onClick ? this.props.onClick() : '';
  }


}

module.exports = Block;
