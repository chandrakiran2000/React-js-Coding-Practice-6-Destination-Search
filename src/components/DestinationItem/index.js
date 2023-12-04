// Write your code here
import './index.css'

const DestinationItem = props => {
  const {place} = props
  const {imgUrl, name} = place

  return (
    <li>
      <div className="place-card">
        <img className="place-img" src={imgUrl} alt={name} />
        <p className="place-name"> {name} </p>
      </div>
    </li>
  )
}

export default DestinationItem
