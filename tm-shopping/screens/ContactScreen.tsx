import {Text, FlatList, StyleSheet, View, TouchableOpacity, TextInput, Button} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { StacksParamsList } from "../navigation/TabNavigator"
import useFetch from "../hooks/useFetch"
import { SafeAreaView } from "react-native-safe-area-context"
import Icon from "../components/common/Icons/Icon"

const ContactScreen = () => {

    const {data} = useFetch<string[]>({endpoint: 'products/categories'})
    const navigation = useNavigation<NativeStackNavigationProp<StacksParamsList>>()

    return (
        <SafeAreaView>
            <Text style={styles.title}>Details</Text>
            <View style = {{margin:20}}>
                <Icon source={require("../assets/icon_data.jpg")} style={styles.img}/>
                <TextInput placeholder="Name" style = {styles.txtinput}/>
                <TextInput placeholder="Phone" style = {styles.txtinput}/>
                <TextInput placeholder="Mail" style = {styles.txtinput}/>
                <TextInput placeholder="City" style = {styles.txtinput}/>
                <TextInput placeholder="Address" style = {styles.txtinput}/>
                <View>
                    <Text style={{marginBottom:20, marginTop:20}} onPress = {()=>{
                        navigation.navigate("BasketScreen");
                     }}>Cancel</Text>
                    <Button title="Confirm" />
                </View>
            </View>
            <Text style={styles.title}>Details</Text>
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
    
    img:{
        width:"100%",
        height:200,
    },

    txtinput:{
        borderColor:"silver",
        borderWidth:1,
        marginTop:20
    }
});

export default ContactScreen