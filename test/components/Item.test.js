import React from 'react'
import renderer from 'react-test-renderer'

import Item from '../../src/components/PokemonItems/Item'

describe('<Item />', () => {
  it('render Item', () => {
    const tree = renderer.create(<Item />).toJSON()
    expect(tree.children.length).toBe(3)
  })

  it('Has correct children', () => {
    const tree = renderer.create(<Item />).toJSON()
    expect(tree.children[0].children[0].type).toBe('Text')
    expect(tree.children[1].children[0].type).toBe('Image')
    expect(tree.children[2].children[0].type).toBe('Text')
  })
})
