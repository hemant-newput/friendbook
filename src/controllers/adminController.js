require("dotenv").config();
const homeService = require("../services/homeService");
const jwt = require("jsonwebtoken");
const adminController = {
  getPosts: async (req, res) => {
    const userData = req.query;
    const response = await homeService.test(userData);
    res.send(response);
  },
  addPost: async (req, res) => {
    const postData = req.body;
    postData["token"] = req.token;
    const response = await homeService.addPost(postData);
    res.send(response);
  },
  updateUserData: async (req, res) => {
    const userData = req.body;
    userData["token"] = req.token;
    const response = await homeService.updateUserData(userData);
    res.send(response);
  },
  getUserData: async (req, res) => {
    const userData = req.params;
    userData["token"] = req.token;
    const response = await homeService.getUserData(userData);
    res.send(response);
  },
  getFriendList: async (req, res) => {
    const userData = req.params;
    userData["token"] = req.token;
    const response = await homeService.getFriendList(userData);
    res.send(response);
  },
  Unfriend: async (req, res) => {
    const userData = { friendID: req.params.friendID };
    userData["token"] = req.token;
    const response = await homeService.Unfriend(userData);
    res.send(response);
  },
  addFriend: async (req, res) => {
    const userData = { friendID: req.params.friendID };
    userData["token"] = req.token;
    const response = await homeService.addFriend(userData);
    res.send(response);
  },
  getUserPhotos: async (req, res) => {
    const userData = req.query;
    userData["token"] = req.token;
    const response = await homeService.getUserPhotos(userData);
    res.send(response);
  },
  getSuggetions: async (req, res) => {
    const userData = req.params;
    userData["token"] = req.token;
    const response = await homeService.getSuggetions(userData);
    res.send(response);
  },
  likePost: async (req, res) => {
    const userData = req.params;
    userData["token"] = req.token;
    const response = await homeService.likePost(userData);
    res.send(response);
  },
  dislikePost: async (req, res) => {
    const userData = req.params;
    userData["token"] = req.token;
    const response = await homeService.dislikePost(userData);
    res.send(response);
  },
  sharePost: async (req, res) => {
    const userData = req.params;
    userData["token"] = req.token;
    const response = await homeService.sharePost(userData);
    res.send(response);
  },
  deletePost: async (req, res) => {
    const userData = req.params;
    userData["token"] = req.token;
    const response = await homeService.deletePost(userData);
    res.send(response);
  },
};
module.exports = adminController;
