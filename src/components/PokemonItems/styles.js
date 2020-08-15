import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.darkModerateBlue,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
    borderWidth: 1,
    borderColor: Colors.white
  },
  imageView: {
    width: '30%',
    minWidth: 55,
    height: 40
  },
  tinyLogo: {
    width: 50,
    height: 50
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-start',
    width: '70%',
    minWidth: 200,
    height: 40
  },
  name: {
    fontSize: 18,
    color: Colors.softRed,
    height: 40
  }
})

export default styles
