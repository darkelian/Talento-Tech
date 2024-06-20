import * as Yup from "yup";

export const secondForm = Yup.object().shape({
  age: Yup.number()
    .typeError("Solo se permiten números")
    .min(1)
    .max(130, "Ingrese una edad válida")
    .required("Edad es requerida"),
  residenceDepartment: Yup.string()
    .oneOf(
      [
        "Selecciona una opción",
        "Bogotá D.C",
        "Cundinamarca",
        "Medellin",
        "Cali",
      ],
      "Debe seleccionar el departamento de residencia"
    )
    .required("Debe seleccionar el departamento de residencia"),
  phoneNumber: Yup.number()
    .typeError("Solo se permiten números")
    .min(1)
    .required("Teléfono es requerido"),
  password: Yup.string()
    .required("La contraseña es requerida.")
    .min(8, "La contraseña debe contener mínimo 8 caracteres."),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir.")
    .required("La confirmación es requerida."),
  dataTreatment: Yup.bool()
    .oneOf([true], "Debe aceptar los términos y condiciones")
    .required("La confirmación es requerida."),
});
