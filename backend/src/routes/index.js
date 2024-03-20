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

router.use("/users", userRouter);
router.use("/posts", post);
router.use("/messages", message);
router.use("/library",libraryRouter);
router.use("/image",imageRoute);
router.use("/foro",foroRoute);
router.use("/event",eventRoute);
router.use("/eventUser",eventUserRoute);
router.use("/deck",deckRoute);
router.use("/customCards",customCardsRoute);
router.use("/cards",cardsRoute);


export default router;