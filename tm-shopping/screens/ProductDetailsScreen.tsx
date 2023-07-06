import { RouteProp, useRoute } from "@react-navigation/native";
import {Text, TouchableOpacity, Image, View, StyleSheet, FlatList, Button} from "react-native"
import useFetch from "../hooks/useFetch";
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { StacksParamsList } from "../navigation/TabNavigator"
import { COLORS, STYLES } from "../components/common/constants";
import Icon from "../components/common/Icons/Icon";
import { SafeAreaView } from "react-native-safe-area-context";

type Product = {
    thumbnail: string,
    title: string,
    price:number,
    id:number,
    description:string,
    brand:string,
    rating:number
};

type Products = {
    products: Product[];
}

const ProductDetailsScreen = () => {
    const params = useRoute<RouteProp<StacksParamsList, "ProductsScreen">>().params;

    const {data, isLoading, error} = useFetch<Products>({endpoint: `products/search?q=${params.category.title}`})
    const navigation = useNavigation<NativeStackNavigationProp<StacksParamsList>>()

    const renderItems = ({item}:{item: Product}) =>{

        return (<TouchableOpacity style = {{backgroundColor:"white", flex:1}} onPress = {()=>{
            navigation.navigate("ProductDetailsScreen", {category: item});
        }}>
            <Image source= {{ uri: item.thumbnail}} resizeMode={'cover'} style={{ width: '100%', height: 300 }}/>
            
            <View style = {styles.detailsCard}>
            
                <View style = {{flex:1, flexDirection: 'row', justifyContent:"space-around", alignItems:"baseline"}}>
                    <Text style = {styles.title}>{item.title}</Text>
                    <View style = {styles.quantityButton}>
                        <Text style = {{marginLeft:5, marginRight:5}}> - </Text>
                        <Text style = {{marginLeft:15, marginRight:15}}> 1 </Text>
                        <Text style = {{marginLeft:5, marginRight:5}}> + </Text>
                    </View>
                </View>

                <View style = {{flex:1, flexDirection: 'row', justifyContent:"space-between", alignItems:"baseline"}}>
                    <Text style = {styles.txt}>{item.brand}</Text>
                    <Text style = {styles.title}>Available in Stock</Text>
                </View>

                <View style = {{flex:1, flexDirection: 'row', justifyContent:"flex-start", alignItems:"center", marginTop:20, marginLeft:20}}>
                <Icon source={require("../assets/icon_rating.png")} style={{width:30, height:30, tintColor:'red'}}
  />
                    <Text style = {styles.txt}>${item.rating} (Reviews Score)</Text>
                </View>

                <Text style = {styles.title}>Brand</Text>
                <Text style = {styles.txt}>{item.brand}</Text>
                <Text style = {styles.title}>Description</Text>
                <Text style = {styles.txt}>{item.description}</Text>
                
                <View style = {{flex:1, flexDirection: 'row', justifyContent:"space-between", alignItems:"flex-start"}}>
                    <View>
                        <Text style = {{marginLeft:20, marginTop:20, color:"grey", flex:2, fontWeight:"bold"}}>Total</Text>
                        <Text style = {styles.title}>${item.price}</Text>
                    </View>
                    <View style = {styles.cartButton}>
                        <Button  title="Add to Cart"/>
                    </View>
                </View>

            </View>
        </TouchableOpacity>);
    }


    return (
        <SafeAreaView>
            <FlatList numColumns={2} renderItem={renderItems} data={data?.products} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
    ...STYLES.mainScreen,
    },
    backIcon: { marginLeft: 15, marginTop: 15 },
    
    quantityButton: {
        marginLeft: 27,
        borderRadius:20,
        flex:1,
        flexDirection: 'row', 
        justifyContent:"center", 
        alignItems:"flex-start",
        backgroundColor:"silver"
    },

    txt:{
        marginLeft:20, 
        color:"grey"
    },
    
    detailsCard: {
    flex: 0.7,
    backgroundColor: COLORS.white,
    marginTop: -20,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    },
    
    ratingIcon: {
    width: 35,
    height: 35,
    tintColor: "orange",
    marginRight: 10,
    },
    reviewsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    },
    stockText: {
    fontWeight: "700",
    marginTop: 22,
    },

    title:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:20,
        marginTop:10,
    },
    
    cartButton: { width: 150, borderRadius: 80, marginTop: 20 },
    });

export default ProductDetailsScreen