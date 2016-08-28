/**
 * Created by xudao on 16/8/14.
 */
require('../Alert/alert.css');

import React from 'react';

export default class ActionSheet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overflowClass: 'fadeIn',
      animateClass: 'slideInUp'
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
        {className: 'actionSheet animated ' + this.state.animateClass},
        React.createElement(
          'div',
          {className: 'actionSheet-menus'},
          props.btns.map(function(r, i){
            const key = 'actionSheetBtn'+i
            return React.createElement(
              'div',
              {className:'actionSheet-btn sure-btn', style:{color:r.color}, key:key, onClick: this.handleClick.bind(this, i)},
              r.text
            )
          }.bind(this))
        ),
        React.createElement(
          'div',
          {className: 'actionSheet-cencel actionSheet-btn', style:{color:props.cancelBtn.color}, onClick: this.handleClick.bind(this, 'cancel')},
          (props.cancelBtn && props.cancelBtn.text) ? props.cancelBtn.text : '取消'
        )
      )
    )

  }

  handleClick(i) {
    this.setState({
      overflowClass: 'fadeOut',
      animateClass: 'slideOutDown'
    }, function () {
      setTimeout(function () {
        this.props.closeClick ? this.props.closeClick(i) : '';
      }.bind(this), 600)
    })

  }

}
