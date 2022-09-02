import upload from '../middleware/upload'
import express from "express";
const router = express.Router();

router.post("/upload", upload.single("file"), async (req, res) => {
    if (req.file === undefined) return res.send("you must select a file.");
    const imgUrl = `http://localhost:8090/file/${req.file.filename}`;
    return res.send(imgUrl);
});

module.exports = router;