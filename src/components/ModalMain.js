require('normalize.css/normalize.css');

import React from 'react';
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import Block from './components/Block/Block';
import Modal from './components/Modal/Modal';

export default class ModalMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalHtml:''
    };
  }

  render() {
    return (
      <Container className="modal-container aui-content-padded">
        <p className="aui-text-center">Modal</p>
        <p className="aui-text-center">
          <button className="aui-btn-success aui-btn-block" onClick={this.showModal.bind(this)}>Modal</button>
        </p>
        {this.state.modalHtml}
      </Container>
    );
  }

  showModal(content) {
    if(!this.state.modalHtml){
      const modal = <Modal closeClick={this.closeClick.bind(this)}><Block className="modal-text-content">这是第一个Modal</Block></Modal>
      this.setState({
        modalHtml: modal
      });
    }
  }

  closeClick(){
    this.setState({
      modalHtml: ''
    })
  }
};
