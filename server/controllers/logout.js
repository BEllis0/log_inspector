module.exports = {
    logout: (req, res) => {
        const { user_id } = req.user;

        if (user_id) {
            res.clearCookie('token');
            res.status(200).redirect('/');
        } else {
            res.status(400).json({ message: "Cannot logout, user is not logged in." });
        }
    }
};