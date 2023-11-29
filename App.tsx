import { StyleSheet, View } from 'react-native';

import AppDrawer from './components/AppDrawer';

export default function App() {
  return (
    <View style={styles.container}>
      <AppDrawer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    flex:1,
    width:'100%'
  }
});
