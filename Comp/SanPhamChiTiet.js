import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const SanPhamChiTiet = ({ route }) => {
  const { product } = route.params;
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = () => {
    if (comment) {
      // Thực hiện lưu trữ bình luận vào cơ sở dữ liệu hoặc hiển thị trực tiếp trên màn hình
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.productContainer}>
        <Image source={{ uri: product.img }} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{product.ten}</Text>
          <Text style={styles.productDescription}>{product.Hãng}</Text>
          <Text style={styles.productPrice}>$ {product.giaTien}</Text>
        </View>
      </View>
      <View style={styles.commentContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Nhập bình luận của bạn"
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity style={styles.commentButton} onPress={handleCommentSubmit}>
          <Text style={styles.commentButtonText}>Gửi</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.commentsList}>
        {comments.map((item, index) => (
          <Text key={index} style={styles.commentItem}>Người ẩn danh: {item}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
    padding: 16,
  },
  productContainer: {
    flexDirection: 'column',
    marginVertical: 10,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 27,
    padding: 10,
    height: 430,
    width: 310,
    margin: 10,
    position: 'relative',
  },
  productImage: {
    width: 287,
    height: 260,
    borderTopLeftRadius: 10, // Đảm bảo góc bo trái phía trên
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10, // Đảm bảo góc bo trái phía trên
    borderBottomRightRadius: 10, // Đảm bảo góc bo phải phía trên
    marginTop: 2,
  },
  productDetails: {
    marginLeft: 10,
    flex: 1,
    position: 'absolute', // Thêm thuộc tính position absolute để đặt vị trí tuyệt đối
    bottom: 0, // Đẩy lên phía dưới của phần tử cha (productItem)
    width: '99%', // Chiếm toàn bộ chiều rộng của phần tử cha
    padding: 10, // Thêm padding để giữ khoảng cách với biên của phần tử cha
    backgroundColor: '#fff', // Đặt màu nền với độ trong suốt
    borderBottomLeftRadius: 20, // Đảm bảo góc bo trái phía trên
    borderBottomRightRadius: 20,
     // Đảm bảo góc bo phải phía trên
     height: 150,
  },
  productName: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDescription: {
    color: 'black',
    fontSize: 14,
    marginTop:10,
    marginBottom:10,
  },
  productPrice: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    width:300,
    
  },
  commentInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 30,
    backgroundColor:'#fff',
    marginLeft:20
  },
  commentButton: {
    marginLeft: 10,
    backgroundColor: '#66CCFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  commentButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  commentsList: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 310,
    marginLeft:10
  },
  commentItem: {
    fontSize: 14,
    marginBottom: 5,
    margin:10,
  },
  
});

export default SanPhamChiTiet;