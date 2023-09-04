// Write your solution in this file!
const employee = {
    name: `Alex`,
    streetAddress: `599 Fox Den Trl`,
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return { ...obj, [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const newEmployee = {...obj[key]};
    delete newEmployee.key;
    return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}