const { posts } = require("../data/post");

exports.getposts = (req, res, next) => {
    res.status(200).json({ posts: posts });
};


exports.getPostById = (req, res) => {
    const postId = parseInt(req.params.postId);
    const post = posts.find(p => p.id === postId);
    if (!post) {
        return res.status(404).send('Post no encontrado');
    }
    res.json(post);
};

exports.getPostsPaginated = (req, res) => {
    const limit = parseInt(req.query.limit) || 10; 
    const offset = parseInt(req.query.offset) || 0; 

    const paginatedPosts = posts.slice(offset, offset + limit);
    res.json(paginatedPosts);
};

exports.updatePost = (req, res) => {
    const { postId } = req.params;
    const { title, content } = req.body;
    const post = posts.find(p => p.id === parseInt(postId));
    if (post) {
        if (title) post.title = title;
        if (content) post.content = content;
        res.send('Post actualizado con éxito');
    } else {
        res.status(404).send('Post no encontrado');
    }
};

exports.deletePost = (req, res) => {
    const { postId } = req.params;
    const index = posts.findIndex(p => p.id === parseInt(postId));
    if (index !== -1) {
        posts.splice(index, 1);
        res.send('Post eliminado con éxito');
    } else {
        res.status(404).send('Post no encontrado');
    }
};

exports.likePost = (req, res) => {
    const { postId } = req.params;
    const post = posts.find(p => p.id === parseInt(postId));
    if (post) {
        if (!post.likes) post.likes = 0;
        post.likes += 1;
        res.send(`El post ahora tiene ${post.likes} likes`);
    } else {
        res.status(404).send('Post no encontrado');
    }
};


exports.createPost = (req, res) => {
    const { body, authorId } = req.body; // Asumiendo que el cuerpo y authorId son enviados en el cuerpo de la solicitud.

    // Genera un nuevo ID de post basado en el último ID en tu lista de posts.
    const newId = exports.posts[exports.posts.length - 1].id + 1;

    // Crea el objeto del nuevo post.
    const newPost = {
        id: newId,
        body: body,
        likes: 0, // Los likes inician en 0.
        authorId: authorId,
        createdAt: new Date().toISOString().split('T')[0], // Formatea la fecha a 'YYYY-MM-DD'.
    };

    // Añade el nuevo post a la lista de posts.
    exports.posts.push(newPost);

    // Envía una respuesta de éxito con el nuevo post.
    res.status(201).send(newPost);
};