window.addEventListener('DOMContentLoader', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
});

const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    } catch (e) {
        return;
    }
}

function saveEmployeeDetails() {
    let name = document.getElementById("name").value
    console.log(name);

    let department = document.getElementsByClassName("checkbox")
    for (var i = 0; i < department.length; i++) {
        if (department[i].checked) {
            console.log(department[i].value)
        }
    }
    console.log(department);

    let gender = document.getElementsByName("gender")
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            console.log(gender[i].value)
        }
    }
    console.log(gender);
}


// const getSelectedValues = (propertyValue) => {
//     let allItems = document.querySelectorAll(propertyValue);
//     let selItems = [];
//     allItems.forEach(item => {
//         if (item.checked) selItems.push(item.value);
//     });
//     return selItems;
// }

// const getInputValueById = (id) => {
//     let value = document.querySelector(id).value;
//     return value;
// }

// const getInputElementValue = (id) => {
//     let value = document.getElementById(id).value;
//     return value;
// }

function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (employeePayrollList != undefined) {
        employeePayrollList.push(employeePayrollData);
    } else {
        employeePayrollList = [employeePayrollData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
}

const resetForm = () => {
    setValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name = department]');
    setValues('#salary', '');
    setValue('#notes', '');
    setValue('#startDate', '1-January-2020');
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

// const createEmployeePayrollJSON = () => {
//     let empPayrollListLocal = [
//         {
//             _name : 'Meghna',
//             _gender : 'Female',
//             _department : [
//                 'Engineering',

//             ],
//             _salary: '1000',
//             _startDate: '1 Jan 2021',
//             _note: '',
//             _id: new Date().getTime(),
//             _profilePic: '../assets/profile-images/Ellipse -3.png'
//         },
//         {
//             _name : 'Mayank',
//             _gender : 'Male',
//             _department : [
//                 'Finance',

//             ],
//             _salary: '2000',
//             _startDate: '1 Feb 2021',
//             _note: '',
//             _id: new Date().getTime(),
//             _profilePic: '../assets/profile-images/Ellipse -1.png'
//         }
//     ];
//     return empPayrollListLocal;
// }

const remove = (node) => {
    let empPayrollData = empPayrollList.find(empData.id == node.id);
    if(!empPayrollData) return;
    const index = empPayrollList
            .map(empData => empData.id)
            .indexOf(empPayrollData._id);
    empPayrollList.splice(index,1);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
}