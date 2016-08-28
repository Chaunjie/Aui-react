require('normalize.css/normalize.css');

import React from 'react';
import Block from './components/Block/Block';
import TabBar from './components/TabBar/TabBar';

class TabBarMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 1
    };
  }

  render() {
    const items = [
      {
        children:<Block><span className="aui-iconfont aui-icon-favor"></span><p>栏目1</p></Block>
      },
      {
        children:<Block><span className="aui-iconfont aui-icon-mark"></span><p>栏目2</p></Block>
      },
      {
        children:<Block><span className="aui-iconfont aui-icon-like"></span><p>栏目3</p></Block>
      },
      {
        children:<Block><span className="aui-iconfont aui-icon-my"></span><p>栏目4</p></Block>
      }
    ];
    return (
      <Block className="footerBar">
        <TabBar items={items} activeClass="active-success" activeIndex={2}/>
        <TabBar items={items} activeClass="active-warning" />
        <TabBar items={items} activeClass="active-danger" activeIndex={this.state.activeIndex} tabChange={this.handleClick.bind(this)}/>
        <Block className="tab-content">
          <div className='content' style={{display: (this.state.activeIndex == 0 ? 'block' : 'none')}}>0</div>
          <div className='content' style={{display: (this.state.activeIndex == 1 ? 'block' : 'none')}}>1</div>
          <div className='content' style={{display: (this.state.activeIndex == 2 ? 'block' : 'none')}}>2</div>
          <div className='content' style={{display: (this.state.activeIndex == 3 ? 'block' : 'none')}}>3</div>
        </Block>
      </Block>
    );
  }

  handleClick(i) {
    this.setState({
      activeIndex: i
    });
  }
}

export default TabBarMain;
