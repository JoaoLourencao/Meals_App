import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props => {
    const catID = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catID);
    return(
        <View style={styles.screen}>
            <Text>Tela de categorias refeicoes</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Vá para detalhes" onPress={()=>{
                props.navigation.navigate({routeName: 'MealDetail'})
            }}/>
        </View>
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catID = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catID);

    return { 
        headerTitle: selectedCategory.title,
     };

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;