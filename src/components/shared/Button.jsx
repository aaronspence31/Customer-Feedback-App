//import { isDisabled } from '@testing-library/user-event/dist/utils'
import PropTypes from 'prop-types'

//wrapping component around the text for the button
//this makes it more general and can use it for any button
//that we need
//version is the button version we want for styling
function Button({children, version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}

Button.protoTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}

export default Button