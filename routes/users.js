var express = require('express');
var router = express.Router();
const verifyToken = require("../middleware/auth");

//Importing Controllers
let userController = require("../controllers/user");
let notesController = require("../controllers/notes")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST users listing. */
router.post('/registerUser',userController.createUser);
router.post("/login",userController.loginUser);
router.post("/userId/:userId/createnote",verifyToken,notesController.createNote);
router.post("/userId/:userId/noteId/:noteId/updateNote",verifyToken,notesController.updateNote);
router.post("/noteId/:noteId/deleteNote",verifyToken,notesController.deleteNote);
router.post("/:userId/getAllNotes",verifyToken,notesController.getAllNotes);
module.exports = router;
