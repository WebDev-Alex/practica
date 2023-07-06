import {Text, FlatList, StyleSheet, View, TouchableOpacity, Button} from "react-native"
import useFetch from "../hooks/useFetch"
import { Colors } from "react-native/Libraries/NewAppScreen"
import {COLORS} from "../components/common/constants"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { StacksParamsList } from "../navigation/TabNavigator"
import Icon from "../components/common/Icons/Icon"
import { SafeAreaView } from "react-native-safe-area-context"


const BasketScreen = () => {

    const {data} = useFetch<string[]>({endpoint: 'products/categories'})
    const navigation = useNavigation<NativeStackNavigationProp<StacksParamsList>>()

    const renderItem = ({item}:{item: string}) =>{
        return (<TouchableOpacity style = {styles.touchable} onPress = {()=>{
            navigation.navigate("ContactScreen");
        }}>
        
            <View style = {{margin:20}}>
                <Button title="Proceed to Checkout" />
            </View>

        </TouchableOpacity>);
    }

    return (
        <SafeAreaView>
            <Icon source={require("../assets/icon_back.png")} style={styles.backIcon} />
            <Text style={styles.title}>My Cart</Text>
            <View>
                <Text style={styles.text}>Products: </Text>
                <Text style={styles.title}>Total: </Text>
            </View>
            <View style = {{margin:20}}>
                <Button title="Proceed to Checkout" onPress = {()=>{
            navigation.navigate("ContactScreen");
        }}/>
            </View>
                
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:20,
        marginTop:10,
    },

    touchable:{
        backgroundColor:"white",
        margin:10,
        borderRadius:30,
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center",
    },

    text:{
        fontSize:16,
        padding:20,
    },

    icon:{
        backgroundColor:COLORS.white,
        width:30,
        height:30,
        borderRadius:15,
        marginRight: 20,
    },

    backIcon:{
        backgroundColor:"black", 
        width:40,
        height:40, 
        tintColor:'white',
        borderRadius:50,
        marginTop:10,
        marginLeft:20
    }
});

export default BasketScreen