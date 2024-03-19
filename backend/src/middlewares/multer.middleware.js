import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../public/uploads"),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

const multerMiddleware = multer({ storage }).single("image");

export default multerMiddleware;
