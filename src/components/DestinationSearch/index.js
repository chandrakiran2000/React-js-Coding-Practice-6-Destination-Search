// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {text: ''}

  userEnterSearch = event => {
    // console.log(event.target.value)
    this.setState({text: event.target.value})
  }

  render() {
    const {text} = this.state
    console.log(text)

    const {destinationsList} = this.props
    // console.log(destinationsList)

    const userText = destinationsList.filter(each =>
      each.name.toLowerCase().includes(text.toLowerCase()),
    )

    return (
      <div className="bg-card">
        <div className="heading-card">
          <h1 className="heading">Destination Search</h1>
          <div className="search-card">
            <input
              type="search"
              className="search"
              onChange={this.userEnterSearch}
              value={text}
              placeholder="search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-img"
              alt="search icon"
            />
          </div>
        </div>
        <ul className="main-destination-card">
          {userText.map(eachPlace => (
            <DestinationItem place={eachPlace} key={eachPlace.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
