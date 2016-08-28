require('normalize.css/normalize.css');
require('styles/common.css');

import React from 'react';
import SearchBar from './components/SearchBar/Searchbar';
import Block from './components/Block/Block';

class ButtonMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Block className="searchBar-container">
        <SearchBar/>
        <SearchBar placeholder="请输入搜索内容" cancelBtnClass="aui-text-success" query="123456"/>
        <SearchBar placeholder="取消回调" cancelBtnClass="aui-text-danger" cancelClick={this.handleClick.bind(this)}/>
      </Block>
    );
  }

  handleClick() {
    alert(666);
  }
}

export default ButtonMain;
