require("dotenv").config();
const homeService = require("../services/homeService");
const jwt = require("jsonwebtoken");
const errorHandler = require("../handlers/errorHandler");
const successResponse = require("../utils/response");
const homeController = {
  getPosts: async (req, res) => {
    try {
      const userData = req.params;
      userData["token"] = req.token;
      const response = await homeService.getPosts(userData);
      successResponse(req, res, response)
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  addPost: async (req, res) => {
    try {
      const postData = req.body;
      postData["token"] = req.token;
      const response = await homeService.addPost(postData);
      successResponse(req, res, response)
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  updateUserData: async (req, res) => {
    try {
      const userData = req.body;
      userData["token"] = req.token;
      const response = await homeService.updateUserData(userData);
      successResponse(req, res, response)
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  getUserData: async (req, res) => {
    try {
      const userData = req.params;
      userData["token"] = req.token;
      const response = await homeService.getUserData(userData);
      successResponse(req, res, response)
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  getFriendList: async (req, res) => {
    try {
      const userData = req.params;
      userData["token"] = req.token;
      const response = await homeService.getFriendList(userData);
      successResponse(req, res, response)
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  Unfriend: async (req, res) => {
    try {
      const userData = { friendID: req.params.friendID };
      userData["token"] = req.token;
      const response = await homeService.Unfriend(userData);
      successResponse(req, res, response)
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  addFriend: async (req, res) => {
    try {
      const userData = { friendID: req.params.friendID };
      userData["token"] = req.token;
      const response = await homeService.addFriend(userData);
      successResponse(req, res, response)
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  getUserPhotos: async (req, res) => {
    try {
      const userData = req.query;
      userData["token"] = req.token;
      const response = await homeService.getUserPhotos(userData);
      successResponse(req, res, response)
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  getSuggetions: async (req, res) => {
    try {
      const userData = req.params;
      userData["token"] = req.token;
      const response = await homeService.getSuggetions(userData);
      successResponse(req, res, response)
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  likePost: async (req, res) => {
    try {
      const userData = req.params;
      userData["token"] = req.token;
      const response = await homeService.likePost(userData);
      successResponse(req, res, response)
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  dislikePost: async (req, res) => {
    try {
      const userData = req.params;
      userData["token"] = req.token;
      const response = await homeService.dislikePost(userData);
      successResponse(req, res, response)
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  sharePost: async (req, res) => {
    try {
      const userData = req.params;
      userData["token"] = req.token;
      const response = await homeService.sharePost(userData);
      successResponse(req, res, response)
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
  deletePost: async (req, res) => {
    try {
      const userData = req.params;
      userData["token"] = req.token;
      const response = await homeService.deletePost(userData);
      successResponse(req, res, response)
    } catch (error) {
      errorHandler(req, res, error);
    }
  },
};
module.exports = homeController;
