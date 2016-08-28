/**
 * Created by xudao on 16/8/28.
 */
require('./tabbar.css');
import React from 'react';

class TabBar extends React.Component {
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
    const activeClass = props.activeClass ? props.activeClass : 'active-warning';

    return React.createElement(
      'ul',
      {className: 'aui-bar-tab ' + className},
      props.items.map(function (r, i) {
        return React.createElement(
          'li',
          {
            key:'footerbar'+i,
            onClick: this.handleClick.bind(this, i),
            className: (this.state.activeIndex == i) ? activeClass : ''
          },
          r.children
        )
      }.bind(this))
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

export default TabBar;
