/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import Page1 from './src/Page1';
import Page2 from './src/Page2';
import Page3 from './src/Page3';
import Page4 from './src/Page4';
import Page5 from './src/Page5';

class RN_NaviBar extends Component {
    //告知Navigator 模块切换时的效果
    configureScene() {
        return Navigator.SceneConfigs.FloatFromBottom;
    }
    //根据传递的信息, 处理界面的切换
    renderScene(router, navigator) {
        this._navigator = navigator;
        switch (router.name) {
            case 'Page2':
                return <Page2 navigator={navigator}/>;
            case 'Page3':
                return <Page3 navigator={navigator}/>;
            case 'Page4':
                return <Page4 navigator={navigator}/>;
            case 'Page5':
                return <Page5 navigator={navigator}/>;
        }
    }
    render() {
        return (
            //根View
            <Navigator
                initialRoute={{name:'Page2'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}/>
        );
    }
}

AppRegistry.registerComponent('RN_NaviBar', () => RN_NaviBar);
