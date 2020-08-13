import express from 'express'
import ClassesController from './controllers/ClassesController';
import ConectionController from './controllers/ConectionControllers';
const routes = express.Router();
const classesController = new ClassesController();
const conectionController = new ConectionController();
routes.post('/classes', classesController.create)
routes.get('/classes', classesController.index)


routes.post('/connections', conectionController.create)
routes.get('/connections', conectionController.index)

export default routes;