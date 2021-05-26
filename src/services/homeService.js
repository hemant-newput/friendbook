const dbUtil = require("../utils/dbUtil");
const jwt = require("jsonwebtoken");
const op = require("sequelize").Op;
require("dotenv").config();

const homeService = {
  addPost: async function validateLogin(postData) {
    try {
      const postGenie = await (await dbUtil.getDBConnection()).postTable;
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
      return { success: true, message: `UserData Update Successfully`, data: remainingPosts };
    } catch (error) {
      return {
        success: false,
        message: "Error Occured Contact Admin",
        data: error,
      };
    }
  },

  updateUserData: async function (queryData) {
    const userGenie = await (await dbUtil.getDBConnection()).userTable;
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
      return { success: true, message: `UserData Update Successfully` };
    } catch (err) {
      return {
        success: false,
        message: "Error Occured Contact Admin",
        data: err,
      };
    }
  },

  getUserData: async function (data) {
    const userGenie = await (await dbUtil.getDBConnection()).userTable;
    const postGenie = await (await dbUtil.getDBConnection()).postTable;
    const friendGenie = await (await dbUtil.getDBConnection()).friendTable;
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
        location: userData.location,
        occupation: userData.position,
        skills: userData.skills,
        jobCompany: userData.jobCompany,
        id: userData.id,
      };
      const internalAccess = this.getInternalAccess(data.userID, data.token)
      return {
        success: true,
        message: `UserData Update Successfully`,
        data: resultData,
        internalAccess
      };
    } catch (err) {
      return {
        success: false,
        message: "Error Occured Contact Admin",
        data: err,
      };
    }
  },

  getPosts: async function (data) {
    try {
      const friendGenie = await (await dbUtil.getDBConnection()).friendTable;
      const likeGenie = await (await dbUtil.getDBConnection()).likeTable;
      const shareGenie = await (await dbUtil.getDBConnection()).shareTable;

      const followerData = await friendGenie.findAll({
        where: { userID: data.userID },
      });
      const friendsArray = [parseInt(data.userID)];
      followerData.map((follower) => {
        if (follower.userID == data.userID) {
          friendsArray.push(follower.friendID);
        }
      });
      let resultData = [];
      const masterConn = await dbUtil.dbConnector();
      const posts = await masterConn.query("select p.id as postID,* from post_tables as p left JOIN user_tables as u on p.userid = u.id");
      posts[0].map((post) => {
        if (friendsArray.includes(post.userid)) {
          resultData.push(post);
        }
      });

      likeData = await likeGenie.findAll({
        where: {
          userID: data.userID
        }
      })
      const likedPosts = likeData.map((post) => post.postID)
      //map likes with posts
      resultData.map((post) => {
        post['userLiked'] = (likedPosts.includes(post.id)) ? true : false
      })


      shareData = await shareGenie.findAll({
        where: {
          userID: data.userID
        }
      })
      const sharedPosts = shareData.map((post) => post.postID)
      //map likes with posts
      resultData.map((post) => {
        post['userShared'] = (sharedPosts.includes(post.id)) ? true : false
      })

      const internalAccess = this.getInternalAccess(data.userID, data.token)
      return {
        success: true,
        message: `Post fetch successful`,
        data: resultData,
        internalAccess
      };
    } catch (err) {
      return {
        success: false,
        message: "Error Occured Contact Admin",
        data: err,
      };
    }
  },

  getFriendList: async function (userData) {
    const dbConnector = (await dbUtil.getDBConnection());
    const userGenie = await dbConnector.userTable;
    const friendGenie = await (await dbUtil.getDBConnection()).friendTable;
    try {
      friendData = await friendGenie.findAll({
        where: {
          userID: userData.userID,
          friendStatus: true,
        },
      });
      const internalAccess = this.getInternalAccess(userData.userID, userData.token)
      userData = await userGenie.findAll({});

      const resultData = [];
      friendData.map((friend) => {
        userData.map((user) => {
          if (user.id === friend.friendID) {
            resultData.push({
              userID: user.id,
              name: user.name,
              position: user.position,
              company: user.jobCompany,
              image: user.profileImage,
              status: true,
            });
          }
        });
      });

      return {
        success: true,
        message: `These are your friends`,
        data: resultData,
        internalAccess
      };
    } catch (err) {
      return {
        success: false,
        message: "Error Occured Contact Admin",
        data: err,
      };
    }
  },

  addFriend: async function (queryData) {
    const userGenie = await (await dbUtil.getDBConnection()).userTable;
    const friendGenie = await (await dbUtil.getDBConnection()).friendTable;
    try {
      friendGenie.update(
        {
          friendStatus: true,
        },
        {
          where: {
            userID: queryData.token.id,
            friendID: queryData.friendID,
          },
        }
      );
      const userData = await userGenie.findOne({
        where: {
          id: queryData.friendID,
        },
      });
      return { success: true, message: `Started Following ${userData.name}` };
    } catch (err) {
      return {
        success: false,
        message: "Error Occured Contact Admin",
        data: err,
      };
    }
  },

  Unfriend: async function (queryData) {
    const userGenie = await (await dbUtil.getDBConnection()).userTable;
    const friendGenie = await (await dbUtil.getDBConnection()).friendTable;
    try {
      friendGenie.update(
        {
          friendStatus: false,
        },
        {
          where: {
            userID: queryData.token.id,
            friendID: queryData.friendID,
          },
        }
      );
      const userData = await userGenie.findOne({
        where: {
          id: queryData.friendID,
        },
      });
      return { success: true, message: `Stopped Following ${userData.name}` };
    } catch (err) {
      return {
        success: false,
        message: "Error Occured Contact Admin",
        data: err,
      };
    }
  },

  getUserPhotos: async function (queryData) {
    const postGenie = await (await dbUtil.getDBConnection()).postTable;
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
      return { success: true, data: resultData }
    } catch (err) {
      return {
        success: false,
        message: "Error Occured Contact Admin",
        data: err,
      };
    }
  },

  getSuggetions: async function (queryData) {
    const userGenie = await (await dbUtil.getDBConnection()).userTable;
    const friendGenie = await (await dbUtil.getDBConnection()).friendTable;
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
      const unknownPeopleData = await userGenie.findAll({
        where: {
          id: {
            [op.in]: unknownPeople,
          },
        },
      });

      return { success: true, data: unknownPeopleData };
    } catch (err) {
      return {
        success: false,
        message: "Error Occured Contact Admin",
        data: err,
      };
    }
  },

  likePost: async function (queryData) {
    const likeGenie = await (await dbUtil.getDBConnection()).likeTable;
    const postGenie = await (await dbUtil.getDBConnection()).postTable;
    try {
      const likeData = await likeGenie.create({
        postID: queryData.postID,
        userID: queryData.token.id,
      });

      const selectedPost = await postGenie.findOne({
        where: {
          postID: queryData.postID,
        }
      })

      await postGenie.update({
        likes : (parseInt(selectedPost.likes) + 1).toString()
      }, {
        where: {
          postID: queryData.postID,
        }
      });
      return { success: true, message: "The post has been liked", data: likeData };
    } catch (err) {
      return {
        success: false,
        message: "Error Occured Contact Admin",
        data: err,
      };
    }
  },

  dislikePost: async function (queryData) {
    const likeGenie = await (await dbUtil.getDBConnection()).likeTable;
    try {
      const dislikeData = likeGenie.destroy({
        where: {
          postID: queryData.postID,
          userID: queryData.token.id,
        },
      });
      return {
        success: true,
        message: "The post has been disliked",
        data: dislikeData,
      };
    } catch (err) {
      return {
        success: false,
        message: "Error Occured Contact Admin",
        data: err,
      };
    }
  },
  deletePost: async function (queryData) {
    const postGenie = await (await dbUtil.getDBConnection()).postTable;
    const likeGenie = await (await dbUtil.getDBConnection()).likeTable;
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
        success: true,
        message: "The post has been deleted",
        data: remainingPosts,
      };
    } catch (err) {
      return {
        success: false,
        message: "Error Occured Contact Admin",
        data: err,
      };
    }
  },
  sharePost: async function (queryData) {
    const postGenie = await (await dbUtil.getDBConnection()).postTable;
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
      return { success: true, message: "The post has been liked" };
    } catch (err) {
      return {
        success: false,
        message: "Error Occured Contact Admin",
        data: err,
      };
    }
  },
  getInternalAccess(userID, token) {
    return parseInt(userID) === parseInt(token.id)
  }
};
module.exports = homeService;
