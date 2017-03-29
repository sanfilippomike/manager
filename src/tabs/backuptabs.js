import React, { Component } from 'react';
import { 
	TabBarIOS, 
	Text,
	View, 
	Navigator
} from 'react-native';
import { connect } from 'react-redux';
import { InfoView } from './info/InfoView';
import Icon from 'react-native-vector-icons/FontAwesome';
import { tabChanged, visibilityChanged } from '../actions';
import { Colors } from '../components/common';

import type { Tab, Visibility } from '../reducers/NavigationReducer';

class TabsView extends Component {
	
	state = {
	   selectedTab: 'redTab',
	   notifCount: 0,
	   presses: 0,
	 };

	props: {
		tab: Tab;
		visibility: Visibility;
		onTabSelect: (tab: Tab) => void;
		navigator: Navigator;
	};


	onTabSelect(tab) {
		if (this.props.tab !== tab) {
			this.props.tabChanged(tab);
		}
		this.setState({
			selectedTab: tab
		});
	}

	_renderContent = (color: string, pageText: string, num?: number) => {
	  return (
	    <View style={[styles.tabContent, {backgroundColor: color}]}>
	      <Text style={styles.tabText}>{pageText}</Text>
	      <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
	    </View>
	  );
	};

	render() {
		return (
			<TabBarIOS
				unselectedTintColor="#2f4f4f"
				tintColor={Colors.darkText}
				unselectedItemTintColor="#2f4f4f"
				barTintColor="#f8f8ff"
			>

        <TabBarIOS.Item
			title="Home"
			selected={this.props.tab === 'home'}
			icon={require('../tabs/home/img/icon-home.png')}
			selectedIcon={require('../tabs/home/img/icon-home-active.png')}
			onPress={this.onTabSelect.bind(this, 'home')}
		>
			<InfoView
				navigator={this.props.navigator}
				onVisibilityChange={this.handleVisibilityChange}
			/>
        </TabBarIOS.Item>


			<TabBarIOS.Item
				title="My Profile"
				selected={this.state.selectedTab === 'myprofile'}
				icon={require('../tabs/profile/img/icon-profile.png')}
				selectedIcon={require('../tabs/profile/img/icon-profile-active.png')}
				onPress={this.onTabSelect.bind(this, 'myprofile')}
			>
			{this._renderContent('#21551C', 'Green Tab')}
			</TabBarIOS.Item>


			<TabBarIOS.Item
				title="Send Thanks"
				selected={this.props.tab === 'sendthanks'}
				icon={require('../tabs/sendthanks/img/icon-airplane.png')}
				selectedIcon={require('../tabs/sendthanks/img/icon-airplane-active.png')}
				onPress={this.onTabSelect.bind(this, 'sendthanks')}
			>
			{this._renderContent('#414A8C', 'Apple Tab')}
			</TabBarIOS.Item>




			<TabBarIOS.Item
				title="Reports"
				icon={require('../tabs/reports/img/icon-report.png')}
				selectedIcon={require('../tabs/reports/img/icon-report-active.png')}
				selected={this.state.selectedTab === 'reports'}
				onPress={this.onTabSelect.bind(this, 'reports')}
			>
			{this._renderContent('#414A8C', 'dsf Tab')}
			</TabBarIOS.Item>



			</TabBarIOS>
		);
	}
	handleVisibilityChange(visibility) {
		this.setState({ selectedVisibility: visibility });
	}
}


const styles = {
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  iconColor: {
	color: '000'
  }
};


const mapStateToProps = ({ navigation }) => {
	const { tab, visibility } = navigation;

	return { tab, visibility };
};


export default connect(mapStateToProps, { tabChanged, visibilityChanged })(TabsView);

