import employee from "./employee.js";

class tester extends employee {
    constructor(name, taskList) {
        super(name, taskList);
    }
    get getName() {
      return this.name;
    }
    set setName(newName) {
      this.newName = newName;
    }
    get getTaskList() {
      return this.taskList;
    }
    set setTaskList(newTaskList) {
      this.taskList = newTaskList;
    }
  
    //   method
    displayInfo() {
      super.displayInfo();
    }
  }
  
  export default tester;