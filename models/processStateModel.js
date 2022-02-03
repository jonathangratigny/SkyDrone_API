import mongoose from 'mongoose'

const ProcessSateSchema = new mongoose.Schema({
    name_ps: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    key_ps: {
        type: Number,
        required: true,
        unique: true
    }

})

const ProcessStateModel = mongoose.model('ProcessState', ProcessSateSchema)

export default ProcessStateModel 
