import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const typeHash = {
  default: 'btn-default',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  confirm: 'btn-confirm',
  raised: 'btn-raised',
}

class Button extends React.PureComponent {
  static propTypes = {
    type: PropTypes.string,
    large: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  }

  render () {
    const { type, large, className, ...buttonProps } = this.props

    return (
      <button
        className={classnames(
          'button',
          typeHash[type],
          large && 'btn--large',
          className
        )}
        {...buttonProps}
      >
        {this.props.children}
      </button>
    )
  }
}
export default Button
