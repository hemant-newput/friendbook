
const express = require('express');
const homeController =require( '../controllers/homeController');
const router = express.Router();
router.post('/posts/:userID',homeController.getPosts);
router.post('/users/:userID/posts/create',homeController.addPost);
router.post('/user/update',homeController.updateUserData);
router.post('/:userID/userData',homeController.getUserData);
router.post('/friends/list/:userID',homeController.getFriendList);
router.post('/friends/unfriend/:friendID',homeController.Unfriend);
router.post('/friends/addFriend/:friendID',homeController.addFriend);
router.post('/user/photos',homeController.getUserPhotos);
router.post('/friends/suggestions/:userID',homeController.getSuggetions);
router.post('/posts/:postID/like',homeController.likePost);
router.post('/posts/:postID/dislike',homeController.dislikePost);
router.post('/posts/:postID/share',homeController.sharePost);
router.post('/posts/:postID/delete',homeController.deletePost);
module.exports= router;