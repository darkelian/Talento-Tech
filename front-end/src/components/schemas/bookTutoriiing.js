import * as Yup from "yup";

export const bookTutoriiing = Yup.object().shape({
  reserveName: Yup.string()
    .matches(/^([ a-zA-ZñÑáéíóúÁÉÍÓÚ]).{2,254}/, "Solo se permiten letras")
    .required("Los nombres son requeridos"),
  reserveEmail: Yup.string()
    .matches(
      /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/,
      "Ingrese un email válido"
    )
    .required("El email es requerido"),
  reserveDate: Yup.string().required("La fecha es requerida"),
  reserveHour: Yup.string().required("La hora es requerida"),
  reserveSubject: Yup.string()
    .oneOf(
      ["Matemáticas", "Física", "Química", "Biología", "Inglés", "Historia"],
      "Debe seleccionar la matería de la tutoría"
    )
    .required("Debe seleccionar la matería de la tutoría"),
});
