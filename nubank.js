import { ScrollView, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.perfil}><MaterialIcons name="person" size={35} color="white"  /></View>
        <View style={styles.is}>
        <View style={styles.i}> <MaterialIcons name="visibility" size={20} color="white"  /></View>
        <View style={styles.i}><MaterialIcons name="help" size={20} color="white"  /></View>
        <View style={styles.i}><MaterialIcons name="person-add" size={20} color="white"  /></View>
        </View>
        

        <Text style={styles.olagui}>Olá, Guilherme</Text>
      </View>

      <View style={styles.container2}>
        <Text style={styles.t2}>Conta</Text>
        <Text style={styles.t2}>R$ 2.431,73</Text>
      </View>
        

      <View>
      
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container3}>
        <View style={styles.cont}>
        <View style={styles.bola}> <MaterialIcons name="pix" size={30} color="black" /></View>
        <Text style={styles.textConfigs}>Pix</Text>
        </View>

        <View style={styles.cont}>
        <View style={styles.bola}> <MaterialIcons name="money" size={30} color="black" /></View>
        <Text style={styles.textConfigs}>Pagar</Text>
        </View>

        <View style={styles.cont}>
        <View style={styles.bola}> <MaterialIcons name="account-balance-wallet" size={30} color="black" /></View>
        <Text style={styles.textConfigs}>Transferir</Text>
        </View>

        <View style={styles.cont}>
        <View style={styles.bola}> <MaterialIcons name="account-balance" size={30} color="black" /></View>
        <Text style={styles.textConfigs}>Depositar</Text>
        
      </View>

      <View style={styles.cont}>
        <View style={styles.bola}></View>
        <Text style={styles.textConfigs}>Depositar</Text>
        
      </View>
      
      
      </ScrollView>
      
      </View>

      <View style={styles.container4}>
      
      <View style={styles.card1}></View>
      <View style={styles.card2}></View>
      <Text style={styles.meucartao}>Meus Cartões</Text>
      
      </View>
      <View style={styles.linha}></View>

      <View style={styles.container5}>
      
      <View style={styles.card3}></View>
      <Text style={styles.ccredito}>Cartão de crédito</Text>
      <Text style={styles.fmensal}>Fatura mensal</Text>
      <Text style={styles.valorfatura}>R$ 1.094,80</Text>
      <Text style={styles.ldisponivel}>Limite disponível R$ 2.429,20</Text>
      
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
    padding:20,
  },

  container2: {
    width: 'auto',
    backgroundColor: 'white',
    height: 110,
    paddingLeft:20,
    paddingTop:20,
  },

  container3: {
   display:'flex',
   flexDirection:'row',
   width:'auto',
   paddingLeft:20,
   gap:40,
   
    

  },

  container4: {
    backgroundColor: '#E4E4EB',
    height: 65,
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
    opacity:0.4,
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
    justifyContent:'center',
    alignItems:'center',
  },

  cont:{
    alignItems:'center',
    fontSize:20,
    marginRight:20,

  },

  textConfigs:{
    fontWeight:500,
    fontSize:15,
  },

  card1:{
    height:26,
    width:20,
    backgroundColor:'#E4E4EB',
    borderRadius:5,
    borderWidth:2,
    marginLeft:10,

  },

  card2:{
    height:26,
    width:20,
    backgroundColor:'#E4E4EB',
    borderRadius:5,
    borderWidth:2,
    position:'absolute',
    top:15,
    left:25,

  },

  meucartao:{
    marginLeft:20,
    fontSize:15,
    fontWeight:500,
    
  },

  container5:{
    padding:20,
  },

  card3:{
    height:26,
    width:20,
    borderWidth:2,
    borderRadius:5,

  },

  ccredito:{
    marginTop:15,
    fontSize:17,
    marginBottom:20,
    fontWeight:500,
  },

  fmensal:{
    fontWeight:500,
    opacity:0.7,
    marginBottom:6,
  },

  valorfatura:{
    fontSize:18,
    fontWeight:600,
    marginBottom:8,
  },

  ldisponivel:{
    opacity:0.8,
    fontWeight:500,
  },

  perfil:{
    marginTop:10,
    backgroundColor:"rgba(255,255,255,0.5)",
    height:50,
    width:50,
    borderRadius:30,
    opacity:1,
    alignItems:'center',
    justifyContent:'center',


  },

  is:{
    marginTop:40,
    height:40,
    width:100,
    position:'absolute',
    flexDirection:'row',
    right:20,
    justifyContent:"space-between",
    alignItems:'center',
  },

  i:{
    backgroundColor:"rgba(255,255,255,0)",
    height: 30,
    width:30,
    borderRadius:30,
    opacity:1,
    justifyContent:'center',
    alignItems:'center',
  }




});
