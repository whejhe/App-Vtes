//src/routes/index.js
import { Router } from "express";
const router = Router();

import userRouter from "./user.router.js";
import post from "./post.router.js";
import message from "./message.router.js";
import libraryRouter from "./library.router.js";
import imageRoute from "./image.router.js";
import foroRoute from "./foro.router.js";
import eventRoute from "./event.router.js";
import eventUserRoute from "./event-users.router.js";
import deckRoute from "./deck.router.js";
import customCardsRoute from "./customCardsRouter.js";
import cardsRoute from "./cards.router.js";

router.use("/", userRouter);
router.use("/", post);
router.use("/", message);
router.use("/",libraryRouter);
router.use("/",imageRoute);
router.use("/",foroRoute);
router.use("/",eventRoute);
router.use("/",eventUserRoute);
router.use("/",deckRoute);
router.use("/",customCardsRoute);
router.use("/",cardsRoute);


export default router;
