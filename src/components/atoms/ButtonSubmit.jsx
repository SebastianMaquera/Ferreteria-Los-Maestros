import { Button } from 'react-bootstrap';

export function ButtonSubmit({ text, variant = 'primary', loading = false }) {
  return (
    <Button variant={variant} type="submit" className="w-100 py-2 fw-bold" disabled={loading}>
      {loading ? 'Cargando...' : text}
    </Button>
  );
}