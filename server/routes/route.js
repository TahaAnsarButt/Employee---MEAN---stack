const express = require('express')
const router = express.Router()
// const { validateDbId, raiseRecord404Error } = require('../middlewares');
const {validate} = require('../middlewares')

const {
    getemp,
    getempbyid,
    createemp,
    updateemp,
    deleteemp
}
= require('../controllers/employee.controller')
router.get('/', getemp)
router.get('/:id',[validate.validateDbId , validate.raiseRecord404Error], getempbyid)
router.post('/', [validate.validateDbId , validate.raiseRecord404Error], createemp)
router.put('/:id', [validate.validateDbId , validate.raiseRecord404Error], updateemp)
router.delete('/:id', [validate.validateDbId , validate.raiseRecord404Error], deleteemp)

// module.exports ={
// routes : router
// }

// export default router;
module.exports = router