import build from "./object.js"


const print = (employee) => {
    document.querySelector("#attempt").innerHTML += build(employee.name, employee.department.departmentName, employee.computer.computerName)

}
export default print