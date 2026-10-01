import './ErrorMessage.css'

const ErrorMessage = ({
  title = 'Something went wrong',
  message = "We couldn't load these movies. Please try again.",
}) => (
  <div className="error-message">
    <p className="error-message__title">{title}</p>
    <p className="error-message__body">{message}</p>
  </div>
)

export default ErrorMessage
