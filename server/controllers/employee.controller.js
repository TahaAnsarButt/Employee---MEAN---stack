
const Employee = require('../models/employee.model')
const { generateCrudMethods } = require('../services')
const employeeCrud = generateCrudMethods(Employee)
// const { validateDbId, raiseRecord404Error } = require('../middlewares');

const getemp = async (req, res, next) => {
     await employeeCrud.getAll()
        .then(data => res.send(data))
        .catch(err => next(err))
}

const getempbyid = async(req, res, next) => {
    await employeeCrud.getById(req.params.id)
        .then(data => {
            if (data) res.send(data)
            // else raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
}

const createemp = async (req, res, next) => {
    const newRecord = {
        fullName: req.body.fullName,
        position: req.body.position,
        location: req.body.location,
        salary: req.body.salary,
    }
    await employeeCrud.create(newRecord)
        .then(data => res.status(201).json(data))
        .catch(err => next(err))
}

const updateemp = async (req, res) => {
    const udpatedRecord = {
        fullName: req.body.fullName,
        position: req.body.position,
        location: req.body.location,
        salary: req.body.salary,
    }
    await employeeCrud.update(req.params.id, udpatedRecord)
        .then(data => {
            if (data) res.send(data)
            // else raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
}

const deleteemp = async (req, res) => {
    await employeeCrud.delete(req.params.id)
        .then(data => {
            if (data) res.send(data)
            // else raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
}


module.exports = {
    getemp,
    getempbyid,
    createemp,
    updateemp,
    deleteemp
}