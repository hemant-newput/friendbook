const seedLoginValues = async function(loginTable) {
    try {
        loginTable.bulkCreate([                             //       if we need to nitialize table with some data
            { userID: 1, userName: "hemant@newput.com", password: "admin" },
            { userID: 2, userName: "udit@newput.com", password: "admin" },
            { userID: 3, userName: "piyush@newput.com", password: "admin" },
            { userID: 4, userName: "gurpreet@newput.com", password: "admin" },
            { userID: 5, userName: "awanish@newput.com", password: "admin" },
        ]).then(function () {
            return loginTable.findAll();
        }).then(function (loginTable) {
            console.log(loginTable);
        });        
    } catch (error) {
        throw err
    }
    
}

module.exports={
    seedLoginValues
}
