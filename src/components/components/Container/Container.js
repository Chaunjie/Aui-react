/**
 * Created by xudao on 16/8/14.
 */

import React from 'react';

class Container extends React.Component {
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
            {className: 'aui-content ' + className},
            this.props.children
        )
    }


}

module.exports = Container;
