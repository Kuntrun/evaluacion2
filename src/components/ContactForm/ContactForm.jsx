import { useState } from 'react';
import { Container, TextField, Button, Typography, Paper, Alert } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Nombre es requerido';
    if (!formData.email) {
      newErrors.email = 'Email es requerido';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email no válido';
    }
    if (!formData.message) newErrors.message = 'Mensaje es requerido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Formulario enviado:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">Contacto</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nombre"
            variant="outlined"
            margin="normal"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            label="Mensaje"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            error={!!errors.message}
            helperText={errors.message}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Enviar</Button>
          {isSubmitted && (
            <Alert severity="success" sx={{ mt: 2 }}>¡Mensaje enviado con éxito!</Alert>
          )}
        </form>
      </Paper>
    </Container>
  );
};

export default ContactForm;