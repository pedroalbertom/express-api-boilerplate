import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserService } from "../../application/services/UserService";
import { UserRepository } from "../../infrastructure/database/repositories/UserRepository";

const router = Router();
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.post("/", (req, res) => userController.createUser(req, res));
router.get("/", (req, res) => userController.getAllUsers(req, res));
router.get("/:id", (req, res) => userController.getUserById(req, res));
router.put("/:id", (req, res) => userController.updateUser(req, res));
router.delete("/:id", (req, res) => userController.deleteUser(req, res));

export default router;
