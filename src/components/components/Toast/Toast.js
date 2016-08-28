/**
 * Created by xudao on 16/8/28.
 */
require('./toast.css');
import React from 'react';
import ReactDOM from 'react-dom';

const Toast = {
  showLoading() {
    const toastContainer = document.querySelector('#loading-container');
    if (toastContainer) {
      document.body.removeChild(toastContainer);
    }

    const loading = React.createElement(
      'div',
      {className: 'aui-toast'},
      React.createElement(
        'div',
        {className: 'aui-toast-loading'}
      ),
      React.createElement(
        'div',
        {className: 'aui-toast-content'},
        '加载中'
      )
    )

    const a = document.createElement("div");
    a.id = 'loading-container'
    document.body.appendChild(a);
    ReactDOM.render(
      loading,
      document.getElementById("loading-container"));
  },

  hideLoading(){
    const toastContainer = document.querySelector('#loading-container');
    if (toastContainer) {
      document.body.removeChild(toastContainer);
    }
  },

  showToast(content){
    const toastContainer = document.querySelector('#toast-container');
    if (toastContainer) {
      document.body.removeChild(toastContainer);
    }
    const a = document.createElement("div");
    a.id = 'toast-container'
    document.body.appendChild(a);
    const toast = React.createElement(
      'div',
      {className: 'toast-content'},
      content
    );
    ReactDOM.render(
      toast,
      document.getElementById("toast-container"));

    setTimeout(function () {
      const toastContainer1 = document.querySelector('#toast-container');
      document.body.removeChild(toastContainer1);
    }, 2000)
  },

  showIconToast(data) {
    data = data ? data : {};
    const toastContainer = document.querySelector('#icon-toast-container');
    if (toastContainer) {
      document.body.removeChild(toastContainer);
    }
    const a = document.createElement("div");
    a.id = 'icon-toast-container'
    document.body.appendChild(a);

    const iconName = data.className ? data.className : 'aui-icon-check';
    const iconToast = React.createElement(
      'div',
      {className: 'aui-toast'},
      React.createElement(
        'i',
        {className:'aui-iconfont '+ iconName}
      ),
      React.createElement(
        'div',
        {className:'aui-toast-content'},
        data && data.content ? data.content : '提交成功'
      )
    );

    ReactDOM.render(
      iconToast,
      document.getElementById("icon-toast-container"));

    setTimeout(function () {
      const toastContainer1 = document.querySelector('#icon-toast-container');
      document.body.removeChild(toastContainer1);
    }, 2000)
  }
}

export default Toast;

