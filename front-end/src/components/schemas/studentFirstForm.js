import * as Yup from "yup";

export const firstForm = Yup.object().shape({
  studentName: Yup.string()
    .matches(/^([ a-zA-ZñÑáéíóúÁÉÍÓÚ]).{2,254}/, "only letters are allowed")
    .required("Los nombres son requeridos"),
  surnameStudent: Yup.string()
    .matches(/^([ a-zA-ZñÑáéíóúÁÉÍÓÚ]).{2,254}/, "only letters are allowed")
    .required("Los apellidos son requeridos"),
  documentType: Yup.string()
    .oneOf(
      [
        "Cédula de ciudadanía",
        "Tarjeta de identidad",
        "Número de pasaporte",
        "Cédula de extranjería",
      ],
      "Debe seleccionar el tipo de documento"
    )
    .required("Select a genre"),
  documentNumber: Yup.string()
    .matches(/^([0-9]).{1,20}$/, "Ingrese un identificación válida")
    .required("El número de documento es requerido"),
  emailStudent: Yup.string()
    .matches(
      /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/,
      "write a valid email"
    )
    .required("Email is required"),
  gender: Yup.string()
    .oneOf(
      ["Masculino", "Femenino", "Otro", "Prefiero no responder"],
      "Debe seleccionar una opción"
    )
    .required("Esta opción es requerida"),
});
