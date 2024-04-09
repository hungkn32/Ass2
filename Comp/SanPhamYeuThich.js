import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import store from '../src/redux/store';
import { Provider } from 'react-redux'
import TodoScreen from '../src/redux/screen/todoScreen';

const FavoriteProductsScreen = () => {

    return (
        <Provider store={store}>
        <TodoScreen/>
       </Provider>
    );
};

export default FavoriteProductsScreen;
