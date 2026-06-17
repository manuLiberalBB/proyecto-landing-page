import bcrypt from "bcryptjs";

import { findByEmail, emailExists } from "../utils/validatePayload.js";
import { getJwtCookieOptions, getTokenFromCookie } from "../utils/jsonWebToken.js";
import { getProfileService, loginUserService, registerUserService } from "../services/userServices.js";

export function loginUser(req, res) {
  // Obtengo el mail y el password
  const { email, password } = req.body;
  // Valido que el mail y el password no esten vacios
  if (!email?.trim() || !password) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  // Busco el usuario en la base de datos

  const userMatch = findByEmail(email);
  if (!userMatch || !bcrypt.compareSync(password, userMatch.password)) {
    return res.status(401).json({ error: "Error durante el login" });
  }
  try {
    const token = loginUserService(userMatch);
    // Seteo el token en la cookie
    res.cookie("jwt", token, getJwtCookieOptions());
    console.log("Usuario Logueado Correctamente");
    return res.status(200).json({ userMatch, token });
  } catch (error) {
    console.log("Error al loguearse", error);
    return res.status(500).json({ error: "Error al loguearse" });
  }
}
export function registerUser(req, res) {
  // Obtengo el nombre, el email y el password
  const { name, email, password } = req.body;
  // Valido que los campos no esten vacios
  if (!name?.trim() || !email?.trim() || !password) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }
  // Valido que el email no este registrado
  if (emailExists(email)) {
    return res.status(400).json({ error: "El email ya está registrado" });
  }
  try {
    // Hashizo el password
    const passwordHash = bcrypt.hashSync(password, 10);
    // Creo el usuario
    const user = registerUserService({ name, email, passwordHash });
    console.log("Usuario Registrado Correctamente");
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ error: "Error al registrar el usuario" });
  }
}
export function getProfile(req, res) {
  const token = getTokenFromCookie(req.headers.cookie);
  if (!token) {
    return res.status(401).json({ error: "No autorizado" });
  }
  try {
    const profile = getProfileService(token);
    return res.status(200).json(profile);
  } catch (error) {
    return res.status(401).json({ error: error.message ?? "No autorizado" });
  }
} 
export function verifyAuthToken(req, res) {
  const token = getTokenFromCookie(req.headers.cookie);
  if (!token) {
    return res.status(401).json({ error: "No autorizado" });
  }
  try {
    const profile = getProfileService(token);
    return res.status(200).json(profile);
  } catch (error) {
    return res.status(401).json({ error: error.message ?? "No autorizado" });
  }
}