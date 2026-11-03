// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
userTaskList.push({id: 5, task: 'Walk the dog'});
for(const user of userTaskList){
    if(user.id === 4){
      user.task = 'Go to the gym';
    }
}
userTaskList.pop();
let last = userTaskList[userTaskList.length-1];
console.log(`Task id: ${last.id}, ${last.task}`);
