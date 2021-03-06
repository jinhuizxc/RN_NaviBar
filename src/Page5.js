import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import NaviBar from '../NaviBar';

export  default class Page5 extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.onNaviBarPress = this.onNaviBarPress.bind(this);
    }

    render() {
        // 不同的Page,需要修改下面的这个数组, 通过数组控制导航栏条目显示状态
        var naviStatus = [0, 0, 0, 0, 1];
        return (
            <View style={styles.container}>
                <NaviBar naviBarStatus={naviStatus}
                         onNaviBarPress={this.onNaviBarPress}/>
                <View style={styles.whatLeft}/>
            </View>
        );
    }
    //不同的page需要修改返回值
    onNaviBarPress(aNumber) {
        switch (aNumber) {
            case 0:
                this.props.navigator.replace({
                    name: 'Page1'
                });
            case 1:
                //通过replace切换
                this.props.navigator.replace({
                    name: 'Page2'
                });
                return;
            case 2:
                this.props.navigator.replace({
                    name: 'Page3'
                });
                return;
            case 3:
                this.props.navigator.replace({
                    name: 'Page4'
                });
                return;
            case 4:
                return;
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    whatLeft: {  // 组件定义了一个上边框
        flex: 1,
        borderTopWidth: 1,
        borderColor: 'black',
        backgroundColor:'gray' //每个界面背景颜色不一样
    }
});