/**
 * Created by xudao on 16/6/20.
 */
require('normalize.css/normalize.css');
require('styles/list.css');
require('styles/pullRefresh.css');


import React from 'react';
import Refresh from './components/RefreshLoadmore';
import Tap from 'xu-rc-tap';

export default class RefreshLoad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMore: true
    };

  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="refresh-container test-refresh-load " style={{height:document.body.clientHeight}}>
        <Refresh className="hhaha" onRefresh={this.refresh.bind(this)} hasMore={this.state.hasMore}
                 loadMore={this.loadMore.bind(this)}>
          <div className="">
            {
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (r, i) {
                const key = 'test-cell' + i;
                const time = Math.ceil(Math.random() * 1000);
                const option = {threshold: time};

                return (
                  <div className="card-list"  key={key} option={option}>
                    <Tap onTap={this.testTap.bind(this)}>
                      <div className="card-list-header">
                        卡片布局头部区域
                      </div>
                      <div className="card-list-content-padded">
                        内容区域，卡片列表布局样式可以实现APP中常见的各类样式
                      </div>
                      <div className="card-list-footer">
                        底部区域
                      </div>
                    </Tap>
                  </div>
                )
              }.bind(this))
            }
          </div>
        </Refresh>

      </div>
    );
  }

  refresh(resolve) {
    console.log('refresh');
    setTimeout(function () {
      resolve();
    }, 2000)

  }

  loadMore(resolve) {
    console.log('loadMore');
    setTimeout(function () {
      resolve();
    }.bind(this), 2000)
  }

  testTap() {
    alert(666);
  }


}
