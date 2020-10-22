import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const CategoriesScreen = props => {
    return(
        <FlatList numColumns={2}/>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;