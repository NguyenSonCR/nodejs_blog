class AuthorController {
    //GET /Author
    author(req, res) {
        res.render('author')
    }
}
module.exports = new AuthorController;