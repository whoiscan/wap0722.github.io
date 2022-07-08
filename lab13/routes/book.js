const express = require('express');
const bookController = require('../controllers/bookController');
const options = {
    "caseSensitive": false,
    "strict": false
};
const router = express.Router(options);
router.get('/', bookController.getAllBooks);

router.get('/:bookId', bookController.getById);

router.post('/', bookController.save);

router.put('/:bookId', bookController.updateById);

router.delete('/:bookId', bookController.deleteById);

module.exports = router;