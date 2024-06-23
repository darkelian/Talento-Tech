import React, { useCallback, useState, useEffect } from "react";
import { fetchCities, fetchDepartments, setTutorInfo } from '../services/api'

const TutorContext = React.createContext();

const validate = (values) => {
    const errors = {};
    const namePattern = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!values.name) {
        errors.name = 'Ingresa el nombre';
    } else if (!namePattern.test(values.name)) {
        errors.name = 'El nombre ingresado es inválido';
    }

    if (!values.lastName) {
        errors.lastName = 'Ingresa el apellido';
    } else if (!namePattern.test(values.lastName)) {
        errors.lastName = 'El apellido ingresado es inválido';
    }

    if (values.documentType === '') {
        errors.documentType = 'Selecciona el tipo de documento';
    }

    if (!values.documentNumber) {
        errors.documentNumber = 'Ingresa el número de documento';
    }

    if (!values.department) {
        errors.department = 'Selecciona el departamento';
    }

    if (!values.city) {
        errors.city = 'Selecciona la ciudad';
    }

    if (!values.telephoneNumber) {
        errors.telephoneNumber = 'Ingresa el número de teléfono o celular';
    }

    if (!values.email) {
        errors.email = 'Ingresa el correo electrónico';
    } else if (!emailPattern.test(values.email)) {
        errors.email = 'El correo electrónico ingresado es inválido';
    }

    if (!values.password) {
        errors.password = 'Ingresa la contraseña';
    }

    if (!values.passwordConfirm) {
        errors.passwordConfirm = 'Ingresa la confirmación de la contraseña';
    } else if (values.password !== values.passwordConfirm) {
        errors.passwordConfirm = 'La confirmación de contraseña no coincide con la contraseña';
    }

    return errors;
};

export function TutorRegistrationProvider({ children }) {
    const [formSended, setFormSended] = useState(false);
    const [departments, setDepartments] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState('');

    useEffect(() => {
        const loadDepartments = async () => {
            try {
                const data = await fetchDepartments();
                const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
                setDepartments(sortedData);
            } catch (error) {
                console.error(error);
            }
        };
        loadDepartments();
    }, []);

    const handleDepartmentChange = async (e) => {
        const departmentId = e.target.value;
        setSelectedDepartment(departmentId);

        // Buscar el nombre del departamento seleccionado
        const selectedDept = departments.find(dept => dept.id === parseInt(departmentId, 10));
        const departmentName = selectedDept ? selectedDept.name : '';

        try {
            // Llamar a la API para obtener las ciudades del departamento
            const citiesData = await fetchCities(departmentName); // Suponiendo una función fetchCitiesByDepartment que llama a la API
            const sortedData = citiesData.sort((a, b) => a.name.localeCompare(b.name));
            setCities(sortedData);
        } catch (error) {
            debugger
            console.error(error);
            setCities([]); // Manejo de error: establecer ciudades como un array vacío
        }
    };

    const handleSubmit = async (values, { resetForm }) => {
        const response = await setTutorInfo(values);
        resetForm();
        setFormSended(true);
        setTimeout(() => {
            setFormSended(false);
        }, 5000);
    };

    const contextValue = {
        formSended,
        handleSubmit,
        validate,
        departments,
        handleDepartmentChange,
        selectedDepartment,
        cities,
    };

    return (
        <TutorContext.Provider value={contextValue}>
            {children}
        </TutorContext.Provider>
    );
}

export default TutorContext;
