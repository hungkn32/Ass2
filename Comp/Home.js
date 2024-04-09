import React, { useRef, useEffect, useState } from 'react';
import {StatusBar, Animated, StyleSheet, View, Image, Dimensions, FlatList, ActivityIndicator, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import store from '../src/redux/store';
import TodoScreen from '../src/redux/screen/todoScreen';
import { Provider } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const slides = [
  { id: 1, imageUri: 'https://cdn.tgdd.vn/2024/02/banner/iPhone-11-720-220-720x220-1.png' },
  { id: 2, imageUri: 'https://image.slidesdocs.com/responsive-images/background/stage-or-podium-display-search-engine-or-url-highlighted-on-smartphone-screen-with-megaphone-notification-bell-chat-slide-bar-video-app-and-copy-space-powerpoint-background_0be282ef09__960_540.jpg' },
  { id: 3, imageUri: 'https://uploads-ssl.webflow.com/6073fad993ae97919f0b0772/609fa7b53c435fb27393587d_dd5787fa0c9306323b7176ce91a4d31ff6041c4a2.jpg' },
];

const Home = (props) => {
  const navigation =useNavigation();
  const [tenDT, settenDT] = useState('');
  const [hangDT, sethangDT] = useState('');
  const [giaTien, setgiaTien] = useState('');
  const [ram, setram] = useState('');
  const [boNho, setboNho] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const [dssp, setdssp] = useState([]);
  const [dsspHot, setDsspHot] = useState([]); 
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [viewedProducts, setViewedProducts] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [favoriteProducts, setFavoriteProducts] = useState([]); // State to store favorite products

  // Function to add a product to favorites
  const addToFavorites = (product) => {
    setFavoriteProducts(prevFavorites => [...prevFavorites, product]); // Add the product to the list of favorites
  }
  const handleProductPress = (item) => {
    setViewedProducts(prevProducts => [item, ...prevProducts]);
    navigation.navigate('SPChiTiet', { product: item });
  };
  const slideX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const slideAnimation = Animated.timing(slideX, {
      toValue: -(windowWidth * currentIndex),
      duration: 1000,
      useNativeDriver: true,
    });

    slideAnimation.start();

    return () => {
      slideAnimation.stop();
    };
  }, [currentIndex]);

  const getListProHot = async () => {
    let url_api = 'http://10.24.3.199:3000/DanhSachHot';

    try {
      const response = await fetch(url_api);

      const json = await response.json();

      setDsspHot(json);// đổ dữ liệu vào state

    } catch (error) {
      console.error(error);
    } finally {
      // kết thúc quá trình load dữ liệu, kể cả có lỗi cũng gọi vào lệnh này
      setisLoading(false); // trạng thái không còn load nữa
    }
  }

  const getListPro = async () => {
    let url_api = 'http://10.24.3.199:3000/DanhSach';

    try {
      const response = await fetch(url_api);

      const json = await response.json();

      setdssp(json);// đổ dữ liệu vào state

    } catch (error) {
      console.error(error);
    } finally {
      // kết thúc quá trình load dữ liệu, kể cả có lỗi cũng gọi vào lệnh này
      setisLoading(false); // trạng thái không còn load nữa
    }
  }
  const renderViewedProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productItem} onPress={() => handleProductPress(item)}>
      <Image style={{ width: 'auto', height: 120,resizeMode:'contain',borderRadius:10}} source={{ uri: item.img }} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.ten}</Text>

        <Text style={styles.productDescription}>{item.Hãng}</Text>
        <Text style={styles.productPrice}>$ {item.giaTien}</Text>
      </View>
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartButtonText}>+</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
  


  const renderProduct = ({ item }) => {
    return (
      <View style={item.itemPro}>
      <View style={{ backgroundColor: '#e8e8e8', width: 170, height: 270, borderRadius: 10, margin: 20 }}>
        <Image style={{height:20,width:50,marginLeft:130,marginTop:3}} source={{uri:'https://cdn2.iconfinder.com/data/icons/media-player-ui/512/Media-Icon-25-512.png'}}/>
        <View style={{}}>
          <View style={{borderRadius:10}}>
            <Image style={{ width: 'auto', height: 120,resizeMode:'contain',borderRadius:10}} source={{ uri: item.img }} />
          </View>
          <View style={{ marginLeft: 40,marginTop:6 }}>
            <Text style={{ fontSize: 14 }}>{item.ten}</Text>
            <Text style={{ fontSize: 14 }}>{item.Hãng}</Text>
            <Text style={{ fontSize: 14 }}>{item.Ram}</Text>
            <Text style={{ fontSize: 14 }}>{item.BoNho}</Text>
          </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
            <View style={{marginLeft:10}}>
            <Text style={{ color: 'red', fontSize: 20 }}>{item.giaTien} VND </Text>
            </View>
            <View>
              <View>
                <TouchableOpacity style={{backgroundColor:'blue',width:30,height:30,borderRadius:3,marginRight:10}}>
                  <Text style={{textAlign:'center',padding:3}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </View>

    </View>
    );
  }
  const renderProductHot = ({ item }) => {
    return (
      <View style={item.itemPro}>
        <TouchableOpacity onPress={()=> renderViewedProductItem(item)}>

       
        <View style={{ backgroundColor: 'white', width: 180, height: 240, borderRadius: 10, margin: 20,borderWidth:1,borderColor:'#e8e8e8' }}>
          <Image  style={{height:20,width:50,marginLeft:130,marginTop:3}} source={{uri:'https://cdn2.iconfinder.com/data/icons/media-player-ui/512/Media-Icon-25-512.png'}}/>
          <View style={{}}>
            <View style={{borderRadius:10}}>
              <Image style={{ width: 'auto', height: 120,resizeMode:'contain',borderRadius:10}} source={{ uri: item.img }} />
            </View>
            <View style={{ marginLeft: 10,marginTop:6 }}>
              <Text style={{ fontSize: 14,fontWeight:'500' }}> {item.ten} {item.Ram}-{item.BoNho}</Text>
            </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
              <View style={{marginLeft:14,marginTop:5}}>
              <Text style={{ color: 'red', fontSize: 16 }}>{item.giaTien} VND </Text>
              </View>
              <View>
                <View>
                  <TouchableOpacity style={{backgroundColor:'red',width:30,height:30,borderRadius:3,marginRight:10}}>
                    <Text style={{textAlign:'center',padding:5}}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        </View>
        </TouchableOpacity>
      </View>
      
    );
  }

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getListPro();
      getListProHot();
    });

    return unsubscribe;
  }, [props.navigation]);
  

  return (
    
    <View style={styles.container}>
     <StatusBar backgroundColor="#e8e8e8" />
     
      <View style={{ backgroundColor: '#008000', width: '100%', height: 70 }}>
        <View style={styles.row}>
          <View>
            <TextInput
              style={{ width: 300, height: 30, backgroundColor: '#90EE90', paddingLeft: 30, borderRadius: 20 }}
              placeholder='Bạn Đang Tìm Gì ?'
            />
            <Image
              style={{ position: 'absolute', left: 10, top: 7, width: 20, height: 20 }}
            />
          </View>

          <View style={{}}>
            <Image 
                source={{uri: 'https://material.io/resources/icons/static/ic_baseline-shopping-cart-24px.svg'}}
                style={{width: 40, height: 40}}
            />
        </View>
         
         
        </View>

      </View>

      <View style={{ width: windowWidth, height: 200 }}>
        <Animated.View
          style={{
            flexDirection: 'row',
            width: windowWidth * slides.length,
            transform: [{ translateX: slideX }],
          }}
        >
          {slides.map((slide, index) => (
            <Image
              key={slide.id}
              source={{ uri: slide.imageUri }}
              style={{ width: windowWidth, height: 200 }}
            />
          ))}
        </Animated.View>
      </View>
      <ScrollView horizontal={false}>
      <Text style={{ textAlign: 'left', marginLeft: 20, fontSize: 20, fontWeight: '500', marginTop: 10 }}>Danh sách sản Phẩm Hot</Text>
      {
        (isLoading) ? (
          <ActivityIndicator />
        ) : (
          <FlatList data={dsspHot}
            horizontal={true}
            keyExtractor={(item_sp) => { return item_sp.id }}
            renderItem={renderProductHot} />
        )
      }


      <Text style={{ textAlign: 'left', marginLeft: 20, fontSize: 20, fontWeight: '500', marginTop: 10 }}>Danh sách sản phẩm</Text>
      {
        (isLoading) ? (
          <ActivityIndicator />
        ) : (
          <FlatList data={dssp}
            horizontal={true}
            keyExtractor={(item_sp) => { return item_sp.id }}
            renderItem={renderProduct} />
        )
      }
    <Text style={{color:'red',fontSize:20,marginLeft:10}}>Sản Phẩm Đã Xem</Text>
      <FlatList
        data={viewedProducts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderViewedProductItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productsList}
      />
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    padding: 20
  },
  image: {
    width: 40,
    height: 40,
    backgroundColor: "#FFF"
  },
  itemPro: {
    margin: 5,
    backgroundColor: "cyan"
  },
  productsList: {
    marginTop: 0,
    marginBottom: 15,
  },
});

export default Home;
