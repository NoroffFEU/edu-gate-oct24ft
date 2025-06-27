# Edu-gate
![image](https://github.com/user-attachments/assets/da273574-e5e1-4f18-bbce-12f8272adc5a)

EduGate is a web-based result management system designed for high schools in Nigeria. The platform allows **students**, **teachers**, and **admins** to view, update, and manage academic records efficiently — with a clean, responsive UI.

## Requirements

For development, you will only need node version >=18.17.1 and npm version >=10.8.2 installed in your environement.

## Technologies

    - HTML
    - CSS
    - JS


## For the developers:

### Getting started
   ```bash
# Clone the repository
git clone https://github.com/NoroffFEU/edu-gate-oct24ft.git

# Navigate into the project folder
cd edu-gate-oct24ft

# Install dependencies
npm install

# Start the development server
npm run dev

```

---

## 🧩 Shared Components

The header, navbar, and footer are dynamically rendered via JavaScript.  
You can find usage instructions in [`/src/script/utils/components/README.md`](./src/script/utils/components/README.md).

---
## 🔐 For Testing the Login System:

### Mock Login System (Development Only)
This project includes a mock login setup meant only for development and demonstration purposes.
No real authentication is being used. Instead, we simulate login using locally stored user data. 
See [`/src/script/api/README.md`](./src/script/api/README.md) for more details and example usage.

There are three different user types, and four different users. Here are their login credentials:

### 1.

email: joeblogs2024@edugate.no
password: joe

### 2.

username: student
password: student123

### 3.

username: teacher
password: teacher123

### 4.

username: admin
password: admin123

---

### How to Log In as a Student:
1. Open the Landing Page: index.html

2. Click the “Sign up” or “Login” button on the Landing Page.

3. Fill out the login form using this demo student's credentials:

| Name:  |   Surname:  | Email: | Password: |
|--------|-------------|--------|-----------|
| Joe  | Bloggs | joeblogs2024@edugate.no | joe |

5. If the credentials are correct, you'll be logged in as a student and a green confirmation popup will appear (only on login).

All accounts are stored in /src/script/api/user.json or /src/script/api/signup-user.json



---
You can also log in directly through the browser console by calling the login function manually using either:
```bash
{ "username": "student", "password": "student123", "role": "student" }
{ "username": "admin", "password": "admin123", "role": "admin" }
{ "username": "teacher", "password": "teacher123", "role": "teacher" }
```
## Contributors


| Role | GitHub Username |
|------|-----------------|
|  Quality Assurance Engineer | [emmelinlarina](https://github.com/emmelinlarina) |
|  Developers | [larstp](https://github.com/larstp), [jankbyr](https://github.com/jankbyr), [jb12-art](https://github.com/jb12-art), [susannt](https://github.com/susannt), [lowrensRosinelli](https://github.com/lowrensRosinelli)  |
|  Scrum Master |[nadiia-balitska](https://github.com/nadiia-balitska) 
