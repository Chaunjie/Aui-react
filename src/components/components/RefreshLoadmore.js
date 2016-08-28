/**
 * Created by xudao on 16/8/14.
 */

import React from 'react';

export default class RefreshLoadmore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      touchYDelta: '',
      isLoading: false,
      docElem: window.document.documentElement,
      refreshContainer: {scrollTop: 0},
      win: {width: window.innerWidth, height: window.innerHeight},
      translateVal: '',
      isMoved: false,
      firstTouchY: '',
      initialScroll: '',
      params: {
        friction: 2.5,
        triggerDistance: 100
      },
      loadMore: false,
      time: ''
    };

  }

  componentDidMount() {
    this.state.refreshContainer = this.refs.refreshLoad;
  }

  scrollY() {
    return window.pageYOffset || this.state.docElem.scrollTop || this.state.refreshContainer.scrollTop;
  }

  touchStart(ev) {
    if (this.state.isLoading && !this.props.onRefresh) {
      return;
    }

    this.state.isMoved = false;

    this.refs.refresh.style.webkitTransitionDuration =
      this.refs.refresh.style.transitionDuration = '0ms';
    this.state.touchYDelta = '';
    var touchobj = ev.changedTouches[0];
    this.state.firstTouchY = parseInt(touchobj.clientY);
    this.state.initialScroll = this.scrollY();
  }

  touchMove(ev) {
    if (this.state.isLoading) {
      ev.preventDefault();
      return;
    }

    var self = this;
    var moving = function () {
      var touchobj = ev.changedTouches[0], // reference first touch point for this event
        touchY = parseInt(touchobj.clientY);
      self.state.touchYDelta = touchY - self.state.firstTouchY;
      if (self.scrollY() === 0 && self.state.touchYDelta > 0) {
        ev.preventDefault();
      }
      if (self.state.initialScroll > 0 || self.scrollY() > 0 || self.scrollY() === 0 && self.state.touchYDelta < 0) {
        self.state.firstTouchY = touchY;
        return;
      }

      self.state.translateVal = Math.pow(self.state.touchYDelta, 0.85);
      self.refs.refresh.style.webkitTransform = self.refs.refresh.style.transform = 'translate3d(0, ' + self.state.translateVal + 'px, 0)';
      self.state.isMoved = true;
      if (self.state.touchYDelta > self.state.params.triggerDistance) {
        self.refs.refresh.classList.add("xu-refresh-pull-up");
        self.refs.refresh.classList.remove("xu-refresh-pull-down");
      } else {
        self.refs.refresh.classList.add("xu-refresh-pull-down");
        self.refs.refresh.classList.remove("xu-refresh-pull-up");
      }
    };
    this.throttle(moving(), 20);
  }

  touchEnd(ev, callback) {
    var self = this;
    if (this.state.isLoading || !this.state.isMoved) {
      this.state.isMoved = false;
      return;
    }
    if (!this.props.onRefresh) {
      this.refs.refresh.style.webkitTransitionDuration =
        this.refs.refresh.style.transitionDuration = '300ms';
      this.refs.refresh.style.webkitTransform =
        this.refs.refresh.style.transform = 'translate3d(0,0,0)';
      return;
    }
    // 根据下拉高度判断是否加载
    if (this.state.touchYDelta >= this.state.params.triggerDistance) {
      this.state.isLoading = true; //正在加载中
      ev.preventDefault();
      this.refs.refresh.style.webkitTransitionDuration =
        this.refs.refresh.style.transitionDuration = '300ms';
      this.refs.refresh.style.webkitTransform =
        this.refs.refresh.style.transform = 'translate3d(0,60px,0)';
      document.querySelector(".xu-refresh-pull-arrow").style.webkitTransitionDuration =
        document.querySelector(".xu-refresh-pull-arrow").style.transitionDuration = '0ms';
      self.refs.refresh.classList.add("xu-refreshing");
      if (this.props.onRefresh) {
        this.props.onRefresh(function () {
          this.cancelLoading();
        }.bind(this));
      }
    } else {
      this.refs.refresh.style.webkitTransitionDuration =
        this.refs.refresh.style.transitionDuration = '300ms';
      this.refs.refresh.style.webkitTransform =
        this.refs.refresh.style.transform = 'translate3d(0,0,0)';
      if (this.props.onRefresh) {
        this.props.onRefresh();
      }
    }
    this.state.isMoved = false;
    return;
  }

  cancelLoading() {
    this.state.isLoading = false;
    this.refs.refresh.classList.remove("xu-refreshing");
    document.querySelector(".xu-refresh-pull-arrow").style.webkitTransitionDuration =
      document.querySelector(".xu-refresh-pull-arrow").style.transitionDuration = '300ms';
    this.refs.refresh.style.webkitTransitionDuration =
      this.refs.refresh.style.transitionDuration = '0ms';
    this.refs.refresh.style.webkitTransform =
      this.refs.refresh.style.transform = 'translate3d(0,0,0)';
    this.refs.refresh.classList.remove("xu-refresh-pull-up");
    this.refs.refresh.classList.add("xu-refresh-pull-down");
    return;
  }

  scroll() {
    var scrollHeight = this.refs.refreshLoad.scrollHeight;
    var scrollTop = this.refs.refreshLoad.scrollTop;
    var height = this.refs.refreshLoad.clientHeight;
    if (this.props.hasMore && height + scrollTop == scrollHeight && !this.state.loadMore) {
      if ((new Date) - this.state.time > 1000)
        this.loadMore();
    }
  }

  loadMore() {
    this.setState({
      loadMore: true
    })
    this.refs.refresh.classList.add("loading-more");
    this.props.loadMore(function () {
      this.setState({
        loadMore: false,
        time: (new Date()).getTime()
      })
    }.bind(this))
  }

  throttle(fn, delay) {
    var allowSample = true;
    return function (e) {
      if (allowSample) {
        allowSample = false;
        setTimeout(function () {
          allowSample = true;
        }, delay);
        fn(e);
      }
    };
  }

  render() {
    const props = this.props;
    const className = props.className ? props.className : '';

    const loader = props.onRefresh ? React.createElement(
      'div',
      {
        className: 'xu-refresh-load'
      },
      React.createElement(
        'div',
        {
          className: 'xu-refresh-pull-arrow'
        }
      )
    ) : null;

    const footer = props.hasMore && this.state.loadMore ? React.createElement(
      'div',
      {
        className: 'loading-load'
      },
      React.createElement(
        'div',
        {
          className: 'loading-more-icon'
        }
      )
    ) : null;

    return React.createElement(
      'div',
      {
        ref: 'refreshLoad',
        className: 'refresh-loader ' + className,
        onTouchStart: this.touchStart.bind(this),
        onTouchMove: this.touchMove.bind(this),
        onTouchEnd: this.touchEnd.bind(this),
        onScroll: this.scroll.bind(this)
      },
      React.createElement(
        'div',
        {ref: 'refresh', className: 'xu-refresh-content'},
        loader,
        this.props.children,
        footer
      )
    )
  }


}
