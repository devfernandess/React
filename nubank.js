import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.olagui}>Olá, Guilherme</Text>
      </View>

      <View style={styles.container2}>
        <Text style={styles.t2}>Conta</Text>
        <Text style={styles.t2}>R$ 2.431,73</Text>
      </View>
        

      <View style={styles.container3}>
      
      <View style={styles.cont}>
      <View style={styles.bola}></View>
      <Text style={styles.textConfigs}>Pix</Text>
      </View>

      <View style={styles.cont}>
      <View style={styles.bola}></View>
      <Text style={styles.textConfigs}>Pagar</Text>
      </View>

      <View style={styles.cont}>
      <View style={styles.bola}></View>
      <Text style={styles.textConfigs}>Transferir</Text>
      </View>

      <View style={styles.cont}>
      <View style={styles.bola}></View>
      <Text style={styles.textConfigs}>Depositar</Text>
      </View>
      
      </View>

      <View style={styles.container4}>
      
      <View style={styles.card1}></View>
      <View style={styles.card2}></View>
      <Text style={styles.meucartao}>Meus Cartões</Text>
      
      </View>
      <View style={styles.linha}></View>

      <View style={styles.container5}>
      
      
      
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 0,
  },

  olagui: {
    fontSize: 20,
    position: 'absolute',
    bottom: 20,
    left: 20,
    color: 'white',
    fontWeight:600,
  },

  container1: {
    width: 'auto',
    height: 175,
    backgroundColor: '#8d25d1',
    top: 0,
  },

  container2: {
    width: 'auto',
    backgroundColor: 'white',
    height: 110,
    paddingLeft:20,
    paddingTop:20,
  },

  container3: {
    backgroundColor: 'white',
    width: 'auto',
    height: 140,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:20,
    paddingRight:20,
    textAlign:'center',
    

  },

  container4: {
    backgroundColor: '#E4E4EB',
    height: 70,
    borderRadius:20,
    margin:20,
    display:'flex',
    flexDirection:'row',
    padding:20,
    alignItems:'center',


  },

  linha: {
    height: 1,
    backgroundColor: 'grey',
  },

  t2:{
    color:'black',
    fontSize:20,
    marginBottom:10,
    fontWeight:600,
  },

  bola:{
    height:70,
    width:70,
    borderRadius:50,
    backgroundColor:'#E4E4EB',
    marginTop:20,
    marginBottom:10,
  },

  cont:{
    alignItems:'center',
    fontSize:20,

  },

  textConfigs:{
    fontWeight:500,
    fontSize:15,
  },

  card1:{
    height:32,
    width:22,
    backgroundColor:'#E4E4EB',
    borderRadius:5,
    borderWidth:1,
    marginLeft:10,

  },

  card2:{
    height:32,
    width:22,
    backgroundColor:'#E4E4EB',
    borderRadius:5,
    borderWidth:1,
    position:'absolute',
    top:15,
    left:25,

  },

  meucartao:{
    marginLeft:20,
    fontSize:15,
    fontWeight:400,
    
  }




});
