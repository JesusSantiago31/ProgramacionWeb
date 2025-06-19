const API_URL = "http://localhost:3000/user";

export const register = async (email, password) => {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Error al registrar");
  }

  const data = await res.json();
  return data;
};

export const login = async (email, password) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    
    if (errorData.message === "Credenciales invalidas") {
      throw new Error("Usuario no registrado o contraseña incorrecta");
    }

    throw new Error(errorData.message || "Error al iniciar sesión");
  }

  const data = await res.json();
  const token = data.token.token; // asegurar que sea el string plano

  localStorage.setItem("token", token); // guardar token

  return token;
};
