import React from 'react';
import 
{
    View,
    Text, 
    Button,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView
    
}
from 'react-native';

const ResultsScreen = ({navigation}) => {
    return(
        <ScrollView>
        <View style={StyleSheet.container}>
            {/* Header */}
            <SafeAreaView>
                    <View style={styles.headersWrapper}>
                        <Image 
                        source={require('../assets/icons/NBC_PL.png')}
                        style={styles.profileImage}
                        />
                        
                    </View>
            </SafeAreaView>

            {/* Back Button */}
            <View>
                <TouchableOpacity style={{ height: 80, width: 85, marginTop: 10, padding: 20, alignText: 'center', color:'' }}>
                    <Button
                        title='Back'
                        color='#087A76'
                    />
                </TouchableOpacity>
            </View>
            {/* Sponsors */}
            <View style={styles.sponsorWrapper}>
                     <Text style={styles.sponsorTitle}></Text>
                        <View style={styles.sponsorListWrapper}>
                           
                                <Image
                                    source={require ('../assets/icons/AZAM.png') }
                                    style={{
                                        width: 120, 
                                        height: 34, 
                                        padding: 4,
                                        marginVertical: 10,
                                        alignSelf: 'center',
                                        marginRight: 30,

                                    }}
                        
                                />
                                <Image
                                    source={require ('../assets/icons/NBC.png') }
                                    style={{
                                        width: 34,
                                        height: 34,
                                        padding: 1,
                                        alignSelf: 'center',
                                        marginRight: 55,
                                    }}
                        
                                />
                                 <Image
                                    source={require ('../assets/icons/TBC.png') }
                                    style={{
                                        width: 70,
                                        height: 54, 
                                        padding: 4,
                                        marginVertical: 18,                                       
                                        padding: 1,
                                        alignSelf: 'center',
                                        marginTop: 10,
                                        
                                    }}
                        
                                />
                                 
                                
                                                          
                        </View>
                </View>

    </View>
    </ScrollView>
    );
}

export default ResultsScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#43927F'
    },
    headersWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center',
        
    },
    profileImage:{
        width: 70,
        height: 70,
        borderRadius: 30,
    },
    sponsorWrapper:{
        marginTop: 1,
    },
    sponsorTitle:{
        paddingTop: 1,
        paddingBottom: 1,
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        paddingHorizontal: 20,
        color: '#000000',
    },
    sponsorListWrapper:{
        paddingTop: 10,
        paddingBottom: 20,
        flexDirection: 'row',
        marginHorizontal: 20,
    
    },
    sponsorItemWrapper:{
        backgroundColor: '#ffffff',
        padding:20,
        width: 320,
        marginLeft:1,
        marginRight: 15,
        borderRadius: 15,   
        shadowColor: '#000000',
        shadowOffset:{
            width: 16,
            height: 0,
        },
        shadowOpacity: 0.0,
        shadowRadius: 0,
        elevation: 0,
    },
    sponsorItemImage:{
        width: 75,
        height: undefined,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
        resizeMode: 'contain',
        aspectRatio: 1,
        borderRadius: 10,
    },
    sponsorItemTitle:{
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 5,
        color: '#000000',
    },
    sponsorSelectWrapper:{
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 2,
        height: 2,
        borderRadius: 25,
        marginBottom: 20,
    },
});