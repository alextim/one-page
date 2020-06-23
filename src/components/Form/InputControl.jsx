/** @jsx jsx */
/* eslint-disable react/jsx-props-no-spreading */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const inputStyle = (p) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  width: '100%',
  height: '2.5rem',
  appearance: 'none',
  color: p.theme.form.input.color,
  backgroundColor: p.theme.form.input.bg,
  outline: 'none',
  borderRadius: '0.25rem',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderImage: 'initial',
  borderColor: `${p.invalid ? p.theme.colors.error.main : p.theme.form.input.border.color}`,
  boxShadow: `${p.invalid ? `${p.theme.colors.error.main} 0 0 0 1px` : 'initial'}`,
  transition: 'all 0.2s ease 0s',
  ':hober': {
    borderColor: `${p.theme.form.input.border.hover}`,
  },

  ':focus': {
    zIndex: 1,
    boxShadow: `${p.theme.form.input.border.focus} 0 0 0 1px`,
    borderColor: `${p.theme.form.input.border.focus}`,
  },
});

const Input = styled.input(inputStyle);

const textAreaStyle = (p) => ({
  ...inputStyle(p),
  height: '12rem',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  lineHeight: 1.5,
});

const TextArea = styled.textarea(textAreaStyle);

const FormLabel = styled.label`
  padding-bottom: 0.25rem;

  &::after {
    content: '${(p) => (p.isrequired ? '*' : '')}';
    color: red;
    margin-left: 0.25rem;
  }
`;

const FormErrorMessage = styled.div`
  color: ${(p) => p.theme.colors.error.main};
`;

const InputControl = ({ name, label, type, value, required, error, onChange, ...props }) => {
  return (
    <FormControl>
      {label && (
        <FormLabel htmlFor={name} isrequired={required}>
          {label}
        </FormLabel>
      )}
      <Input
        id={name}
        name={name}
        type={type || 'text'}
        required={required}
        value={value}
        invalid={error}
        onChange={onChange}
        {...props}
      />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

const TextAreaControl = ({ name, label, value, required, error, onChange, ...props }) => {
  return (
    <FormControl>
      {label && (
        <FormLabel htmlFor={name} isrequired={required}>
          {label}
        </FormLabel>
      )}
      <TextArea
        id={name}
        name={name}
        required={required}
        value={value}
        invalid={error}
        onChange={onChange}
        rows="10"
        {...props}
      />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export { TextAreaControl };
export default InputControl;
