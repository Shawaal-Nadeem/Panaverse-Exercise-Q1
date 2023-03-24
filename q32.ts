let current_users: string[] = ["Manaan", "Ahsaan", "Shiza", "Hanaan", "Hashir"];
let new_users: string[] = ["Shawaal", "Nancy", "Maham", "Manaan", "ahsaan"];

for (let i = 0; i < new_users.length; i++) {
  for (let j = 0; j < new_users.length; j++) {
    if (
      new_users[i].toLowerCase() === current_users[j].toLowerCase() ||
      new_users[i].toUpperCase() === current_users[j].toUpperCase()
    ) {
      console.log(
        new_users[i],
        " username has already been used. Enter a new username."
      );
      break;
    }
  }
}

for (let i = 0; i < new_users.length; i++) {
  for (let j = 0; j < 1; j++) {
    if (
      new_users[i].toLowerCase() !== current_users[j].toLowerCase() ||
      (new_users[i].toUpperCase() !== current_users[j].toUpperCase() &&
        new_users[i].toLowerCase() !== current_users[j + 1].toLowerCase()) ||
      (new_users[i].toUpperCase() !== current_users[j + 1].toUpperCase() &&
        new_users[i].toLowerCase() !== current_users[j + 2].toLowerCase()) ||
      (new_users[i].toUpperCase() !== current_users[j + 2].toUpperCase() &&
        new_users[i].toLowerCase() !== current_users[j + 3].toLowerCase()) ||
      (new_users[i].toUpperCase() !== current_users[j + 3].toUpperCase() &&
        new_users[i].toLowerCase() !== current_users[j + 4].toLowerCase()) ||
      new_users[i].toUpperCase() !== current_users[j + 4].toUpperCase()
    ) {
      console.log(new_users[i], " username is available.");
    }
  }
}
