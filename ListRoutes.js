const { Router } = require('express');
const { getItem, saveItem, deleteItem, editItem } = require('./ListController');
const router = Router();

router.get('/', getItem);
router.post('/saveItem', saveItem);
router.post('/deleteItem', deleteItem);
router.post('/editItem', editItem);

module.exports = router;