import PropTypes from 'react-proptypes'
import './ErrorMessage.scss'

const ErrorMessage = ({ message }) => (
  <h3 className="error-message">{message}</h3>
)

ErrorMessage.propTypes = {
  message: PropTypes.string
}
ErrorMessage.defaultProps = {
  message: "There has been a problem with your request. Please try again!"
}
export default ErrorMessage
