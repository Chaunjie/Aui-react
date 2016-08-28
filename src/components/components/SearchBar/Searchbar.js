/**
 * Created by xudao on 16/6/20.
 */
require('./searchbar.css');

import React from 'react';
import ReactDOM from 'react-dom';

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      classList: 'aui-searchbar-wrap',
      autoFocus: false
    };
  }

  componentDidMount() {
    if (this.props.query && this.props.query.length) {
      this.setState({
        query: this.props.query,
        classList: 'aui-searchbar-wrap focus',
        autoFocus: true
      });
    }
  }

  render() {
    const props = this.props;
    const placeholder = props.placeholder ? props.placeholder : '请输入搜索内容';
    const cancelBtnClass = props.cancelBtnClass ? props.cancelBtnClass : 'aui-text-info';
   // const input = <input type="text" placeholder={placeholder} value={this.state.query} ref="search" onChange={this.changeValue.bind(this)} onKeyPress={(event) => this.keyPress(event.key)}/>
    return React.createElement(
      'div',
      {className: this.state.classList},
      React.createElement(
        'div',
        {className: 'aui-searchbar aui-border-radius', onClick: this.doSearch.bind(this)},
        React.createElement(
          'i',
          {className: 'aui-iconfont aui-icon-search'}
        ),
        React.createElement(
          'div',
          {className: 'aui-searchbar-text'},
          placeholder
        ),
        React.createElement(
          'div',
          {className: 'aui-searchbar-input'},
          React.createElement(
            'form',
            {action: 'javascript:0'},
            React.createElement(
              'input',
              {
                type: 'search',
                placeholder: placeholder,
                value: this.state.query,
                ref: 'search',
                onChange: this.changeValue.bind(this),
                onKeyPress: (event) => this.keyPress(event.key)
              }
            )
          )
        ),
        React.createElement(
          'i',
          {className: 'aui-iconfont aui-icon-roundclosefill', onClick: this.clearInput.bind(this)}
        )
      ),
      React.createElement(
        'div',
        {className: 'aui-searchbar-cancel ' + cancelBtnClass, onClick: this.cancelSearch.bind(this)},
        '取消'
      )
    )
  }

  doSearch() {
    this.setState({
      classList: 'aui-searchbar-wrap focus',
      autoFocus: true
    });

    const _this = this;
    setTimeout(function () {
      ReactDOM.findDOMNode(_this.refs.search).focus();
    }, 1000);
  }

  cancelSearch() {
    if(this.props.cancelClick){
      this.props.cancelClick();
      return;
    }

    this.setState({
      classList: 'aui-searchbar-wrap',
      autoFocus: false
    });

    const _this = this;
    setTimeout(function () {
      ReactDOM.findDOMNode(_this.refs.search).blur();
    }, 1000)
  }

  changeValue(e) {
    this.setState({
      query: e.target.value
    });
  }

  clearInput() {
    this.setState({
      query: ''
    });
  }

  keyPress(key) {
    if (key == 'Enter') {
      alert(this.state.query);
    }
  }

}
