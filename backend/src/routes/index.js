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
import { auth } from "../middlewares/auth.js";

router.use("/", userRouter);
router.use("/",auth, post);
router.use("/",auth, message);
router.use("/",auth, libraryRouter);
router.use("/",auth, imageRoute);
router.use("/",auth, foroRoute);
router.use("/",auth, eventRoute);
router.use("/",auth, eventUserRoute);
router.use("/",auth, deckRoute);
router.use("/",auth, customCardsRoute);
router.use("/",auth, cardsRoute);


export default router;
