function Staff(id, name, email, password, datePicker, basicSalary, service, workHoursMonth) {  //totalSalary, type
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.datePicker = datePicker;
    this.basicSalary = basicSalary;
    this.service = service;
    this.workHoursMonth = workHoursMonth;
    // this.totalSalary = totalSalary;
    // this.type = type;
}

Staff.prototype.calcTotalSalary = function () {
    let totalSalary = 0;

    if (this.service === "Sếp") {
        return totalSalary = this.basicSalary * 3;
    }

    if (this.service === "Trưởng phòng") {
        return totalSalary = this.basicSalary * 2;
    }

    return totalSalary = this.basicSalary;
};

// Staff.prototype.calcRank = function () {

// }