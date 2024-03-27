import  express  from "express";
import { postCreateController, postUpdateController,postDeleteController, postLikeController, postGetController, postTimlineController, userPostController } from "../controller/postController.js";

const postRouter= express.Router()
// postRouter.get("/allpost",allPostController)
postRouter.post('/',postCreateController)
postRouter.put('/:id',postUpdateController)
postRouter.put('/:id/like',postLikeController)
postRouter.delete('/:id',postDeleteController)
postRouter.get('/:id',postGetController)
postRouter.get('/timeline/:userId',postTimlineController)
postRouter.get('/profile/:username',userPostController)

export {postRouter}