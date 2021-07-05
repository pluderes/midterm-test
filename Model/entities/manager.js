import employee from "./employee.js";

class manager extends employee {
  constructor(name, taskList, listEmployee) {
    super(name, taskList);
    this.listEmployee = listEmployee;
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
  get getListEmployee() {
    return this.listEmployee;
  }
  set setListEmployee(newListEmployee) {
    this.listEmployee = newListEmployee;
  }

  //   method
  displayInfo() {
    super.displayInfo();
  }
  addEmployee(e) {
    this.listEmployee.push(e);
  }
}

export default manager;
