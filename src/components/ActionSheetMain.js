require('normalize.css/normalize.css');

import React from 'react';
import {Link} from 'react-router';
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import ActionSheet from './components/ActionSheet/ActionSheet';

export default class ActionSheetMain extends React.Component {
  constructor(props) {
    super(props);

    //console.log(this.props.location.state);
    //console.log(window.location.href);
    this.state = {
      actionSheetHtml:'',
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
          color:'blue'
        }
      ],
      cancelBtn:{
        text:'取消',
        color:'red'
      }
    };
  }

  render() {
    return (
      <Container className="button-container aui-content-padded">
        <p className="aui-text-center">ActionSheet</p>
        <p className="aui-text-center">
          <button className="aui-btn-success aui-btn-block" onClick={this.showActionSheet.bind(this)}>ActionSheet</button>
        </p>
        {this.state.actionSheetHtml}
      </Container>
    );
  }

  showActionSheet() {
    if(!this.state.actionSheetHtml){
      const alert = <ActionSheet btns={this.state.btns} cancelBtn={this.state.cancelBtn} closeClick={this.closeClick.bind(this)}></ActionSheet>
      this.setState({
        actionSheetHtml: alert
      });
    }
  }

  closeClick(i){
    console.log(i);
    this.setState({
      actionSheetHtml: ''
    })
  }


};
