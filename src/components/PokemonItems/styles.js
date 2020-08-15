import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.darkModerateBlue,
    paddingTop: 20,
    paddingBottom: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.white
  },
  imageView: {
    width: '100%',
    minWidth: 55,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tinyLogo: {
    width: 70,
    height: 70
  },
  rightContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minWidth: 200,
    height: 50
  },
  name: {
    fontSize: 18,
    color: Colors.softRed,
    height: 40
  },
  pokeNumber: {
    paddingLeft: 20,
    fontSize: 18,
    height: 40,
    color: Colors.softRed
  }
})

export default styles
