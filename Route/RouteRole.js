import express from 'express';
import { addRole, getAllRoles, getRoleById, updateRole, deleteRole } from '../Controllers/CtrlRole.js';
import validateRole from "../Validation/ValidRole.js"

const router = express.Router();

router.post('/roles', validateRole, addRole);
router.get('/roles', getAllRoles);
router.get('/roles/:id', getRoleById);
router.put('/roles/:id', validateRole, updateRole);
router.delete('/roles/:id', deleteRole);

export default router;
