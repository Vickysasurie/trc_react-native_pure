import * as React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

export default class FlatListStyled extends React.Component {


    render() {
        return (

            <View style={{ flex: 1, marginTop: 22 }}>
                <FlatList
                    data={this.props.flatListData}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{flex:1, flexDirection: 'column'}}>
                
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1.8}}>
                        <Image source = {{uri: item.imageUrl}} style={{width:'auto', height:130,margin:5}}>
                        </Image>
                    </View>
                                
                    <View style={{flex:1.2, flexDirection:'column', height:100}}>
                        <TouchableOpacity onPress = {()=>this.props.videoSelector(item) } >
                            <Text style={styles.flatListItem}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={{backgroundColor:'white', height:1}}>

                </View>

            </View>
                        )
                    }}
                >

                </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   
    flatListItem: {
        color: 'white',
        padding:10,
        fontSize:16
    }
});
