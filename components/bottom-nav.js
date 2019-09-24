import React, { Component } from 'react';
import { View } from 'react-native'
import BottomNavigation, {
    FullTab
} from 'react-native-material-bottom-navigation'

import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from './NavigationService';


export default class App extends React.Component {

    state = {
        activeTab: 'Home'
    }

    handleTabPress = (newTab, oldTab) => {
        this.setState({ activeTab: newTab.key });
        NavigationService.navigate(newTab.key, {});
    }

    tabs = [
        {
            key: 'Home',
            icon: 'home',
            label: 'Home',
            barColor: '#388E3C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'TRC',
            icon: 'star',
            label: 'TRC',
            barColor: '#E64A19',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'Events',
            icon: 'event-available',
            label: 'Events',
            barColor: '#3B6AA0',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'Videos',
            icon: 'video-library',
            label: 'Videos',
            barColor: '#4D4D4D',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'Activity',
            icon: 'local-activity',
            label: 'Activity',
            barColor: '#8B6914',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'More',
            icon: 'more',
            label: 'More',
            barColor: '#808000',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },

    ]

    render() {
        return (
            <View >

                <BottomNavigation
                    renderTab={this.renderTab}
                    tabs={this.tabs}
                    activeTab={this.state.activeTab}
                    onTabPress={this.handleTabPress}
                />

            </View>
        )
    }

    renderTab = ({ tab, isActive }) => {
        return (

            <FullTab
                key={tab.key}
                isActive={isActive}
                label={tab.label}
                renderIcon={this.renderIcon(tab.icon)}
            />
        )
    }

    renderIcon = iconName => ({ isActive }) => {
        return <Icon size={24} color="white" name={iconName} />
    }
}
