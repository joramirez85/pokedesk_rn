import React from 'react'
import Item from './Item'

export default ({ item, navigation }) => (
  <Item
    urlImage={item.item.imageUrl}
    pokeName={item.item.name}
    url={item.item.url}
    index={item.item.index}
    navigation={navigation}
  />
)
