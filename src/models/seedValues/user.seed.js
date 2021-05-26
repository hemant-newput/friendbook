const seedUserValues = async function (userTable) {
    userTable.bulkCreate([                             //       if we need to nitialize table with some data
        { userID: 1, name: "Hemant Shrivastava", position: "Software Developer", gender: "Male", dob: Date.UTC(1998, 09, 06), location: "Ayodhya", martialStatus: "Unmarried", skills: "JAVASCRIPT,NODE, EXPRESS,ANGULAR,HTML,CSS", jobCompany: "Google", profileImage: "../../../../assets/profile.jpg" },
        { userID: 2, name: "Udit Jain", position: "Software Developer", gender: "Male", dob: Date.UTC(1998, 09, 06), location: "Indore", martialStatus: "Unmarried", skills: "JAVASCRIPT,NODE, EXPRESS,ANGULAR,HTML,CSS", jobCompany: "Microsoft", profileImage: "../../../../assets/profile.jpg" },
        { userID: 3, name: "Piyush Chandak", position: "Software Developer", gender: "Male", dob: Date.UTC(1998, 09, 06), location: "Indore", martialStatus: "Unmarried", skills: "JAVASCRIPT,NODE, EXPRESS,ANGULAR,HTML,CSS", jobCompany: "Groww", profileImage: "../../../../assets/profile.jpg" },
        { userID: 4, name: "Gurpreet Chabbra", position: "Software Developer", gender: "Female", dob: Date.UTC(1998, 09, 06), location: "Boston", martialStatus: "Unmarried", skills: "JAVASCRIPT,NODE, EXPRESS,ANGULAR,HTML,CSS", jobCompany: "Amazon", profileImage: "../../../../assets/profile-girl.png" },
        { userID: 5, name: "Awanish Tiwari", position: "Software Developer", gender: "Male", dob: Date.UTC(1998, 09, 06), location: "Ujjain", martialStatus: "Married", skills: "JAVASCRIPT,NODE, EXPRESS,ANGULAR,HTML,CSS", jobCompany: "Barclays", profileImage: "../../../../assets/profile.jpg" },
        { userID: 6, name: "Anjuri Saxena", position: "Software Developer", gender: "Female", dob: Date.UTC(1998, 09, 06), location: "Ujjain", martialStatus: "Married", skills: "JAVASCRIPT,NODE, EXPRESS,ANGULAR,HTML,CSS", jobCompany: "JIO", profileImage: "../../../../assets/profile-girl.png" },
        { userID: 7, name: "Vaishnavi Khede", position: "Software Developer", gender: "Female", dob: Date.UTC(1998, 09, 06), location: "Ujjain", martialStatus: "Married", skills: "JAVASCRIPT,NODE, EXPRESS,ANGULAR,HTML,CSS", jobCompany: "Avengers", profileImage: "../../../../assets/profile-girl.png" },
        { userID: 8, name: "Anjana", position: "Software Developer", gender: "Female", dob: Date.UTC(1998, 09, 06), location: "Ujjain", martialStatus: "Married", skills: "JAVASCRIPT,NODE, EXPRESS,ANGULAR,HTML,CSS", jobCompany: "Impetus", profileImage: "../../../../assets/profile-girl.png" },
        { userID: 9, name: "Siya", position: "Software Developer", gender: "Male", dob: Date.UTC(1998, 09, 06), location: "Ujjain", martialStatus: "Married", skills: "JAVASCRIPT,NODE, EXPRESS,ANGULAR,HTML,CSS", jobCompany: "Coriolis", profileImage: "../../../../assets/profile.jpg" },
        { userID: 10, name: "Deepak", position: "Software Developer", gender: "Male", dob: Date.UTC(1998, 09, 06), location: "Ujjain", martialStatus: "Married", skills: "JAVASCRIPT,NODE, EXPRESS,ANGULAR,HTML,CSS", jobCompany: "Fisdom", profileImage: "../../../../assets/profile.jpg" },
        { userID: 11, name: "Nisheeth Shrivastava", position: "Software Developer", gender: "Male", dob: Date.UTC(1998, 09, 06), location: "Ujjain", martialStatus: "Married", skills: "JAVASCRIPT,NODE, EXPRESS,ANGULAR,HTML,CSS", jobCompany: "Whatsapp", profileImage: "../../../../assets/profile.jpg" },
        { userID: 12, name: "Rupak", position: "Software Developer", gender: "Male", dob: Date.UTC(1998, 09, 06), location: "Ujjain", martialStatus: "Married", skills: "JAVASCRIPT,NODE, EXPRESS,ANGULAR,HTML,CSS", jobCompany: "Instagram", profileImage: "../../../../assets/profile.jpg" },
        { userID: 13, name: "Deepa Dwivedi", position: "Software Developer", gender: "Female", dob: Date.UTC(1998, 09, 06), location: "Ujjain", martialStatus: "Married", skills: "JAVASCRIPT,NODE, EXPRESS,ANGULAR,HTML,CSS", jobCompany: "Maps", profileImage: "../../../../assets/profile-girl.png" },
        { userID: 14, name: "Bhavesh Rai", position: "Software Developer", gender: "Male", dob: Date.UTC(1998, 09, 06), location: "Ujjain", martialStatus: "Married", skills: "JAVASCRIPT,NODE, EXPRESS,ANGULAR,HTML,CSS", jobCompany: "Google", profileImage: "../../../../assets/profile.jpg" },
        { userID: 15, name: "Mandwi pandey", position: "Software Developer", gender: "Female", dob: Date.UTC(1998, 09, 06), location: "Ujjain", martialStatus: "Married", skills: "JAVASCRIPT,NODE, EXPRESS,ANGULAR,HTML,CSS", jobCompany: "Newput", profileImage: "../../../../assets/profile-girl.png" },

    ]).then(function () {
        return userTable.findAll();
    }).then(function (userTable) {
        console.log(userTable);
    }).catch((err) => {
        console.log(err)
    });
}

module.exports = {
    seedUserValues
}