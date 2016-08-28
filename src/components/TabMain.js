require('normalize.css/normalize.css');

import React from 'react';
import Block from './components/Block/Block';
import TabBar from './components/TabNav/Tab';

class TabMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 1
    };
  }

  render() {
    const items = [
      {
        children: '标签一'
      },
      {
        children: '标签二'
      },
      {
        children: '标签三'
      },
      {
        children: '标签四'
      }
    ];
    return (
      <Block className="tabBar">
        <p className="aui-text-center">默认颜色</p>
        <TabBar items={items}  activeIndex={this.state.activeIndex}
                tabChange={this.handleClick.bind(this)}/>
        <Block className="aui-content-padded">
          <TabBar items={items} borderClass="aui-tab-border" activeIndex={0}/>
        </Block>
        <p className="aui-text-center">其他颜色</p>
        <TabBar items={items} className="aui-tab-info" activeIndex={0}/>
        <TabBar items={items} className="aui-tab-success" activeIndex={1}/>
        <TabBar items={items} className="aui-tab-danger" activeIndex={2}/>
        <TabBar items={items} className="aui-tab-warning" activeIndex={3}/>
        <TabBar items={items} className="aui-tab-dark" activeIndex={2}/>
        <Block className="aui-content-padded">
          <TabBar className="aui-tab-info" items={items} borderClass="aui-tab-border" activeIndex={1}/>
        </Block>
        <Block className="aui-content-padded">
          <TabBar className="aui-tab-success" items={items} borderClass="aui-tab-border" activeIndex={0}/>
        </Block>
        <Block className="aui-content-padded">
          <TabBar className="aui-tab-danger" items={items} borderClass="aui-tab-border" activeIndex={1}/>
        </Block>
        <Block className="aui-content-padded">
          <TabBar className="aui-tab-warning" items={items} borderClass="aui-tab-border" activeIndex={2}/>
        </Block>
        <Block className="aui-content-padded">
          <TabBar className="aui-tab-dark" items={items} borderClass="aui-tab-border" activeIndex={3}/>
        </Block>
      </Block>
    );
  }

  handleClick(i) {
    console.log(i);
  }
}

export default TabMain;
