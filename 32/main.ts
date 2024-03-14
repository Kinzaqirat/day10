let current_users :string[] = ["Hashim", "Momin" , "Zoya","Maha","Ahmed"];
let new_users : string[] = ["AbdulBari", "Hashim","Junid","Maha"];
new_users.forEach(newUser => {
  if (current_users.some(currentUser => currentUser.toLowerCase()===newUser.toLowerCase())){
    console.log(`${newUser} will enter new user name.`);
  }else{
    console.log(`${newUser} is available`)
  }
})

