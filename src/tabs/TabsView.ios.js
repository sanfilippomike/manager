import React, { Component } from 'react';
import { Text, View, TabBarIOS, Navigator } from 'react-native';
import { InfoView } from './info/InfoView';
import { tabChanged, visibilityChanged } from '../actions';
import type { Tab, Visibility } from '../reducers/NavigationReducer';
import { Colors } from '../components/common';
import { connect } from 'react-redux';
import EmployeeList from '../components/EmployeeList';

class TabsView extends Component {
  props: {
    tab: Tab;
    onTabSelect: (tab: Tab) => void;
  };

  state = {
    selectedTab: 'home',
    notifCount: 0,
    presses: 0,
  };


	onTabSelect(tab: Tab) {
	  if (this.props.tab !== tab) {
	    this.props.onTabSelect(tab);
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
					onPress={this.onTabSelect.bind(this, 'home')}
					icon={require('../tabs/home/img/icon-home.png')}
					selectedIcon={require('../tabs/home/img/icon-home-active.png')}
				>
         		 {this._renderContent('#414A8C', 'Blue Tab')}
	        	</TabBarIOS.Item>


	        	<TabBarIOS.Item
					title="My Profile"
					selected={this.props.tab === 'myprofile'}
					onPress={this.onTabSelect.bind(this, 'myprofile')}
					icon={require('../tabs/profile/img/icon-profile.png')}
					selectedIcon={require('../tabs/profile/img/icon-profile-active.png')}
				>
				<InfoView />
	        	</TabBarIOS.Item>

	        			        <TabBarIOS.Item
					title="Send Thanks"
					selected={this.props.tab === 'sendthanks'}
					onPress={this.onTabSelect.bind(this, 'sendthanks')}
					icon={require('../tabs/sendthanks/img/icon-airplane.png')}
					selectedIcon={require('../tabs/sendthanks/img/icon-airplane-active.png')}
				>
				<InfoView />
	        	</TabBarIOS.Item>

	        			        <TabBarIOS.Item
					title="Reports"
					selected={this.props.tab === 'reports'}
					onPress={this.onTabSelect.bind(this, 'reports')}
					icon={require('../tabs/reports/img/icon-report.png')}
					selectedIcon={require('../tabs/reports/img/icon-report-active.png')}
				>
				<InfoView />
	        	</TabBarIOS.Item>

		        <TabBarIOS.Item
					title="Info"
					selected={this.props.tab === 'info'}
					onPress={this.onTabSelect.bind(this, 'info')}
					icon={require('../tabs/info/img/info-icon.png')}
					selectedIcon={require('../tabs/info/img/info-icon-active.png')}
				>
				<InfoView />
	        	</TabBarIOS.Item>

	        </TabBarIOS>
		);
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
};

function actions(dispatch) {
  return {
    onTabSelect: (tab) => dispatch(tabChanged(tab)),
  };
}

export default connect(null, actions)(TabsView);
