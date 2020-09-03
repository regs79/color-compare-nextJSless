import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from './Button'

const Form = ({
  handleChange,
  handleSubmit,
  hasError,
  label,
  isVisible,
  value,
}) => {
  const inputRef = useRef(null)

  useEffect(() => {
    if (isVisible) {
      inputRef.current.focus()
    }
  }, [isVisible])

  return (
    <form>
      <InputWrap>
        <Input
          id="color"
          onChange={handleChange}
          placeholder="Enter a color"
          ref={inputRef}
          value={value}
        />
        <Button
          handleClick={handleSubmit}
          color="#1dab3e"
          // icon={<Plus />}
          label={label}
          textColor="#ffffff"
          variant="text"
        />
      </InputWrap>
      {hasError && 'Invalid format'}
    </form>
  )
}

Form.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  hasError: PropTypes.bool,
  label: PropTypes.string.isRequired,
  isVisible: PropTypes.func,
  value: PropTypes.string,
}

Form.defaultProps = {
  handleChange: () => {},
  handleSubmit: () => {},
  hasError: false,
  isVisible: false,
  value: '',
}

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  padding: 4px 8px;
  margin-right: 20px;
  height: 44px;
  font-size: 24px;
  border: none;
  border-bottom: 1px solid #dcdcdc;
  &:focus {
    outline: 2px solid #42a5f5;
  }
`

export default Form
