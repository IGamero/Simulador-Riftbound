// Valida que los campos no estén vacíos
export const validateEmpty = (...fields: string[]): string | false => {
    for (const field of fields) {
        if (!field || field.trim() === "") {
            return "Por favor completa todos los campos";
        }
    }
    return false;
};

// Validar email
export const validateEmail = (email: string): string | false => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return ("Introduce un email válido");
    }
    return false
}

export const validateMatchPassword = (password: string, confirmPassword: string): string | false => {
    console.log(password, confirmPassword)
    if (password !== confirmPassword) {
        return ("Las contraseñas no coinciden");
    }
    return false
}


// // Validar contraseña coincida
// if (password !== confirmPassword) {
//     setError("Las contraseñas no coinciden");
//     return;
// }

