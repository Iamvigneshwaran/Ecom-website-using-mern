const taskModel = require('../models/TaskModel');

// create task

const createTask = async (req,res) => {
    const { title,description } = req.body;

    const task = await taskModel.create({title,description});
     res.json(task);

}

module.exports = createTask;