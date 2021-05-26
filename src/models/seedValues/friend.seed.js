const seedFriendValues = async function (friendTable) {
    friendTable.bulkCreate([                             //       if we need to nitialize table with some data
        { userID: 1, friendID: 2 , friendStatus: true},
        { userID: 1, friendID: 3 , friendStatus: true},
        { userID: 1, friendID: 4 , friendStatus: true},
        { userID: 1, friendID: 5 , friendStatus: true},
        // { userID: 1, friendID: 6 , friendStatus: true},
        // { userID: 1, friendID: 7 , friendStatus: true},
        // { userID: 1, friendID: 8 , friendStatus: true},
        // { userID: 1, friendID: 9 , friendStatus: true},
        // { userID: 1, friendID: 10 ,friendStatus: true},
        { userID: 2, friendID: 1 , friendStatus: true},
        { userID: 2, friendID: 3 , friendStatus: true},
        { userID: 2, friendID: 4 , friendStatus: true},
        { userID: 3, friendID: 1 , friendStatus: true},
        { userID: 4, friendID: 1 , friendStatus: true},
        { userID: 4, friendID: 2 , friendStatus: true},
        { userID: 4, friendID: 3 , friendStatus: true},
        { userID: 5, friendID: 1 , friendStatus: true},
        // { userID: 5, friendID: 2 , friendStatus: true},
        // { userID: 5, friendID: 3 , friendStatus: true},
        // { userID: 5, friendID: 4 , friendStatus: true},
        // { userID: 6, friendID: 1 , friendStatus: true},
        // { userID: 7, friendID: 1 , friendStatus: true},
        // { userID: 8, friendID: 1 , friendStatus: true},
        { userID: 9, friendID: 1 , friendStatus: true},
        { userID: 10, friendID: 1 ,friendStatus: true},
        { userID: 11, friendID: 1 ,friendStatus: true},
        { userID: 12, friendID: 1 ,friendStatus: true},
        { userID: 13, friendID: 1 ,friendStatus: true},
        { userID: 14, friendID: 1 ,friendStatus: true},
        { userID: 15, friendID: 1 ,friendStatus: true},
    ]).then(function () {
        return friendTable.findAll();
    }).then(function (friendTable) {
        console.log(friendTable);
    });
}

module.exports = {
    seedFriendValues
}