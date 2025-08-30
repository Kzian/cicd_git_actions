![CI/CD Pipeline](https://github.com/Kzian/cicd_git_actions/actions/workflows/ci.yml/badge.svg)


# CICD Git Actions

A sample Node.js application demonstrating **Continuous Integration and Continuous Deployment (CI/CD)** using **GitHub Actions** and deployment to **Heroku**.

---

## 📂 Project Structure

```
.
├── .github/workflows/       # GitHub Actions workflow files
├── test/                    # Test scripts or configuration
├── .gitignore               # Git ignored files
├── Procfile                 # Heroku process file
├── index.js                 # Main Node.js application file
├── package.json             # Node.js dependencies and scripts
└── package-lock.json        # Locked versions of dependencies
```

---

## ⚡ Features

* Node.js web application
* CI/CD pipeline with **GitHub Actions**
* Automatic deployment to **Heroku**
* Environment variable support via `process.env.PORT`

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Kzian/cicd_git_actions.git
cd cicd_git_actions
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment to Heroku

1. **Login to Heroku**

```bash
heroku login
```

2. **Create a Heroku App**

```bash
heroku create your-app-name
```

3. **Add Heroku Remote**

```bash
heroku git:remote -a your-app-name
```

4. **Push Code to Heroku**

```bash
git push heroku main
```

5. **Open the App**

```bash
heroku open
```

---

## 🛠️ GitHub Actions CI/CD

* Workflow file located at `.github/workflows/`
* Automatically runs tests and deploys to Heroku on push to the `main` branch
* Example workflow steps:

  * Install dependencies
  * Run tests
  * Deploy to Heroku

---

## 📋 Procfile

Heroku uses the **Procfile** to start the app:

```
web: node index.js
```

---

## 📝 Notes

* Ensure your `index.js` listens on the Heroku-assigned port:

```javascript
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
```

* You can view live logs for troubleshooting:

```bash
heroku logs --tail
```

---

## 29/08/25

## 🚀 CI/CD Pipeline Summary

This project uses **GitHub Actions** for Continuous Integration (CI) and Continuous Deployment (CD) and was appended to the CICD Git actions repo.

### ✅ CI Features

* **Matrix builds**: Runs tests across multiple Node.js versions:

  * **16.x**
  * **18.x**
  * **20.x** (primary runtime, must pass)
* **Caching**: Speeds up dependency installs with GitHub Actions cache.
* **Linting**: Enforces code quality using **ESLint** (runs on Node 20).
* **Automated Testing**: Executes unit tests with **Mocha** on every push and pull request.

### 🚀 CD Features

* **Deployment to Heroku**:

  * Triggered only when pushing to the `main` branch.
  * Deploys the application using **Heroku API Key** stored in GitHub Secrets.
  * Uses Node.js **20.x** as the production runtime.

### 📊 Workflow Overview

1. Code pushed → GitHub Actions triggers the workflow.
2. Pipeline runs linting (Node 20 only) + tests (Node 16, 18, 20).
3. If Node 20 passes → code is deployed to **Heroku**.

---



