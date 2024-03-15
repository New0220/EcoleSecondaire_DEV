import Note from '../Models/Note.js';
import { validationResult } from 'express-validator';

export const addNote = async (req, res) => {
    // Vérification des erreurs de validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { EleveID, CoursID, Valeur } = req.body;
        const newNote = await Note.create({ EleveID, CoursID, Valeur });
        res.status(201).json(newNote);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'ajout de la note", error: error.message });
    }
};

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.findAll();
        res.status(200).send(notes);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getNoteById = async (req, res) => {
    try {
        const note = await Note.findByPk(req.params.id);
        if (note) {
            res.status(200).send(note);
        } else {
            res.status(404).send({ message: 'Note non trouvée' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateNote = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        let note = await Note.findByPk(id);

        if (!note) {
            return res.status(404).json({ message: "Note non trouvée" });
        }

        const { EleveID, CoursID, Valeur } = req.body;
        note = await note.update({ EleveID, CoursID, Valeur });

        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour de la note", error: error.message });
    }
};

export const deleteNote = async (req, res) => {
    try {
        const deleted = await Note.destroy({
            where: { NoteID: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Note non trouvée' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
