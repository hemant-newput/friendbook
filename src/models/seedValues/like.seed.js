const seedLikeValues = async function (likeTable) {
    likeTable.bulkCreate([                             //       if we need to nitialize table with some data
        { userID: 1, postID: 1 },
        { userID: 2, postID: 1 },
        { userID: 3, postID: 1 },
        { userID: 4, postID: 1 },
        { userID: 5, postID: 1 },
        { userID: 1, postID: 2 },
        { userID: 3, postID: 2 },
        { userID: 4, postID: 2 },
        { userID: 5, postID: 2 },
        { userID: 1, postID: 3 },
        { userID: 1, postID: 4 },
        { userID: 2, postID: 4 },
        { userID: 3, postID: 4 },
        { userID: 5, postID: 4 },
        { userID: 1, postID: 5 },
        { userID: 2, postID: 5 },
        
    ]).then(function () {
        return likeTable.findAll();
    }).then(function (likeTable) {
        console.log(likeTable);
    });
}

module.exports = {
    seedLikeValues
}
