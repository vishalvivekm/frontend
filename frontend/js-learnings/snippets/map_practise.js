const friends = [
    {
        name: "Shashwat",
        age: 18,
        instagram: "@shashwat_verma"
    },
    {
        name: "Sumit",
        age: 19,
        instagram: "@sumitNarayana"
    },
    {
        name: "Dhirendra",
        age: 20,
        instagram: "@Dhirendra"
    }
];
const getInstagramIds =  (friend) => friend.instagram; // make a function
const Ids = friends.map(getInstagramIds); // pass that function as callback func in map()'s argument
console.log(Ids);

const InstagramIds = friends.map((friend) =>{
    return {
        Name:friend.name.toUpperCase(),
        IG:friend.instagram
    }
}); // return objects for each of the elements in the friends array
console.log(InstagramIds)