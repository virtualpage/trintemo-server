"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.step = exports.message = exports.notDrink = exports.drink = exports.notConfirmation = exports.confirmation = exports.newGuest = exports.guests = void 0;
const errors_1 = require("../utils/errors");
const trintemo_service_1 = require("./trintemo.service");
const guests = async (req, res) => {
    try {
        const guests = await (0, trintemo_service_1.guestsService)();
        res.status(200).json(guests);
        return;
    }
    catch (error) {
        (0, errors_1.handleControllerError)(res, error);
    }
};
exports.guests = guests;
const newGuest = async (req, res) => {
    const convidado = req.params.nome;
    try {
        await (0, trintemo_service_1.newGuestsService)(convidado);
        res.status(204).end();
        return;
    }
    catch (error) {
        (0, errors_1.handleControllerError)(res, error);
    }
};
exports.newGuest = newGuest;
const confirmation = async (req, res) => {
    const convidado = req.params.nome;
    try {
        await (0, trintemo_service_1.confirmationService)(convidado);
        res.status(204).end();
        return;
    }
    catch (error) {
        (0, errors_1.handleControllerError)(res, error);
    }
};
exports.confirmation = confirmation;
const notConfirmation = async (req, res) => {
    const convidado = req.params.nome;
    try {
        await (0, trintemo_service_1.notConfirmationService)(convidado);
        res.status(204).end();
        return;
    }
    catch (error) {
        (0, errors_1.handleControllerError)(res, error);
    }
};
exports.notConfirmation = notConfirmation;
const drink = async (req, res) => {
    const convidado = req.params.nome;
    try {
        await (0, trintemo_service_1.drinkService)(convidado);
        res.status(204).end();
        return;
    }
    catch (error) {
        (0, errors_1.handleControllerError)(res, error);
    }
};
exports.drink = drink;
const notDrink = async (req, res) => {
    const convidado = req.params.nome;
    try {
        await (0, trintemo_service_1.notDrinkService)(convidado);
        res.status(204).end();
        return;
    }
    catch (error) {
        (0, errors_1.handleControllerError)(res, error);
    }
};
exports.notDrink = notDrink;
const message = async (req, res) => {
    const convidado = req.params.nome;
    const message = req.body.message;
    try {
        await (0, trintemo_service_1.messageService)(convidado, message);
        res.status(204).end();
        return;
    }
    catch (error) {
        (0, errors_1.handleControllerError)(res, error);
    }
};
exports.message = message;
const step = async (req, res) => {
    const convidado = req.params.nome;
    const step = Number(req.params.step);
    try {
        await (0, trintemo_service_1.stepService)(convidado, step);
        res.status(204).end();
        return;
    }
    catch (error) {
        (0, errors_1.handleControllerError)(res, error);
    }
};
exports.step = step;
