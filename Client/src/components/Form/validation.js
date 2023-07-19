export default function validateForm(userData) {
  const errors = {};

  // Validación de correo electrónico
  if (!userData.email) {
    errors.email = "El correo electrónico es requerido.";
  } else if (
    !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(userData.email)
  ) {
    errors.email = "El correo electrónico no es válido.";
  } else if (userData.email.length > 35) {
    errors.email = "El correo electrónico no puede tener más de 35 caracteres.";
  }

  // Validación de contraseña
  if (!userData.password) {
    errors.password = "La contraseña es requerida.";
  } else if (!/\d/.test(userData.password)) {
    errors.password = "La contraseña debe contener al menos un número.";
  } else if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres.";
  }

  return errors;
}
