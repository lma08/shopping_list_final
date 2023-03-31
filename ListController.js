const ListModel = require('./ListModel');

module.exports.getItem = async (req,res) => {
    const oneItem = await ListModel.find();
    res.send(oneItem);
}

module.exports.saveItem = async (req,res) => {
    const {title} = req.body;
    ListModel.create ({title})
        .then ((data) => {
            console.log('Item added');
            res.send(data)
        })
}

module.exports.deleteItem = async (req,res) => {
    const {_id} = req.body;
    ListModel.findByIdAndDelete (_id)
        .then (() => res.send('Item deleted'))
}

module.exports.editItem = async (req,res) => {
    const {_id, title} = req.body;
    ListModel.findByIdAndUpdate (_id, {title})
        .then (() => res.send('Item edited'))
}