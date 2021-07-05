class employee {
  constructor(name, taskList) {
    this.name = name;
    this.taskList = taskList;
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
    if (this.listEmployee != undefined) {
      console.log(
        "\nName: ",
        this.name,
        "\nTask List: ",
        this.taskList,
        "\nEmployee List: ",
        this.listEmployee
      );
    } else {
      console.log("\nName: ", this.name, "\nTask List: ", this.taskList);
    }
  }
}

export default employee;
