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
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.darkBlue,
    marginBottom: 40,
    paddingLeft: 20,
    paddingTop: 20
  }
})

export default styles
