import {Text, FlatList, StyleSheet, View, TouchableOpacity} from "react-native"
import useFetch from "../hooks/useFetch"
import { Colors } from "react-native/Libraries/NewAppScreen"
import {COLORS} from "../components/common/constants"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { StacksParamsList } from "../navigation/TabNavigator"
import { SafeAreaView } from "react-native-safe-area-context"


const HomeScreen = () => {

    const {data} = useFetch<string[]>({endpoint: 'products/categories'})
    const navigation = useNavigation<NativeStackNavigationProp<StacksParamsList>>()

    const renderItem = ({item}:{item: string}) =>{
        return (<TouchableOpacity style = {styles.touchable} onPress = {()=>{
            navigation.navigate("ProductsScreen", {category: item});
        }}>
            <Text style = {styles.text}>{item}</Text>
            <View style={styles.icon}/>
        </TouchableOpacity>);
    }

    return (
        <SafeAreaView>
            <Text style={styles.title}>Categories</Text>
            <FlatList renderItem={renderItem} data={data} />
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
        backgroundColor:"black",
        margin:10,
        borderRadius:30,
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center",
    },

    text:{
        color: COLORS.white,
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
});

export default HomeScreen