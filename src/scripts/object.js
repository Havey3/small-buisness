const build = (employeeName, employeeDepartment, employeeComputer) => {
    return `
    <section class="test"
    <header id="head">
    <h1>${employeeName}</h1>
    </header>
    <p>${employeeDepartment}</p>
    <p>${employeeComputer}</p>
    </section>
    `
}

export default build