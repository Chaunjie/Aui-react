/**
 * Created by xudao on 16/8/14.
 */

import React from 'react';
require('./button.css');

export default class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    componentDidMount() {

    }

    render() {
        const props = this.props;
        const className = props.className ? props.className : '';

        return React.createElement(
            'div',
            {className: 'aui-btn ' + className, onClick: this.handleClick.bind(this), onTouchStart: this.handleTouchStart.bind(this)},
            this.props.beforeDom ? this.props.beforeDom : null,
            this.props.children,
            this.props.afterDom ? this.props.afterDom : null
        );
    }

    handleClick(){
        this.props.onClick ? this.props.onClick() : '';
    }

    handleTouchStart(){
        this.props.onTouchStart ? this.props.onTouchStart() : '';
    }


}
