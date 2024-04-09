import React, { useEffect,useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';


const Welcome = (props) => {
    useEffect(()=>{
        const time  = setTimeout(()=>{
            props.navigation.navigate('Login');
        },4000)
        return () => clearTimeout(time);
    },[])
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri:'https://img.lovepik.com/background/20211101/medium/lovepik-vintage-mobile-phone-wallpaper-background-image_400581718.jpg'}}
        style={styles.background}
        resizeMode='cover'
      >
         <View style={{justifyContent:'center',alignItems:'center',marginTop:350}}>
          <Animatable.Text animation="fadeInUp" duration={1500} delay={500} style={{color:'white',fontSize:60}}>Welcom to me</Animatable.Text>
          <Animatable.Text animation="fadeInUp" duration={1500} delay={1000} style={{color:'white',fontSize:20}}>by</Animatable.Text>
          <Animatable.Text animation="fadeInUp" duration={1500} delay={1500} style={{color:'white',fontSize:40}}>Kiều Ngọc Hưng</Animatable.Text>
          <Animatable.Text animation="fadeInUp" duration={1500} delay={2000} style={{color:'white',fontSize:40}}>MSV: PH34593</Animatable.Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
