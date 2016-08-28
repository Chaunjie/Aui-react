/**
 * Created by xudao on 16/8/14.
 */

import React from 'react';
require('./badge.css');

export default class Badge extends React.Component {
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
            'span',
            {className: 'aui-badge ' + className},
            this.props.children
        )
    }


}
