import React, { useEffect, useState } from 'react';
import {
    Text, View, StyleSheet,
    FlatList, ActivityIndicator, price, name,
    RefreshControl, Image,Styles,
    Pressable
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import themeStyles from '../styles/theme';
import axios from 'axios';
import { Lunchdata, server } from '../constants';
import Card from '../components/Card';
import { data, foodCardData, Starterdata, Lunchdata1, } from "../constants/index"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const { bgColor, textColor } = themeStyles();

    const handleProductDetail = (product) => {
        navigation.navigate('Product Detail', { product });
    };

    return (
        <View style={[styles.container, bgColor]}>

      <Text style={styles.TextContainer}>  BreakFast</Text>

            <FlatList
                style={{ marginTop: 10, marginBottom: 10 }}
                horizontal={true}
                data={Starterdata}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                     <Text style={styles.Text}>  Price={item.price}</Text>
                     <Text style={styles.Text}>  Name={item.name}</Text>
                     <TouchableOpacity onPress={() => handleProductDetail(item)}>
                            <Image
                                style={{
                                    borderBottomRightRadius: 5,
                                    borderBottomLeftRadius: 5, borderRadius: 5, margin: 10,
                                    height: 150, width: 250
                                }}
                                source={item.image}
                            />
                        </TouchableOpacity>
                    </View>




                )}
            />

<Text style={styles.TextContainer}>  Lunch</Text>

            <FlatList
                style={{ marginTop: 10, marginBottom: 10 }}
                horizontal={true}
                data={Lunchdata1}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                      <View>
                         <Text style={styles.Text}>  Price={item.price}</Text>
                         <Text style={styles.Text}>  Name={item.name}</Text>
                        <TouchableOpacity onPress={() => handleProductDetail(item)}>
                            <Image
                                style={{
                                    borderBottomRightRadius: 5,
                                    borderBottomLeftRadius: 5, borderRadius: 5, margin: 10,
                                    height: 150, width: 250
                                }}
                                source={item.image}
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />


<Text style={styles.TextContainer}>  Dinner</Text>

            <FlatList
                style={{ marginTop: 10, marginBottom: 10 }}
                horizontal={true}
                data={foodCardData}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <View>
                        <Text style={styles.Text}>  Price={item.price}</Text>
                        <Text style={styles.Text}>  Name:{item.name}</Text>
                        <TouchableOpacity onPress={() => handleProductDetail(item)}>
                            <Image
                                style={{
                                    borderBottomRightRadius: 5,
                                    borderBottomLeftRadius: 5, borderRadius: 5, margin: 10,
                                    height: 150, width: 250
                                }}
                                source={item.image}
                            />
                        </TouchableOpacity>
                    </View>
       )}
            />
       </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 9,
        paddingVertical: 2,
        paddingBottom: 10,
    },
    image: {
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        height: 150,
    },
    refresh: {
        textAlign: 'center',
        fontSize: 20,
        marginLeft: 10,
        marginVertical: 4,
        transform: [{ rotate: '90deg' }],
    },
    errorText: {
        color: 'red',
    },
    TextContainer:{
        fontSize: 20,
        fontWeight: "bold",
        // marginTop: 5, 
        // marginBottom: 5 ,
    
      //  color: "red",
      
    },


        Text:{
            fontSize: 15,
            fontWeight: "bold",
            
        //    color: "red",
            marginTop: 5,
            marginLeft: 5,},
                  
 
});
