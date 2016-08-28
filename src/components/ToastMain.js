require('normalize.css/normalize.css');

import React from 'react';
import {Link} from 'react-router';
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import Badge from './components/Badge/Badge';
import Toast from './components/Toast/Toast';

class ToastMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="button-container aui-content-padded">
        <p className="aui-text-center">Toast</p>
        <p className="aui-text-center">
          <button className="aui-btn-success aui-btn-block" onClick={this.showLoading.bind(this)}>loading</button>
        </p>
        <p className="aui-text-center">
          <button className="aui-btn-success aui-btn-block" onClick={this.showDefaultToast.bind(this)}>不带图标Toast</button>
        </p>
        <p className="aui-text-center">
          <button className="aui-btn-success aui-btn-block" onClick={this.showIconToast.bind(this)}>带图标Toast</button>
        </p>
      </Container>
    );
  }

  showLoading() {
    Toast.showLoading();
    setTimeout(function(){
      Toast.hideLoading();
    },2000)
  }

  showDefaultToast(){
    Toast.showToast('这是默认Toast!');
  }

  showIconToast(){
    const options = {
      className:'aui-icon-close',
      content:'提交失败'
    };

    Toast.showIconToast(options);

    setTimeout(function(){
      Toast.showIconToast();
    },3000);
  }
}

export default ToastMain;
