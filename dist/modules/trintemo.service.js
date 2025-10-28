"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stepService = exports.messageService = exports.notDrinkService = exports.drinkService = exports.notConfirmationService = exports.confirmationService = exports.newGuestsService = exports.guestsService = void 0;
const prisma_1 = require("../lib/prisma");
const guestsService = async () => {
    try {
        return await prisma_1.prisma.convidado.findMany();
    }
    catch (err) {
        console.error("Erro guestsService:", err);
        throw err;
    }
};
exports.guestsService = guestsService;
const newGuestsService = async (nome) => {
    await prisma_1.prisma.convidado.createMany({
        data: { nome },
    });
};
exports.newGuestsService = newGuestsService;
//----------------------------
const confirmationService = async (nome) => {
    await prisma_1.prisma.convidado.updateMany({
        where: { nome },
        data: { presenca: true },
    });
};
exports.confirmationService = confirmationService;
const notConfirmationService = async (nome) => {
    await prisma_1.prisma.convidado.updateMany({
        where: { nome },
        data: { presenca: false },
    });
};
exports.notConfirmationService = notConfirmationService;
//----------------------------
const drinkService = async (nome) => {
    await prisma_1.prisma.convidado.updateMany({
        where: { nome },
        data: { bebidaAlcoolica: true },
    });
};
exports.drinkService = drinkService;
const notDrinkService = async (nome) => {
    await prisma_1.prisma.convidado.updateMany({
        where: { nome },
        data: { bebidaAlcoolica: false },
    });
};
exports.notDrinkService = notDrinkService;
//----------------------------
const messageService = async (nome, message) => {
    await prisma_1.prisma.convidado.updateMany({
        where: { nome },
        data: { message },
    });
};
exports.messageService = messageService;
const stepService = async (nome, number) => {
    await prisma_1.prisma.convidado.updateMany({
        where: { nome },
        data: { step: number },
    });
};
exports.stepService = stepService;
