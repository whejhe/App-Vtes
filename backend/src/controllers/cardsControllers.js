// Importa el modelo de Cards
import Cards from "../models/cards.model.js";

// Crear una nueva carta
const createCard = async (req, res) => {
    try {
        const { deckId, name, image, description, type } = req.body;
        const newCard = new Cards({ deckId, name, image, description, type });
        await newCard.save();
        res.status(201).json(newCard);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todas las cartas de un mazo
const getCardsByDeckId = async (req, res) => {
    try {
        const { deckId } = req.params;
        const cards = await Cards.find({ deckId });
        res.status(200).json(cards);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar la información de una carta
const updateCard = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, image, description, type } = req.body;
        const updatedCard = await Cards.findByIdAndUpdate(id, { name, image, description, type }, { new: true });
        if (!updatedCard) {
            return res.status(404).json({ error: "Carta no encontrada" });
        }
        res.status(200).json(updatedCard);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una carta
const deleteCard = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCard = await Cards.findByIdAndDelete(id);
        if (!deletedCard) {
            return res.status(404).json({ error: "Carta no encontrada" });
        }
        res.status(200).json({ message: "Carta eliminada correctamente" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export {
    createCard,
    getCardsByDeckId,
    updateCard,
    deleteCard
};