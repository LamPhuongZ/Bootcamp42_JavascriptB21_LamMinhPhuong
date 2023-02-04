// Mảng chứa danh sách nhân viên
const staffList = [];

// Hàm thêm nhân viên
function createStaff() {
    // DOM 
    let id = getElement("#tknv").value;
    let name = getElement("#name").value;
    let email = getElement("#email").value;
    let password = getElement("#password").value;
    let datePicker = getElement("#datepicker").value;
    let basicSalary = +getElement("#luongCB").value;
    let service = getElement("#chucvu").value;
    let workHour = +getElement("#gioLam").value;

    // Khởi tạo object staff
    const staff = new Staff(id, name, email, password, datePicker, basicSalary, service, workHour);

    // Thêm object staff vào mảng staffList
    staffList.push(staff);

    // Gọi hàm rederTable để hiển thị danh sách staffList ra table
    renderTable(staffList);
}

// Hiển thị danh sách staff ra table
function renderTable(staffList) {
    let html = staffList.reduce((output, staff) => {
        return output + `
            <tr>
                <td>${staff.id}</td>
                <td>${staff.name}</td>
                <td>${staff.email}</td>
                <td>${staff.datePicker}</td>
                <td>${staff.service}</td>
                <td>${staff.calcTotalSalary()}</td>
                <td>${staff.calcTotalSalary()}</td>
            </tr>
        `;
    }, "");

    getElement(".modal-body").innerHTML = html;
}

function getElement(selector) {
    return document.querySelector(selector);
}