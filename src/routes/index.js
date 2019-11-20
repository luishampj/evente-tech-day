import express from 'express'
import routerCharla from './charlas2'
import routerExpositor from './expositor'
//import sequelize from './db';


var router = express.Router()

//router.use('/charla/:id', routerCharla)
//router.use('/charla', routerCharla)
router.use('/expositor', routerExpositor)


router.use('/charla', routerCharla)


export default router