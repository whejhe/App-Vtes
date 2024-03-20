import User from "../models/user.models.js";
import { permissions } from '../middlewares/permissions.js';

// Iniciar sesión de usuario
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Buscar el usuario por email y contraseña
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ error: "Credenciales inválidas" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Registrar un nuevo usuario
export const registerUser = async (req, res) => {
    try {
        const { name, nick, email, password } = req.body;
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "El usuario ya existe" });
        }
        // Crear un nuevo usuario
        const newUser = new User({ name, nick, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Crear un usuario
export const createUser = async (req, res) => {
    try {
        // Verificar si el usuario tiene permisos de administrador
        if (!req.user.permissions.includes('editUserRoles')) {
            return res.status(403).json({ error: 'Acceso denegado' });
        }
        const { id, role, name, nick, email, password } = req.body;
        const user = new User({ id, role, name, nick, email, password });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Leer todos los usuarios
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Leer un usuario por ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById({_id:req.params.id});
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar un usuario por ID
export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate({_id:req.params.id}, req.body, {
            new: true,
        });
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un usuario por ID
export const deleteUser = async (req, res) => {
    try {
        // Verificar si el usuario tiene permisos de administrador
        if (!req.user.permissions.includes('deleteUser')) {
            return res.status(403).json({ error: 'Acceso denegado' });
        }
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};