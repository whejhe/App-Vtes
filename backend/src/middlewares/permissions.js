import User from "../models/user.models.js";

export const permissions = {
    ADMIN: ['editUserRoles', 'deleteUser'],
    USER: ['viewProfile', 'editProfile'],
    COLLABORATOR: ['createEvent', 'createForum'],
    GUEST: []
};


export const updateUserPermissions = async (req, res) => {
    try {
        const { userId, permissions } = req.body;
        // Verificar si el usuario que realiza la acción es un administrador
        if (req.user.role !== 'ADMIN') {
            return res.status(403).json({ error: 'Acceso denegado' });
        }
        // Actualizar los permisos del usuario
        const user = await User.findByIdAndUpdate(userId, { permissions }, { new: true });
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Verificar si el usuario tiene permisos para realizar la acción
export const checkPermissions = (requiredPermissions) => (req, res, next) => {
    const userPermissions = req.user.permissions || [];
    const hasPermissions = requiredPermissions.every(permission => userPermissions.includes(permission));
    if (!hasPermissions) {
        return res.status(403).json({ error: 'Acceso denegado' });
    }
    next();
};
