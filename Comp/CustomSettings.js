import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const SettingsBlock = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.block}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const CustomSettings = (props) => {
  return (
    <View style={styles.container}>
      <SettingsBlock title="Đổi Theme"  />
      <SettingsBlock title="Đổi Mật Khẩu"  />
      <SettingsBlock title="Đăng Xuất" onPress={()=>props.navigation.navigate('Login')} />
    </View>
  )
}

export default CustomSettings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop:80
  },
  block: {
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: 'lightgray',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})