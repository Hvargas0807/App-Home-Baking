# 🧁 App Home Baking - Automation Testing Project

End-to-end (E2E) automation testing project developed using Cypress to validate core functionalities of the App Home Baking application.

---

## 📌 Project Overview

This project contains automated tests designed to validate critical user flows and UI behaviors of the application.

### Main Test Scenarios Covered

- ✅ User authentication
- ✅ Account/product validation
- ✅ UI content verification
- ✅ Functional navigation flows
- ✅ Data validation within account cards

The goal of this project is to demonstrate structured, maintainable, and scalable test automation practices.

---

## 🛠 Tech Stack

- **Cypress**
- **JavaScript (ES6+)**
- **Node.js**
- **Git & GitHub**

---

## 📂 Project Structure

cypress/
│
├── e2e/ # Test specifications
├── fixtures/ # Static test data
├── support/ # Custom commands and global configuration
│
cypress.config.js # Cypress configuration file
package.json # Project dependencies and scripts


## ⚙️ Installation

Clone the repository:

git clone https://github.com/Hvargas0807/App-Home-Baking.git


Navigate into the project:

cd App-Home-Baking


Install dependencies:

npm install


---

## ▶️ Running Tests

### Open Cypress Test Runner (UI mode)

npx cypress open


### Run tests in headless mode

npx cypress run


---

## 📊 Test Artifacts

Cypress automatically generates:

- Screenshots (for failed tests)
- Video recordings (when running headless)

Artifacts are stored in:

cypress/screenshots/
cypress/videos/


---

## 🧩 Automation Approach

- Assertions are designed to be stable and readable
- Tests avoid hard-coded waits
- Selectors are targeted and specific
- Test cases are structured for maintainability
- Validation logic accounts for real DOM content (not CSS transformations)

---

## 🚀 Future Improvements

- Implement Page Object Model (POM)
- Add API testing coverage
- Integrate GitHub Actions for CI/CD
- Add test reporting (Mochawesome or similar)
- Increase test data parameterization

---

## 👤 Author

**Habid Vargas**  
QA Automation Engineer 
