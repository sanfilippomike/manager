import React, { Component } from 'react';
import { 
	TabBarIOS, 
	TabBarItemIOS, 
	StyleSheet,
	Text,
	View
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { switchTab, switchVisibility } from './actions';

class TabView extends Component {

	state = {
	  selectedTab: 'redTab',
	  selectedTabColor: '000',
	  notifCount: 0,
	  presses: 0,
	};

	onTabSelect(tab) {
		if (this.props.tab !== tab) {
			this.props.switchTab(tab);
		}
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
				unselectedTintColor="white"
				tintColor="#1aa3ff"
				unselectedItemTintColor="white"
				barTintColor="darkslateblue"
			>

			<TabBarIOS.Item
				  title="Info"
				  selected={this.props.tab === 'info'}
				  onPress={this.onTabSelect.bind(this)}
				  icon={require('./tabs/info/img/info-icon.png')}
				  selectedIcon={require('./tabs/info/img/info-icon-active.png')}
			  >
			  {this._renderContent('#414A8C', 'Blue Tab')}

			</TabBarIOS.Item>


			<TabBarIOS.Item
				title="Home"
				icon={require('./tabs/home/img/icon-home.png')}
				selectedIcon={require('./tabs/home/img/icon-home-active.png')}
				selected={this.state.selectedTab === 'Home'}
				onPress={this.onTabSelect.bind(this)} 
			>
			{this._renderContent('#414A8C', 'Blue Tab')}
			</TabBarIOS.Item>


			<TabBarIOS.Item
				title="Send Thanks"
				selected={this.props.tab === 'map'}
				icon={require('./tabs/sendthanks/img/icon-airplane.png')}
				selectedIcon={require('./tabs/sendthanks/img/icon-airplane-active.png')}
				onPress={this.onTabSelect.bind(this)} 
			>
			<View />
			</TabBarIOS.Item>




			<TabBarIOS.Item
			title="Reports"
			icon={require('./tabs/reports/img/icon-report.png')}
			selectedIcon={require('./tabs/reports/img/icon-report.png')}
			selected={this.state.selectedTab === 'Report'}
			onPress={() => {
			this.setState({
			selectedTab: 'report',
			});
			}}>
			{this._renderContent('#414A8C', 'Blue Tab')}
			</TabBarIOS.Item>


			<Icon.TabBarItem
				title="Home"
				iconName="home"
				selectedIconName="home"
				selected={this.state.selectedTab === 'homeTab'}
				onPress={() => {
					this.setState({
						selectedTab: 'homeTab',
					});
				}}
			>

			<View style={styles.tabContent}><Text>Home Tab</Text></View>
			</Icon.TabBarItem>



			<Icon.TabBarItem
				title="Send Thanks"
				iconName="paper-plane"
				selectedIconName="paper-plane"
				selected={this.state.selectedTab === 'sendthanks'}
				onPress={() => {
					this.setState({
						selectedTab: 'sendthanks',
					});
				}}
			>

			<View style={styles.tabContent}><Text>Home Tab</Text></View>
			</Icon.TabBarItem>


			<TabBarIOS.Item
				title="Reports"
				icon={require('./tabs/reports/img/icon-report.png')}
				selectedIcon={require('./tabs/reports/img/icon-report-active.png')}
				selected={this.state.selectedTab === 'Reports'}
				onPress={() => {
					this.setState({
						selectedTab: 'reports',
					});
				}}
			>
			{this._renderContent('#414A8C', 'Blue Tab')}
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
  iconColor: {
	color: '000'
  }
};


const mapStateToProps = ({ navigation }) => {
	const { tab, visibility } = navigation;

	return { tab, visibility };
};


export default connect(mapStateToProps, { switchTab, switchVisibility })(TabView);

