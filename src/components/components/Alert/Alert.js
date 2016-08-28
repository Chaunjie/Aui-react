/**
 * Created by xudao on 16/8/14.
 */

import React from 'react';
require('./alert.css');

export default class Alert extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overflowClass: 'fadeIn',
      animateClass: props.animateClass ? props.animateClass : 'bounceIn'
    };

  }

  componentDidMount() {

  }

  render() {
    const props = this.props;

    return React.createElement(
      'div',
      {className: 'overflow animated ' + this.state.overflowClass},
      React.createElement(
        'div',
        {className: 'alert-box animated ' + this.state.animateClass},
        React.createElement(
          'div',
          {className: 'alert-box-header'},
          props.title
        ),
        React.createElement(
          'div',
          {className: 'alert-box-body'},
          props.content
        ),
        React.createElement(
          'div',
          {className: 'alert-box-footer'},
          props.btns.map(function (r, i) {
            const key = 'alertBtn' + i;
            return React.createElement(
              'div',
              {className: 'aui-box-btn', key: key, style: {color: r.color}, onClick: this.handleClick.bind(this, i)},
              r.text
            )
          }.bind(this))
        )
      )
    )

  }

  handleClick(i) {
    this.setState({
      overflowClass: 'fadeOut',
      animateClass: 'bounceOut'
    }, function () {
      setTimeout(function () {
        this.props.closeClick ? this.props.closeClick(i) : '';
      }.bind(this), 600)
    })

  }

}
