import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingsBlock = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.block}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Setting = () => {
  const navigation = useNavigation(); // Đảm bảo bạn đã sử dụng hook useNavigation

  const goToProfile = () => {
    navigation.navigate('Profile'); // Điều hướng đến trang Profile
  };

  const goToPhoneInfo = () => {
    navigation.navigate('PhoneInfo'); // Điều hướng đến trang PhoneInfo
  };

  const goToCustomSettings = () => {
    navigation.navigate('CustomSettings'); // Điều hướng đến trang CustomSettings
  };

  return (
    <View style={styles.container}>
      <SettingsBlock title="Thông tin cá nhân" onPress={goToProfile} />
      <SettingsBlock title="Thông tin điện thoại" onPress={goToPhoneInfo} />
      <SettingsBlock title="Thiết lập riêng" onPress={goToCustomSettings} />
    </View>
  );
};

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
});

export default Setting;
