import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screen/Login';
import Welcom from './Screen/Welcom';
import StackNav from './Navigation/StackNav';

export default function App() {
  return (
    <View style={styles.container}>
     <StackNav/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
