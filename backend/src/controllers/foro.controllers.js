import Foro from "../models/Foro";

// Crear un nuevo tema en el foro
export const createTopic = async (req, res) => {
    try {
        const { id, userId, title, body } = req.body;
        const newTopic = new Foro({ id, userId, title, body });
        await newTopic.save();
        res.status(201).json(newTopic);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todos los temas del foro
export const getAllTopics = async (req, res) => {
    try {
        const topics = await Foro.find();
        res.status(200).json(topics);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener un tema por su ID
export const getTopicById = async (req, res) => {
    try {
        const topic = await Foro.findById({_id: req.params.id});
        if (!topic) {
            return res.status(404).json({ error: "Tema no encontrado" });
        }
        res.status(200).json(topic);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar un tema por su ID
export const updateTopic = async (req, res) => {
    try {
        const topic = await Foro.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!topic) {
            return res.status(404).json({ error: "Tema no encontrado" });
        }
        res.status(200).json(topic);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un tema por su ID
export const deleteTopic = async (req, res) => {
    try {
        const deletedTopic = await Foro.findByIdAndDelete(req.params.id);
        if (!deletedTopic) {
            return res.status(404).json({ error: "Tema no encontrado" });
        }
        res.status(200).json({ message: "Tema eliminado correctamente" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};