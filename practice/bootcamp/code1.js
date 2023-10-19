function PrintFriendsNames(name1, name2, name3) {
    const friends = [name1, name2, name3];
    friends.reverse();
    const greeting = "Hi " + friends.slice(0, -1).join(", ") + " and " + friends[2];
    console.log(greeting);
}
const name1 = ("nithin");
const name2 = ("Manoj");
const name3 = ("Manu");
PrintFriendsNames(name1, name2, name3);


