require('normalize.css/normalize.css');

import React from 'react';
import {Link} from 'react-router';
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import Alert from './components/Alert/Alert';

export default class AlertMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alertHtml:'',
      btns : [
        {
          text:'微信支付',
          color:'green'
        },
        {
          text:'支付宝支付',
          color:'orange'
        },
        {
          text:'网银支付',
          color:'red'
        }
      ]
    };
  }

  render() {
    return (
      <Container className="button-container aui-content-padded">
        <p className="aui-text-center">Toast</p>
        <p className="aui-text-center">
          <button className="aui-btn-success aui-btn-block" onClick={this.showAlert.bind(this)}>普通Alert</button>
        </p>
        <p className="aui-text-center">
          <button className="aui-btn-success aui-btn-block" onClick={this.showDoubleAlert.bind(this)}>多按钮Alert</button>
        </p>
        {this.state.alertHtml}
      </Container>
    );
  }

  showAlert(content) {
    if(!this.state.alertHtml){
      const btns = [
        {
          text:'确定',
          color:'green'
        }
      ];
      const alert = <Alert title="提示" content={content ? content : "第一个弹窗"} btns={btns} closeClick={this.closeClick.bind(this)}></Alert>
      this.setState({
        alertHtml: alert
      });
    }
  }

  closeClick(i){
    this.setState({
      alertHtml: ''
    })
  }

  showDoubleAlert(){
    if(!this.state.alertHtml){

      const alert = <Alert title="支付提示" content="您需要使用哪种支付方式" btns={this.state.btns} closeClick={this.closeAlert.bind(this)}></Alert>
      this.setState({
        alertHtml: alert
      });
    }
  }

  closeAlert(i){
    this.setState({
      alertHtml: ''
    }, function(){
        this.showAlert('您选择的是'+this.state.btns[i].text);
    })
  }


};
