"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateExcursion = exports.postExcursion = exports.deleteExcursion = exports.getExcursion = exports.getExcursions = void 0;
const getExcursions = (req, res) => {
    res.json({
        msg: 'get excursions',
    });
};
exports.getExcursions = getExcursions;
const getExcursion = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'get excursion',
        id,
    });
};
exports.getExcursion = getExcursion;
const deleteExcursion = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'delete excursion',
        id,
    });
};
exports.deleteExcursion = deleteExcursion;
const postExcursion = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'post excursion',
        body,
    });
};
exports.postExcursion = postExcursion;
const updateExcursion = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'update excursion',
        id,
        body,
    });
};
exports.updateExcursion = updateExcursion;
