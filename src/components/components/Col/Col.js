/**
 * Created by xudao on 16/8/14.
 */

import React from 'react';
require('./col.css');

export default class Col extends React.Component {
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
            {className: 'aui-col-xs-'+props.col +' '+ className, onClick: this.handleClick.bind(this), onTouchStart: this.handleTouchStart.bind(this)},
            this.props.children
        );
    }

    handleClick(){
        this.props.onClick ? this.props.onClick() : '';
    }

    handleTouchStart(){
        this.props.onTouchStart ? this.props.onTouchStart() : '';
    }


}
