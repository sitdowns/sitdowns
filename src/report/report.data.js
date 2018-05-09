const { ODM, DB } = require('../rules')
const MODEL_NAME = 'Report'

const getById = (id, callback) => DB.Models[MODEL_NAME].findById(id, callback)
const save = (requestData, callback) => DB.Models[MODEL_NAME].create(requestData, callback)
const update = (id, requestData, callback) => DB.Models[MODEL_NAME].findOne({ _id: id }, (err, doc) => {
    if (err || !doc) {
        console.error('error', err)
        return callback(err)
    }

    const keys = Object.keys(requestData)

    keys.forEach(key => {
        doc[key] = requestData[key]
    })
    doc.timestamp = Date.now()

    doc.save()
    return callback(null, doc)
})

const report = {
    getById,
    save,
    update
}

module.exports = report
