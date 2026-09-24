import { Form } from 'react-bootstrap';

export function Input({ type = 'text', placeholder, value, onChange, required = false }) {
  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}