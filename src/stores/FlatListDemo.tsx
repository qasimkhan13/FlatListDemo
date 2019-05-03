import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { FlatList } from 'react-native';


export default class FlatListDemo extends Component { 
  render() {
    return (
      <View style={styles.container}>
                <FlatList
                    data={[{ key: 'a' }, { key: 'b' }]}
                    renderItem={(item:any) => <Text>{item.key}</Text>}
                />   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
