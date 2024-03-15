import { Router } from "express";
import { login } from "../Authentification/Login.js";
import loginRules from "../validations/validationLogin.js";

const authRoute = Router();

// Configurez la route POST pour le login
authRoute.post('/login', loginRules, login);

export default authRoute;
