var current_users = ["Hashim", "Momin", "Zoya", "Maha", "Ahmed"];
var new_users = ["AbdulBari", "Hashim", "Junid", "Maha"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will enter new user name."));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
