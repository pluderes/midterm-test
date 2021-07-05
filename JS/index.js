// b1:
const inp = prompt("Nhap vao 1 chuoi: ");
inp.toLocaleLowerCase();
const str = inp.split("").join("");
function checkStr(string) {
  if (string === string.split("").reverse().join("")) {
    console.log("true");
  } else {
    console.log("Fail");
  }
}
checkStr(str);

// -------------------------------------------------------------
// b2:
import employee from "../Model/entities/employee.js";
import developer from "../Model/entities/developer.js";
import tester from "../Model/entities/tester.js";
import manager from "../Model/entities/manager.js";

const e1 = new employee("trungduc-e1", "task1");
const d1 = new developer("trungduc-d1", "task1");
const t1 = new tester("trungduc-t1", "task1");
const m1 = new manager("trungduc-m1", "task1", [e1, d1]);
const m2 = new manager("trungduc-m2", "task1", [t1]);

// m1.addEmployee(e1);
// m1.addEmployee(d1);
// m2.addEmployee(t1);

m1.displayInfo();
console.log("-----------");
m2.displayInfo();
console.log("-----------");
e1.displayInfo();
console.log("------------");
m1.displayInfo();

// ----------------------------------------------------------
// b3:
// 1 collection với các trường:
// name: tên,
// taskList: danh sách task,
// permission: phân quyền là developer hay tester hay manager

async function createAccount() {
  try {
    const userDone = await firebase.firestore().collection("employee").add({
      name: name.value,
      taskList: taskList.value,
      listEmplyee: listEmplyee.value,
      job: job.value,
    });
    helper.alertSuccess("Tạo nhân viên thành công");
  } catch (error) {
    helper.alertError(`${error.code} - ${error.message}`);
  }
}
