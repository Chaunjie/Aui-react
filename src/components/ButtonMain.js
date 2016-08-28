require('normalize.css/normalize.css');

import React from 'react';
import {Link} from 'react-router';
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import Badge from './components/Badge/Badge';

class ButtonMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="button-container aui-content-padded">
                <p>普通按钮</p>
                <p><button>默认按钮(default)</button></p>
                <p><button className="aui-btn-primary" onClick={this.handleClick.bind(this)}>默认按钮(primary)</button></p>
                <p><button className="aui-btn-success">默认按钮(success)</button></p>
                <p><button className="aui-btn-info">默认按钮(info)</button></p>
                <p><button className="aui-btn-warning">默认按钮(warning)</button></p>
                <p><button className="aui-btn-danger">默认按钮(danger)</button></p>

                <p><button className="aui-btn-info"><span className="aui-iconfont aui-icon-roundcheck"></span>图标按钮</button></p>
                <p><button className="aui-btn-info">图标按钮<Badge className="aui-badge-warning">12</Badge></button></p>
                <p>块按钮类</p>
                <p><button className="aui-btn-block">默认按钮(default)</button></p>
                <p><button className="aui-btn-primary aui-btn-block">默认按钮(primary)</button></p>
                <p><button className="aui-btn-success aui-btn-block">默认按钮(success)</button></p>
                <p><button className="aui-btn-info aui-btn-block">默认按钮(info)</button></p>
                <p><button className="aui-btn-warning aui-btn-block">默认按钮(warning)</button></p>
                <p><button className="aui-btn-danger aui-btn-block">默认按钮(danger)</button></p>
                <p>块按钮类 - 默认增加10px底部外边距</p>
                <p><button className="aui-btn-block aui-btn-outlined">默认按钮(default)</button></p>
                <p><button className="aui-btn-primary aui-btn-block aui-btn-outlined">默认按钮(primary)</button></p>
                <p><button className="aui-btn-success aui-btn-block aui-btn-outlined">默认按钮(success)</button></p>
                <p><button className="aui-btn-info aui-btn-block aui-btn-outlined">默认按钮(info)</button></p>
                <p><button className="aui-btn-warning aui-btn-block aui-btn-outlined">默认按钮(warning)</button></p>
                <p><button className="aui-btn-danger aui-btn-block aui-btn-outlined">默认按钮(danger)</button></p>
            </Container>
        );
    }

    handleClick() {
        alert(666);
    }
}

export default ButtonMain;
