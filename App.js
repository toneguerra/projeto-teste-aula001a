import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import avatar from './src/img/esponjaFace.jpg';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.avatarBox}>
        <View style={styles.avatarImg}>
          <img src={avatar} style={styles.avatar} />
        </View>

        <View style={styles.avatarBoxOptions}>
          <img src={require('./src/img/whatsapp-status.png')} style={styles.status} />
          <img src={require('./src/img/messages-icon.png')} style={styles.status} />
          <img src={require('./src/img/hamb.png')} style={styles.status} />
        </View>
      </View>

      <View style={{width:'100%'}}>
        <Text style={{textAlign:'left'}}>Um texto</Text>
      </View>

      <View style={{width:'50%'}}>
        <Text style={{textAlign:'right'}}>Outro Texto</Text>
      </View>



    <View style={styles.yourContainer}>
      <View style={styles.yourBox}>
        <Text style={styles.yourText}>Olá! Td bem com você?</Text>
      </View>
    </View>

  
    
    <View style={styles.meContainer}>
      <View style={styles.meBox}>
        <Text style={styles.meText}>Oi! É não lembro de você. Quem está falando?</Text>
      </View>
    </View>





      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6F0072',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  avatarImg:{
    flex:1,
  },

  avatarBox:{
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor:'#56053F',
    padding:20,
  },

  avatarBoxOptions:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
  },

  avatar:{
    margin:10,
    height: 60,
    width:60,
    borderRadius: 50,
    backgroundColor:'#000',
    padding:1
  },

  status:{
    height:40,
    width:40
  },

  meContainer:{
    flexDirection:'row',
    justifyContent: 'flex-end',
    margin:10
  },

  meBox:{
    backgroundColor:'#0BC3B8', 
    width:'50%',
    padding: 10,
    borderRadius:10,
  },
  
  meText:{
    color:'#fff',
  },

  yourContainer:{
    flexDirection:'row',
    justifyContent: 'flex-start',
    margin:10
  },

  yourBox:{
    backgroundColor:'#C9C56C', 
    width:'50%',
    padding: 10,
    borderRadius:10,
  },
  
  yourText:{
    color:'#676767',
    fontWeight:'bold'
  }

});
