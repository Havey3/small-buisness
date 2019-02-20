import print from "./print.js"
const api = () => {
fetch("http://localhost:8088/employees?_expand=department&&_expand=computer")
.then(employees => employees.json())
.then(employees => {
    employees.forEach(employee => {
        print(employee)
    })
})
}

export default api