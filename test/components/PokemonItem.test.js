import React from 'react'
import renderer from 'react-test-renderer'

import PokemonItem from '../../src/components/PokemonItems/PokemonItem'

describe('<PokemonItem />', () => {
  it('render PokemonItem', () => {
    const item = {
      item: {
        imageUrl: 'url/img',
        name: 'pokename',
        url: 'url/api',
        index: 1,
        navigation: {
          navigate: jest.fn()
        }
      }
    }
    const tree = renderer.create(<PokemonItem item={item} />).toJSON()
    expect(tree.children.length).toBe(3)
  })
})
