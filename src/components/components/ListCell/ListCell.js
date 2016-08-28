/**
 * Created by xudao on 16/8/14.
 */

import React from 'react';
require('./listCell.css');

export default class ListCell extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    componentDidMount() {

    }

    render() {
        const props = this.props;
        const className = props.className ? props.className : '';
        let dom = null;
        switch (props.type){
            case 'arrow-right':
                let badge = props.badge ? props.badge : null;

                dom = React.createElement(
                    'li',
                    {className: 'aui-list-view-cell ' + className, onClick: this.handleClick.bind(this)},
                    React.createElement(
                       'div',
                        {className: 'aui-arrow-right'},
                        this.props.children,
                        badge
                    )
                )
                break;
        }

        return dom;
    }

    handleClick(){
        this.props.onClick ? this.props.onClick() : '';
    }


}
