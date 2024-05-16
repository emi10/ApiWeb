const express = require("express")
const postController = require("../controllers/post")

const router = express.Router()

// Post Especifico
router.get("/post/:postId", postController.getPostById)

//Paginación
router.get("/posts", postController.getPostsPaginated)

module.exports = router
router.put('/post/:postId', postController.updatePost);
router.delete('/post/:postId', postController.deletePost);
router.post('/post/:postId/like', postController.likePost);
router.post("/post", postController.createPost);