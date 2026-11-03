// Question #8: Fetching User List from Server


// เริ่มเขียนโค้ดตรงนี้
function userList() {
    return fetch('https://jsonplaceholder.typicode.com/users');
}

function respond (res){
return res.json();
} 

function listName (data) {
     const newUsers = data.map((d) => d.name);
     console.log(newUsers)
}

userList()
.then(respond)
.then(listName)
.catch((err) => { console.log(err)});


