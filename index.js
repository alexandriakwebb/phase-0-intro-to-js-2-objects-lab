// Write your solution in this file!
const employee = {
    name: "Alex",
    streetAddress: "599 Fox Den Trl", 
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};

    newObj[key] = value;

    return newObj;
};

const secondEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "Sam",
    "123 Empire Loop"
);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;

}

const thirdEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "Nick", "1600 Golf Course Lane");

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee[key]}
    delete newEmployee[key]
    return newEmployee;
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee;
}