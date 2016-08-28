/**
 * Created by xudao on 16/8/14.
 */

import React from 'react';
require('./listView.css');

export default class ListView extends React.Component {
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
            'ul',
            {className: 'aui-list-view ' + className},
            this.props.children
        )
    }


}
