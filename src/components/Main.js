require('normalize.css/normalize.css');

import React from 'react';
import {Link} from 'react-router';
import Container from './components/Container/Container';
import Listview from './components/ListView/ListView';
import ListCell from './components/ListCell/ListCell';
import Badge from './components/Badge/Badge';

class AppComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const badge = <Badge className="aui-badge-success">新增</Badge>;
    return (
      <div className="index">
        <Container className="xudao">
          <Listview className="xudao">
            <ListCell className="test" type="arrow-right" badge={badge} onClick={this.handleClick.bind(this, 'searchBarMain')}>
              搜索条
            </ListCell>
            <ListCell className="test" type="arrow-right" onClick={this.handleClick.bind(this, 'button')}>
              按钮
            </ListCell>
            <ListCell className="test" type="arrow-right" onClick={this.handleClick.bind(this, 'col')}>
              栅格
            </ListCell>
            <ListCell className="test" type="arrow-right" onClick={this.handleClick.bind(this, 'nineGridMain')}>
              九宫格
            </ListCell>

            <ListCell className="test" type="arrow-right" onClick={this.handleClick.bind(this, 'sixteenGridMain')}>
              十六宫格
            </ListCell>
            <ListCell className="test" type="arrow-right" onClick={this.handleClick.bind(this, 'Refresh')}>
              上拉加载下拉刷新
            </ListCell>
            <ListCell className="test" type="arrow-right" onClick={this.handleClick.bind(this, 'tabBarMain')}>
              底部工具栏
            </ListCell>
            <ListCell className="test" type="arrow-right" onClick={this.handleClick.bind(this, 'tabMain')}>
              Tabs
            </ListCell>
            <ListCell className="test" type="arrow-right" onClick={this.handleClick.bind(this, 'toastMain')}>
              Toast
            </ListCell>
            <ListCell className="test" type="arrow-right" onClick={this.handleClick.bind(this, 'alertMain')}>
              Alert
            </ListCell>
            <ListCell className="test" type="arrow-right" onClick={this.handleClick.bind(this, 'modalMain')}>
              Modal
            </ListCell>
            <ListCell className="test" type="arrow-right" onClick={this.handleClick.bind(this, 'actionSheetMain')}>
              ActionSheetMain
            </ListCell>
          </Listview>
        </Container>
      </div>
    );
  }

  handleClick(name){
    this.props.history.pushState({modal: true}, '/'+name);
  }
}

export default AppComponent;
