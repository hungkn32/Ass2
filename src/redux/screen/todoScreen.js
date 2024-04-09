import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { fetchTodos, deleteTodoApi, addTodoAPI, updateTodoApi, toggleTodoApi } from '../actions/todoActions';
import { addToFavorites } from "../actions/todoActions";
import { TextInput } from 'react-native';


const TodoScreen = () => {
    const [ten, setTen] = useState('');
    const [hang, setHang] = useState('');
    const [giaTien, setGiaTien] = useState('');
    const [ram, setRam] = useState('');
    const [boNho, setBoNho] = useState('');
    const [img, setImg] = useState('');

    const [editTitle, setEditTitle] = useState('');
    const [editMoTa, setEditMoTa] = useState('');
    const [editNgay, setEditNgay] = useState('');
    const [editLoai, setEditLoai] = useState('');
    const [editTien, setEditTien] = useState('');
    const [idEdit, setIdEdit] = useState(null);

    const listTodo = useSelector(state => state.listTodo.listTodo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleEdit = (id, title, moTa, ngay, loai, tien) => {
        setEditTitle(title);
        setEditMoTa(moTa);
        setEditNgay(ngay);
        setEditLoai(loai);
        setEditTien(tien);
        setIdEdit(id);
    }
    const handleAddToFavorites = (product) => {
        dispatch(addToFavorites(product));
    }

    const handleUpdate = () => {
        let duLieuUpdate = { title: editTitle, moTa: editMoTa, ngay: editNgay, loai: editLoai, tien: editTien };
        dispatch(updateTodoApi({ id: idEdit, data: duLieuUpdate }))
            .then((result) => {
                console.log('Todo update successfully!');
                setEditTitle('');
                setEditMoTa('');
                setEditNgay('');
                setEditLoai('');
                setEditTien('');
                setIdEdit(null);
            })
            .catch((error) => {
                console.error('Error update todo:', error);
            });
    }

    const handleToggleTodo = (id, status) => {
        let duLieuUpdate = { status: !status };
        dispatch(toggleTodoApi({ id: id, data: duLieuUpdate }))
            .then((result) => {
                console.log('Todo update status successfully!');
            })
            .catch((error) => {
                console.error('Error update todo:', error);
            });
    };

    const handleAddTodo = () => {
        let duLieuThem = {};
        dispatch(addTodoAPI(duLieuThem))
            .then((result) => {
                console.log('Todo add successfully!');
            })
            .catch((error) => {
                console.error('Error add todo:', error);
            });
    }

    const handleDeleteTodo = async (id) => {
        dispatch(deleteTodoApi(id))
            .then((result) => {
                console.log('Todo deleted successfully!');
            })
            .catch((error) => {
                console.error('Error deleting todo:', error);
            });
    }

    const renderItem = ({ item }) => (
        <View key={item.id} style={{}}>
            <View style={{ marginLeft: 70 ,backgroundColor: 'white', width: 180, height: 240, borderRadius: 10, margin: 20, borderWidth: 1, borderColor: '#e8e8e8' }}>
                <TouchableOpacity onPress={()=>handleAddToFavorites(item)}>
                <Image style={{ height: 20, width: 50, marginLeft: 130, marginTop: 3 }} source={{ uri: 'https://cdn2.iconfinder.com/data/icons/media-player-ui/512/Media-Icon-25-512.png' }} />
                </TouchableOpacity>
                <View style={{}}>
                    <View style={{ borderRadius: 10 }}>
                        <Image style={{ width: 'auto', height: 120, resizeMode: 'contain', borderRadius: 10 }} source={{ uri: item.img }} />
                    </View>
                    <View style={{ marginLeft: 10, marginTop: 6 }}>
                        <Text style={{ fontSize: 14, fontWeight: '500' }}> {item.ten} {item.Ram}-{item.BoNho}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <View style={{ marginLeft: 14, marginTop: 5 }}>
                        <Text style={{ color: 'red', fontSize: 16 }}>{item.giaTien} VND </Text>
                    </View>
                    <View>
                       
                        
                    </View>
                </View>
            </View>
            
        </View>
    );

    return (
       
      <View>
      <Text style={{fontSize:20,marginTop:40,textAlign:'center'}}>Danh Sách Sản Phẩm</Text>
            <FlatList
                data={listTodo}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                horizontal={false}
            />
           
        </View>
     
    );
}

export default TodoScreen;
const styles = {
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  };
  
