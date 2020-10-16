import React  from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.input`
  width: 100%;
  padding: 10px;
  border: solid 1px #888;
  border-radius: 5px;
`;

const Input = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Container
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
