import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection } from '../../components/common'; 

console.log('infoview works');
class InfoView extends Component {

  render() {
    return (
      <View>
        <Card>
          <CardSection>
           <Text style={styles.titleStyle}>
            testing 123
          </Text>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    flex: 1 
  }
};


export default InfoView;
