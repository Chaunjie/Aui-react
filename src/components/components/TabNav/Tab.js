/**
 * Created by xudao on 16/8/28.
 */
require('./tab.css');
import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }

  componentDidMount(){
    if(this.props.activeIndex){
      this.setState({
        activeIndex: this.props.activeIndex
      });
    }
  }

  render() {
    const props = this.props;
    const className = props.className ? props.className : '';
    const borderClass = props.borderClass ? props.borderClass : '';

    return React.createElement(
      'div',
      {className:'aui-tab '+className},
      React.createElement(
        'ul',
        {className: 'aui-tab-nav ' + borderClass},
        props.items.map(function (r, i) {
          return React.createElement(
            'li',
            {
              key:'tabbar'+i,
              onClick: this.handleClick.bind(this, i),
              className: (this.state.activeIndex == i) ? 'active' : ''
            },
            r.children
          )
        }.bind(this))
      )

    )
  }

  handleClick(i) {
    this.setState({
      activeIndex: i
    }, function(){
      this.props.tabChange ? this.props.tabChange(i) : '';
    });
  }
}

export default Tab;
