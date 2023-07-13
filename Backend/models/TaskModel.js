const mongoose = require('mongoose');

const schema = mongoose.Schema;

const TaskSchema = new schema(
    {
        title:{
            type:String,
            require:true
        },
        description:{
            type:String
        }
    },
    {
        timestamps:true
    }
    );

    const TaskModel = mongoose.model("vickyMart",TaskSchema)

    module.exports = TaskModel;