import { StatusBar, StyleSheet } from 'react-native'

import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center'
  },
  tinyLogo: {
    width: 200,
    height: 200
  },
  title: {
    fontSize: 20,
    color: Colors.darkBlue,
    paddingLeft: 10,
    width: 300
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.softRed
  },
  details: {
    minHeight: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.darkBlue
  },
  pokeNumber: {
    paddingLeft: 10,
    fontSize: 20,
    height: 40,
    color: Colors.darkBlue
  },
  pokeNumberContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    minWidth: 200,
    height: 50
  }
})

export default styles
