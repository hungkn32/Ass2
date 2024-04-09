import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={{flex:1,backgroundColor:'e8e8e8',justifyContent:'center',alignItems:'center'}}>
    <Text>Họ Và Tên: Kiều Ngọc Hưng</Text>
    <Text>Mã Sinh Viên: PH34593</Text>
    <Text>Lớp:MD18306</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})