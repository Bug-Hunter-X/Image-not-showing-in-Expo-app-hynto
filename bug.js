import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Platform, Image } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} translucent={false}/>
      <View style={styles.innerContainer}>
        <Image source={require('./assets/profile.jpg')} style={styles.profileImage}/>
        <Text style={styles.nameText}>John Doe</Text>
        <Text style={styles.bioText}>Software Engineer</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bioText: {
    fontSize: 16,
  },
});

export default App;  