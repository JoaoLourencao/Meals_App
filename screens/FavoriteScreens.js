import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavoriteScreens = props => {
    return(
        <View style={styles.screen}>
            <Text>Tela de favoritos</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoriteScreens;