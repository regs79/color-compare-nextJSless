import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = ({ color, handleClick, icon, label, textColor, variant }) => {
  return (
    <StyledButton
      aria-label={label}
      color={color}
      onClick={handleClick}
      textColor={textColor}
      variant={variant}
    >
      {variant !== 'icon' && label ? (
        <ButtonLabel icon={icon}>{label}</ButtonLabel>
      ) : null}
      {icon ? <ButtonIcon>{icon}</ButtonIcon> : null}
    </StyledButton>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.instanceOf(Object),
  label: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  variant: PropTypes.oneOf(['icon', 'text']).isRequired,
}

Button.defaultProps = {
  color: '#ffffff',
  icon: null,
  textColor: '#333333',
}

const StyledButton = styled.button`
  background-color: ${(props) => (props.color ? props.color : '#ffffff')};
  color: ${(props) => (props.textColor ? props.textColor : '#333333')};
  border: none;
  border-radius: ${(props) => (props.variant === 'icon' ? '30px' : '4px')};
  display: inline-flex;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.variant === 'icon' ? '60px' : '40px')};
  padding: ${(props) => (props.variant === 'icon' ? '0' : '20px')};
  &:hover {
    opacity: 0.8;
  }
  width: ${(props) => (props.variant === 'icon' ? '60px' : 'auto')};
`

const ButtonLabel = styled.span`
  margin-right: ${(props) => (props.icon ? '10px' : null)};
  font-size: 16px;
`

const ButtonIcon = styled.span``

export default Button
