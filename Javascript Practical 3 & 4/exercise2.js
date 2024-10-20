class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;

    // Validation checks
    if (this.name.length < 3) {
      throw new Error("Name must be at least 3 characters long.");
    }

    if (!this.isValidEmail(this.email)) {
      throw new Error("Invalid email format.");
    }

    if (typeof this.age !== "number" || this.age <= 0) {
      throw new Error("Age must be a number greater than 0.");
    }
  }

  // Validate email using a simple regex
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Method to get user details
  getDetails() {
    return `Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`;
  }

  // Method to change email with validation
  changeEmail(newEmail) {
    if (this.isValidEmail(newEmail)) {
      this.email = newEmail;
    } else {
      throw new Error("Invalid email format.");
    }
  }
}

class Admin extends User {
  constructor(name, email, age) {
    super(name, email, age);
    this.role = "admin";
    this.permissions = ["edit", "delete", "view"];
  }

  // Override getDetails to include role and permissions
  getDetails() {
    return `${super.getDetails()}, Role: ${
      this.role
    }, Permissions: ${this.permissions.join(", ")}`;
  }

  // Method to add a new permission
  addPermission(permission) {
    if (!this.permissions.includes(permission)) {
      this.permissions.push(permission);
    }
  }

  // Method to remove a permission
  removePermission(permission) {
    this.permissions = this.permissions.filter((p) => p !== permission);
  }

  // Override changeEmail to log changes
  changeEmail(newEmail) {
    if (this.isValidEmail(newEmail)) {
      console.log(`Admin ${this.name} changed their email to ${newEmail}`);
      super.changeEmail(newEmail);
    } else {
      throw new Error("Invalid email format.");
    }
  }
}

// Demo
try {
  // Create a User instance
  const user = new User("John Doe", "john@example.com", 25);
  console.log(user.getDetails()); // Name: John Doe, Email: john@example.com, Age: 25

  user.changeEmail("john.doe@example.com");
  console.log(user.getDetails()); // Name: John Doe, Email: john.doe@example.com, Age: 25

  // Create an Admin instance
  const admin = new Admin("Jane Admin", "jane.admin@example.com", 30);
  console.log(admin.getDetails()); // Name: Jane Admin, Email: jane.admin@example.com, Age: 30, Role: admin, Permissions: view, edit, delete

  admin.addPermission("manage");
  console.log(admin.getDetails()); // Name: Jane Admin, Email: jane.admin@example.com, Age: 30, Role: admin, Permissions: view, edit, delete, manage

  admin.removePermission("edit");
  console.log(admin.getDetails()); // Name: Jane Admin, Email: jane.admin@example.com, Age: 30, Role: admin, Permissions: view, delete, manage

  admin.changeEmail("jane.admin@newdomain.com"); // Logs email change
} catch (error) {
  console.error(error.message);
}
