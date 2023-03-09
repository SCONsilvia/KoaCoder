
import Router from "koa-router";
import { getAll, save, getById, update, remove } from "../controllers/products.js";

const router = new Router({
  prefix: '/products',
});

router.get("/", getAll);

router.get("/:id", getById);

router.post("/", save);

router.put("/:id", update);

router.delete("/:id", remove);

export default router.routes();
