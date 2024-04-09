import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const PhoneInfo = () => {
  return (
    <View style={{margin:20}}>
      <View style={{backgroundColor:'white',borderRadius:10,width:330,height:140,margin:20,padding:30}}>
        <View style={{flexDirection:'row'}}>
          <View>
          <Image style={{width:60,height:60,margin:10}} source={{uri:'https://hc.com.vn/i/ecommerce/media/ckeditor_3003318.jpg'}}/>
          </View>
         
         <View style={{marginLeft:30}}>
         <Text>Loại Điện Thoại: smartphone</Text>
         <Text>Tên:Iphone 12</Text>
          <Text>Cpu: apple a13</Text>
          <Text>Ram: 4gb</Text>
          <Text>Bộ Nhớ Trong: 12gb</Text>
         </View>
          
        </View>

      </View>
    </View>
  )
}

export default PhoneInfo

const styles = StyleSheet.create({})