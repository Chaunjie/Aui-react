/**
 * Created by xudao on 16/8/14.
 */
require('../Alert/alert.css');

import React from 'react';
import Button from '../Button/Button';

export default class Modal extends React.Component {
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
    const closebtn = props.btnClass ? React.createElement(
      'div',
      {className: props.btnClass, onClick: this.closeModal.bind(this)},
      props.btnContent ? props.btnContent : '确定'
    ) : <Button className="aui-btn-block aui-btn-danger" onClick={this.closeModal.bind(this)}>{props.btnContent ? props.btnContent : '确定'}</Button>;

    return React.createElement(
      'div',
      {className: 'overflow animated ' + this.state.overflowClass + ' '+ props.overflowClass},
      React.createElement(
        'div',
        {className: 'modal animated ' + this.state.animateClass},
        props.children,
        React.createElement(
          'div',
          {className: 'modal-content'},
          closebtn
        )
      )
    )

  }

  closeModal() {
    this.setState({
      overflowClass: 'fadeOut',
      animateClass: 'bounceOut'
    }, function () {
      setTimeout(function () {
        this.props.closeClick ? this.props.closeClick() : '';
      }.bind(this), 600)
    })

  }

}
