import * as Yup from "yup";

export const bookTutoriiing = Yup.object().shape({
  reserveName: Yup.string()
    .matches(/^([ a-zA-ZñÑáéíóúÁÉÍÓÚ]).{2,254}/, "Solo se permiten letras")
    .required("Los nombres son requeridos"),
  tutorId: Yup.string().required("Debe seleccionar la matería de la tutoría"),
  email: Yup.string()
    .matches(
      /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/,
      "Ingrese un email válido"
    )
    .required("El email es requerido"),
  date_start: Yup.string().required("La fecha de inicio es requerida"),
  date_end: Yup.string().required("La fecha de finalización es requerida"),
});
