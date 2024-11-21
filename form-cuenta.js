const form2 = document.querySelector('form[name="form-cuenta"]');

form2.addEventListener("submit", (event) => {
  const Fcorreo = form2.elements["Fcorreo"].value;
  const Fcontraseña = form2.elements["Fcontraseña"].value;

  // Verificar que ambos campos estén completos
  if (!Fcontraseña || !Fcorreo) {
    event.preventDefault();
    alert("Por favor, complete ambos campos.");
    return;
  }

  // Validar que la contraseña cumpla con el mínimo de caracteres y carácter especial
  else if (!validarLongitud(Fcontraseña)) {
    event.preventDefault();
    alert("La contraseña debe tener al menos 8 caracteres.");
    return;
  } else if (!validarCaracterEspecial(Fcontraseña)) {
    event.preventDefault();
    alert("La contraseña debe incluir al menos un carácter especial.");
    return;
  }

  // Validar que ambas contraseñas coincidan
  else if (!validateCorreo(Fcorreo)) {
    event.preventDefault();
    alert("Correo no valido.");
    return;
  }

  // Si todo está correcto, enviar formulario
  alert("Formulario enviado correctamente.");
  form1.submit();
});

// Validar longitud mínima de la contraseña (al menos 8 caracteres)
function validarLongitud(fcontrasenia) {
  return fcontrasenia.length >= 8;
}

// Validar que contenga al menos un carácter especial
function validarCaracterEspecial(fcontrasenia) {
  const re = /[!@#$%^&*(),.?":{}|<>]/;
  return re.test(String(fcontrasenia).toLowerCase());
}

// Comparar contraseñas
function validateCorreo(Fcorreo) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]/;
  return re.test(String(Fcorreo).toLowerCase());
}
