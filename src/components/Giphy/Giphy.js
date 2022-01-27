import PropTypes from "react-proptypes";
import './Giphy.scss'

const Giphy = ({giphy}) => (
  <img
    className="giphy"
    src={giphy.images.downsized.url} alt="giphy.title"/>
)

Giphy.propTypes = {
}
Giphy.defaultProps = {
}

export default Giphy
