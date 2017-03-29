import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Text, View } from 'react-native';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import TabsView from './tabs/TabsView.ios';
import InfoView from './tabs/info/InfoView';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" hideNavBar />
      </Scene>
	<Scene key="main">
  <Scene
    key="test"
    component={TabsView}
    title="TabsView"
    hideNavBar
  />
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employees"
        />
        <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
        <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
        <Scene key="home" component={InfoView} title="test" />
      </Scene>

    </Router>
  );
};


export default RouterComponent;
