import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import MoodSelect from '../../Components/MoodSelect';

const HomeScreen: React.FC = () => {
  const mainUrl =
    'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80';
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: mainUrl,
        }}
        style={styles.full_width}
      />
      <View style={[StyleSheet.absoluteFill, styles.center]}>
        <MoodSelect />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  center: {
    justifyContent: 'center',
  },
  full_width: {
    flex: 1,
  },
});

export default HomeScreen;
