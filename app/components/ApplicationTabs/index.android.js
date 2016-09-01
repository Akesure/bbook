import { View, Text } from 'react-native';
import TabBar from 'react-native-xtabbar';
import React, { Component } from 'react';
import styles from './styles';
import Feed from '../Feed';
import { connect } from 'react-redux';
import { actions as navigationActions } from 'react-native-navigation-redux-helpers';

const { jumpTo } = navigationActions;

class ApplicationTabs extends Component {
	_renderTabContent(tab) {
		if (tab.key === 'feed') {
			return (
				<Feed />
			);
		}

		if (tab.key === 'notifications') {
			return (
				<View style={[styles.tabContent, {backgroundColor: 'green'}]} />
			);
		}

		if (tab.key === 'settings') {
			return (
				<View style={[styles.tabContent, {backgroundColor: 'pink'}]} />
			);
		}

		return <Text>Hello there</Text>;
	}

	render() {
		const { dispatch, navigation } = this.props;
		const children = navigation.routes.map( (tab, i) => {
			return (
				<TabBar.Item key={tab.key}
						icon={tab.icon}
						selectedIcon={tab.selectedIcon}
						title={tab.title} onPress={ () => dispatch(jumpTo(i, navigation.key)) }
						selected={this.props.navigation.index === i}>
						{ this._renderTabContent(tab) }
				</TabBar.Item>
			);
		});
		return (
			<TabBar >
				{children}
			</TabBar>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

function mapStateToProps(state) {
	return {
		navigation: state.get('tabs')
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTabs);
