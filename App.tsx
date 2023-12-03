import { StyleSheet, View } from 'react-native';
import AppDrawer from './components/AppDrawer';
import UserProvider from './components/UserProvider';


export default function App() {

  return (
      <View style={styles.container}>
        <UserProvider>
          <AppDrawer/>
        </UserProvider>
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
