class Manager{
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = this.officeNumber;
    }

    getName() {
        return `${this.name}`;
    }
    getId() {
        return JSON.parse(`${this.name}`);
    }

    getEmail() {
        return `${this.email}`;
    }
    getOfficeNumber() {
        return `${this.officeNumber}`;
      }
    getRole() {
        return "Intern";
      }
}

module.exports = Manager;