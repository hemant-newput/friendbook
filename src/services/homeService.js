const dbUtil = require("../utils/dbUtil");
const jwt = require("jsonwebtoken");
const op = require("sequelize").Op;
const { Op } = require("sequelize");
const CustomError = require("../utils/customError");
require("dotenv").config();

const homeService = {
  addPost: async function validateLogin(postData) {
    try {
      const postGenie = await dbUtil.postTable();
      const postAddedData = await postGenie.create({
        caption: postData.caption,
        description: postData.message,
        likes: 0,
        userid: postData.token.id,
        image_url: postData.photoUrl,
        postType: postData.postType,
      });
      postData['userID'] = postData.token.id
      const remainingPosts = await this.getPosts(postData)
      return { customMessage: `UserData Update Successfully`, data: remainingPosts };
    } catch (error) {
      throw new CustomError(error, error.message || "Error while adding Timeline Post");
    }
  },

  updateUserData: async function (queryData) {
    const userGenie = await dbUtil.userTable();
    let updateData;
    if (queryData.type == "basic") {
      updateData = {
        name: queryData.name,
        gender: queryData.gender,
        dob: queryData.dob,
        martialStatus: queryData.married,
        location: queryData.location,
      };
    } else {
      updateData = {
        position: queryData.occupation,
        skills: queryData.skills,
        jobCompany: queryData.jobCompany,
      };
    }
    try {
      await userGenie.update(updateData, {
        where: {
          id: queryData.token.id,
        },
      });
      return { customMessage: `UserData Update Successfully` };
    } catch (error) {
      throw new CustomError(error, error.message || "Error while updating user Data");
    }
  },

  getUserData: async function (data) {
    const userGenie = await dbUtil.userTable();
    const postGenie = await dbUtil.postTable();
    const friendGenie = await dbUtil.friendTable();
    try {
      const userData = await userGenie.findOne({ where: { id: data.userID } });
      const postData = await postGenie.findAll({
        where: { userid: data.userID },
      });
      const followerData = await friendGenie.findAll({
        where: { userID: data.userID },
      });
      const followingData = await friendGenie.findAll({
        where: { friendID: data.userID },
      });
      const posts = [];
      postData.map((post) => {
        posts.push(post.dataValues);
      });


      const resultData = {
        name: userData.name,
        position: userData.position,
        followers: followerData.length,
        following: (followingData.length),
        posts: posts,
        activities: posts.length,
        profileImage: userData.profileImage,
        gender: userData.gender,
        dob: userData.dob,
        married: userData.martialStatus,
        location: `${userData.address}`,
        occupation: userData.position,
        skills: userData.skills,
        jobCompany: userData.company,
        id: userData.id,
      };
      resultData["internalAccess"] = await this.getInternalAccess(data.userID, data.token)
      return {
        customMessage: `UserData Update Successfully`,
        data: resultData
      };
    } catch (error) {
      throw new CustomError(error, error.message || "Error while fetching user data");
    }
  },

  getPosts: async function (data) {
    try {
      const friendGenie = await dbUtil.friendTable();
      const followerData = await friendGenie.findAll({
        where: { userID: data.userID },
      });
      const friendsArray = [parseInt(data.userID)];
      followerData.map((follower) => {
        if (follower.userID == data.userID) {
          friendsArray.push(follower.friendID);
        }
      });

      const postGenie = await dbUtil.postTable();
      const likeGenie = await dbUtil.likeTable();
      const shareGenie = await dbUtil.shareTable();
      const userGenie = await dbUtil.userTable();
      const posts = await postGenie.findAll({
        where: {
          userid: {
            [Op.in]: friendsArray
          }
        },
        include: [{
          model: likeGenie,
          as: "likes",
          required: false,
        }, {
          model: shareGenie,
          as: "shares",
          required: false,
        }, {
          model: userGenie,
          as: "user",
          required: false,
        }],
      });
      const resultData = posts.map((post) => {
        return {
          "postid": post.id,
          "caption": post.caption,
          "description": post.description,
          "numberOfLikes": post.numberOfLikes,
          "numberOfShares": post.numberOfShares,
          "userid": post.userid,
          "image_url": post.image_url,
          "postType": post.postType,
          "createdAt": post.createdAt,
          "updatedAt": post.updatedAt,
          "userLiked": !!post.likes.filter((likeObj) => likeObj.userID == data.userID),
          "userShared": !!post.likes.filter((likeObj) => likeObj.userID == data.userID),
          "name": post.user.name,
          "profileImage": post.user.profileImage,
        }
      })
      resultData["internalAccess"] = await this.getInternalAccess(data.userID, data.token)
      return {
        customMessage: `Post fetch successful`,
        data: resultData
      };
    } catch (error) {
      throw new CustomError(error, error.message || "Error while fetching timeline posts");
    }
  },

  getFriendList: async function (userData) {
    const userGenie = await dbUtil.userTable();;
    const friendGenie = await dbUtil.friendTable();
    try {
      friendData = await friendGenie.findAll({
        where: {
          userID: userData.userID,
          friendStatus: true,
        },
      });
      const result = await userGenie.findAll({});

      const resultData = [];
      friendData.map((friend) => {
        result.map((user) => {
          if (user.id === friend.friendID) {
            resultData.push({
              userID: user.id,
              name: user.name,
              position: user.position,
              company: user.company,
              image: user.profileImage,
              status: true,
            });
          }
        });
      });
      resultData["internalAccess"] = await this.getInternalAccess(userData.userID, userData.token)
      return {
        customMessage: `These are your friends`,
        data: resultData
      };
    } catch (error) {
      throw new CustomError(error, error.message || "Error while fetching Friends");
    }
  },

  addFriend: async function (queryData) {
    const userGenie = await dbUtil.userTable();
    const friendGenie = await dbUtil.friendTable();
    try {
      const friend = await friendGenie.findOne({
        where: {
          userID: queryData.token.id,
          friendID: queryData.friendID,
        }
      })
      if (!friend) {
        await friendGenie.create({
          userID: queryData.token.id,
          friendID: queryData.friendID,
          friendStatus: true
        })
      }
      else {
        await friendGenie.update({ friendStatus: true }, {
          where: {
            userID: queryData.token.id,
            friendID: queryData.friendID,
          },
        }
        );

      }

      const userData = await userGenie.findOne({
        where: {
          id: queryData.friendID,
        },
      });
      return { customMessage: `Started Following ${userData.name}` };
    } catch (error) {
      throw new CustomError(error, error.message || "Error while adding friend");
    }
  },

  Unfriend: async function (queryData) {
    const userGenie = await dbUtil.userTable();
    const friendGenie = await dbUtil.friendTable();
    try {
      const temp = friendGenie.destroy({
        where: {
          userID: queryData.token.id,
          friendID: queryData.friendID,
        }
      });
      const userData = await userGenie.findOne({
        where: {
          id: queryData.friendID,
        },
      });
      return { customMessage: `Stopped Following ${userData.name}` };
    } catch (error) {
      throw new CustomError(error, error.message || "Error while removing from friendList");
    }
  },

  getUserPhotos: async function (queryData) {
    const postGenie = await dbUtil.postTable();
    try {
      const postData = await postGenie.findAll({
        where: {
          userid: queryData.userID,
        }
      });
      let resultData = [];
      postData.map((post) => {
        resultData.push({ image_url: post.image_url })

      })
      return { data: resultData, customMessage: "User photos Loaded" }
    } catch (error) {
      throw new CustomError(error, error.message || "Error while getting user photos");
    }
  },

  getSuggetions: async function (queryData) {
    const userGenie = await dbUtil.userTable();
    const friendGenie = await dbUtil.friendTable();
    try {
      const resp = [];
      const users = await userGenie.findAll();
      const usersArray = [];
      users.map((user) => {
        usersArray.push(user.id);
      });
      const friendData = await friendGenie.findAll({
        where: { userID: queryData.userID },
      });

      const friendsArray = [parseInt(queryData.userID)];
      friendData.map((follower) => {
        if (follower.userID == queryData.userID) {
          friendsArray.push(follower.friendID);
        }
      });

      const unknownPeople = usersArray.filter((x) => !friendsArray.includes(x));
      let unknownPeopleData = await userGenie.findAll({
        where: {
          id: {
            [op.in]: unknownPeople,
          },
        },
      });

      unknownPeopleData = unknownPeopleData.map((people) => {
        people.dataValues.status = false;
        return people
      })

      return { data: unknownPeopleData, customMessage: "Suggetions Loaded" };
    } catch (error) {
      throw new CustomError(error, error.message || "Error while loading suggetions");
    }
  },

  likePost: async function (queryData) {
    const likeGenie = await dbUtil.likeTable();
    const postGenie = await dbUtil.postTable();
    try {
      const likeData = await likeGenie.create({
        postID: queryData.postID,
        userID: queryData.token.id,
      });

      const selectedPost = await postGenie.findOne({
        where: {
          id: queryData.postID,
        }
      })

      await postGenie.update({
        likes: (parseInt(selectedPost.likes) + 1).toString()
      }, {
        where: {
          id: queryData.postID,
        }
      });
      return { customMessage: "The post has been liked", data: likeData };
    } catch (error) {
      throw new CustomError(error, error.message || "Error while liking the post");
    }
  },

  dislikePost: async function (queryData) {
    const likeGenie = await dbUtil.likeTable();
    try {
      const dislikeData = likeGenie.destroy({
        where: {
          postID: queryData.postID,
          userID: queryData.token.id,
        },
      });
      return {
        customMessage: "The post has been disliked",
        data: dislikeData,
      };
    } catch (error) {
      throw new CustomError(error, error.message || "Error while disliking the post");
    }
  },
  deletePost: async function (queryData) {
    const postGenie = await dbUtil.postTable();
    const likeGenie = await dbUtil.likeTable()
    try {
      const postData = await postGenie.destroy({
        where: {
          id: queryData.postID,
          userid: queryData.token.id,
        },
      });
      const likeData = await likeGenie.destroy({
        where: {
          postID: queryData.postID,
          userID: queryData.token.id,
        },
      });
      queryData['userID'] = queryData.token.id
      const remainingPosts = await this.getPosts(queryData)
      return {
        customMessage: "The post has been deleted",
        data: remainingPosts,
      };
    } catch (error) {
      throw new CustomError(error, error.message || "Error while deleting the post");
    }
  },
  sharePost: async function (queryData) {
    const postGenie = await dbUtil.postTable();
    try {
      const postData = await postGenie.findOne({
        where: {
          id: queryData.postID
        }
      })
      if (postData) {
        delete postData.dataValues.id
        postData.dataValues.likes = '0';
        postData.dataValues.userid = queryData.token.id
        await postGenie.create(postData.dataValues);
      }
      return {
        customMessage: `The post has been liked`,
        userID: `${user.userID}`,
        data: postData
      }
    } catch (error) {
      throw new CustomError(error, error.message || "Error while sharing the post");
    }
  },

  getInternalAccess: async (userID, token) => {
    if (parseInt(userID) === parseInt(token.id)) {
      return true;
    }
    const friendGenie = await dbUtil.friendTable();
    const followerData = await friendGenie.findAll({
      where: { userID: token.id },
    });
    const friendsArray = [parseInt(token.id)];
    followerData.map((follower) => {
      friendsArray.push(follower.friendID);
    });
    return friendsArray.includes(parseInt(userID))
  }
};
module.exports = homeService;
