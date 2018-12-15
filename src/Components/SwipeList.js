import React from 'react'
import SwipeItem from './SwipeTabs'

export default class SwipeList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 1,
      items: {
        0: 'http://lorempixel.com/350/65/',
      },
    }
  }

  addImage() {
    const { counter, items } = this.state
    this.setState({
      counter: counter + 1,
      items: { ...items, [counter]: 'http://lorempixel.com/350/65/' },
    })
  }

  removeItem(keyOfItemToRemove) {
    const nextItems = {}
    Object.keys(this.state.items).forEach(itemKey => {
      if (itemKey !== keyOfItemToRemove) {
        nextItems[itemKey] = this.state.items[itemKey]
      }
    })

    this.setState({ items: nextItems })
  }

  render() {
    return (
      <ul className="swipeList">
        {Object.keys(this.state.items).map(itemKey => (
          <SwipeItem key={`swipeItem-${itemKey}`} onRemoval={() => this.removeItem(itemKey)}>
            <img src={this.state.items[itemKey]} alt="just it" />
          </SwipeItem>
        ))}
        <button type="button" className="swipeList-addButton" onClick={() => this.addImage()}>
          Add image...
        </button>
      </ul>
    )
  }
}
