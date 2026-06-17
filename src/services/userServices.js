import jwt from "jsonwebtoken";
import { createUser, findByEmail } from "../utils/validatePayload.js";
import { signAuthToken } from "../utils/jsonWebToken.js";

export function registerUserService({ name, email, password }) {
  try {
    const user = createUser({ name, email, password });
    return user;
  } catch (error) {
    throw new Error("Error al registrar el usuario");
  }
}

export function loginUserService(user) {
  try {
    // Genero el token
    const token = signAuthToken(user.email);
    return token;
  } catch (error) {
    throw new Error("Error al loguearse");
  }
}

export function getProfileService(token) {
  try {
    const { email } = jwt.verify(token, process.env.JWT_SECRET);
    const user = findByEmail(email);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    return user;
  } catch (error) {
    throw new Error("Error al obtener el perfil");
  }
}