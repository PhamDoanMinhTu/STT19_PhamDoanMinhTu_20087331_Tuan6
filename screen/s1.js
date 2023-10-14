import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

const A = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Image
                    style={styles.imageView1}
                    source={require("../assets/vs_black.png")}/>
                <Text style={styles.textView1}>Điện thoại Vsmart joy 3 - hàng chính hãng</Text>
            </View>
            <View style={styles.view2_1}>
                <View style={styles.view2}>
                    <Image style={styles.imageView2} source={require("../assets/star.png")}/>
                    <Image style={styles.imageView2} source={require("../assets/star.png")}/> 
                    <Image style={styles.imageView2} source={require("../assets/star.png")}/> 
                    <Image style={styles.imageView2} source={require("../assets/star.png")}/> 
                    <Image style={styles.imageView2} source={require("../assets/star.png")}/>  
                </View>
                <View style={styles.view2}>
                    <Text style={styles.textView2}>(Xem 828 đánh giá)</Text> 
                </View>
            </View>
            <View style={styles.view3}>

                    <Text style={styles.textView3}>1.790.000 đ</Text> 
                    <Text style={styles.textView3_1}>1.790.000 đ</Text>
            </View>
            <View style={styles.view4}>

                    <Text style={styles.textView4}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text> 
                    <Image style={styles.imageView4} source={require("../assets/Group 1.png")}/>  

            </View>
            <View style={styles.view5}>

                    <Pressable onPress={()=>{navigation.navigate('s2')}} style={styles.prs5}>4 MÀU-CHỌN MÀU</Pressable>
                    <Image style={styles.imageView5} source={require("../assets/Vector.png")}/>

            </View>
            <View style={styles.view6}>

                     <Pressable style={styles.prs6}>Chọn mua</Pressable>

            </View>



     
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: "rgba(255, 255, 255, 1)"

    },
    view1: {
        flex: 3,
        justifyContent: 'start',
        flexDirection: 'column',
        width:'100%',
        
    },
    imageView1: {

        width: '370px',
        height: '350px',
        top: '20px',
        left: '29px',
        alignItems: "center",
        resizeMode : 'contain'


    },
    textView1: {
        width: '288px',
        height: '18px',
        top: '20px',
        left: '70px',
        // fontWeight:'bold',
        fontSize:'15px'
    },
    view2_1: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view2: {
        flex:1,
        flexDirection: 'row'
    },
    imageView2:{
        width: '40px',
        height: '30px',
        top: '200px',
        left: '-100px',

    },
    textView2: {
        fontWeight: 'bold',
        fontSize: '17px',
        lineHeight: '21.09px',
        top: '130px',
        left: '100px',
},
    view3: {
        flex:1,
        flexDirection: 'row'
    
    },
    textView3: {
        width: '330px',
        // height: '100px',
        top: '100px',
        left: '20px',
        fontWeight:'bold',
        fontSize:'20px'
    },
    textView3_1: {
        width: '330px',
        height: '100px',
        top: '100px',
        left: '40px',
        fontWeight:'bold',
        fontSize:'20px',
        color:'grey',
        textDecorationLine:'line-through',
    },


    view4: {
        flex:1,
        flexDirection: 'row'
    },
    textView4: {
        width: '330px',
        height: '100px',
        top: '50px',
        left: '20px',
        fontWeight:'bold',
        fontSize:'20px',
        color: 'red',

    },
    imageView4:{
        width: '25px',
        height: '25px',
        top: '50px',
        left: '-30px'

    },
    view5: {
        flex:1,
        flexDirection: 'row'
    },
    prs5:{
        width: '350px',
        height: '50px',
        top: '10px',
        left: '40px',
        borderWidth:'1px',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'10px',
        fontSize:'20px'
        
    },
    imageView5:{
        width: '25px',
        height: '25px',
        top: '25px',
        left: '0px'

    },
    view6: {
        flex:1,
        flexDirection: 'row'
    },
    prs6:{
        width: '350px',
        height: '50px',
        top: '-10px',
        left: '40px',
        borderWidth:'1px',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'10px',
        backgroundColor:'red',
        fontSize:'20px',
        fontWeight:'bold',
        color:'white'
        
    },

});
export default A;