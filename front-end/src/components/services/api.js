const urlAPI = 'http://localhost:4000/api/'

export const fetchDepartments = async () => {
    const response = await fetch(`${urlAPI}cities/departments`);
    if (!response.ok) {
        throw new Error('Error fetching departments');
    }
    const data = await response.json();
    return data.sort((a, b) => a.name.localeCompare(b.name));   // devuelve los departamentos ordenados alfabéticamente
};

export const fetchCities = async (department) => {
    const response = await fetch(`${urlAPI}cities/departments/cities?name=${department}`);
    if (!response.ok) {
        throw new Error('Error fetching cities');
    }
    const data = await response.json();
    return data.sort((a, b) => a.name.localeCompare(b.name));    //devuelve las ciudades ordenadas alfabéticamente
};

export const setTutorInfo = async (values) => {

    const response = await fetch(`${urlAPI}tutor/new`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    });
    if (!response.ok) {
        console.log(response)
        throw new Error('Error al enviar la información del tutor');
    }
    return response.json();
};

