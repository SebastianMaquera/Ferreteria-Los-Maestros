import { Form } from 'react-bootstrap';
import { Input } from '../atoms/Input';

export function FormFieldGroup({ label, type, placeholder, value, onChange, errorText }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="fw-semibold">{label}</Form.Label>
      <Input type={type} placeholder={placeholder} value={value} onChange={onChange} required />
      {errorText && <Form.Text className="text-danger">{errorText}</Form.Text>}
    </Form.Group>
  );
}