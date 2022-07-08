import { View, Text, FlatList,Modal } from 'react-native'
import React,{useState} from 'react'
import TopCategories from './TopCategories'
import Homedata from '../../../Data/Homedata'
const TopRenderComponents = () => {
    const [modal,setModal]=useState(false)
    return (
        <View>
            <FlatList
                data={Homedata.CategoriesScreendata}
                keyExtractor={(item, index) => index.toString()}
                scrollEnabled={true}
                renderItem={({ item }) => {
                    return (
                        <TopCategories
                            text={item.text}
                            subtext={item.subtext}
                            image={item.image}
                            type={item.type}
                            // Press={item.Press}
                            subPress={item.subPress}
                            iconRequire={item.iconRequire}
                        />
                    )
                }}
            />
                            <Modal 
                // style={{}}
                visible={modal}
                transparent={true}
                
                >
                    <View style={{backgroundColor:'white',padding:20}}>
                    <Text style={{color:'black',fontSize:25,}}> westernwear</Text>
                    </View>
                </Modal>

        </View>
    )
}

export default TopRenderComponents