import {FlatList, Text, StyleSheet, TouchableOpacity, View, Image} from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import useFetch from "../hooks/useFetch";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ProductDetailsScreen from "./ProductDetailsScreen";
import { COLORS } from "../components/common/constants";
import { RouteProp } from "@react-navigation/native";
import { StacksParamsList } from "../navigation/TabNavigator";

type Product = {
    thumbnail: string,
    title: string,
    price:number,
    brand:string
};

type Products = {
    products: Product[];
}

const ProductsScreen = () => {
    
    const params = useRoute<RouteProp<StacksParamsList, "ProductsScreen">>().params;

    const {data, isLoading, error} = useFetch<Products>({endpoint: `products/category/${params.category}`})
   
     console.log(data);
    const navigation = useNavigation<NativeStackNavigationProp<StacksParamsList>>()

    const renderItems = ({item}:{item: Product}) =>{

        console.log(item)
        return (<TouchableOpacity style = {{backgroundColor:"white", margin:10, flex:1}} onPress = {()=>{
            navigation.navigate("ProductDetailsScreen", {category: item});
        }}>
            <Image source= {{ uri: item.thumbnail}} resizeMode={'cover'} style={{ width: '100%', height: 200 }}/>
            <Text style = {styles.title}>{item.title}</Text>
            <Text style = {styles.text}>{item.brand}</Text>
            <Text style = {styles.price}>${item.price}</Text>
            <View/>
        </TouchableOpacity>);
    }


    return (
        <View style = {{backgroundColor:"silver", margin:10}}>
            <Text style={styles.title}>Smartphones</Text>
            <FlatList numColumns={2} renderItem={renderItems} data={data?.products} />
        </View>
    )
    
}

const styles=StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:20,
        marginTop:10,
    },

    text:{
        color: COLORS.graySecondary,
        fontSize:16,
        padding:20,
    },

    image:{
        width:50,
        height:50,
        borderRadius:50
    },

    price:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        marginBottom:10
    }
});



export default ProductsScreen