import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryMealsScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Tela de categorias refeicoes</Text>
            <Button title="Vá para detalhes" onPress={()=>{
                props.navigation.navigate({routeName: 'MealDetail'})
            }}/>
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

export default CategoryMealsScreen;