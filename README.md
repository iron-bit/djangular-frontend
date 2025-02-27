![Logo](https://github.com/iron-bit/djangular-frontend/blob/main/public/assets/logo_footer.png)

# Blueddit: The Community-Driven Content Hub

Dive into Blueddit, a Django and Angular-powered platform designed for users to connect, share, and engage with content tailored to their interests. Similar to Reddit, Blueddit offers:

- **Communities:** Create or join communities to discuss topics with like-minded individuals.
- **Posts:** Share your thoughts, ideas, or media either within communities or as standalone posts.
- **Tags:** Enhance discoverability by tagging your posts.
- **Filtering:** Find what interests you the most by filtering posts based on tags.

Blueddit empowers users to build vibrant communities, explore diverse topics, and stay connected with the content they care about.

---

## Table of Contents

- [Introduction](#introduction)
- [🛠 Tech Stack](#-tech-stack)
- [🚀 Deployment](#-deployment)
- [📚 API Reference](#-api-reference)
- [💥 Screenshots](#-screenshots)
- [✍️ Authors](#authors)
- [License](#license)

---

## Introduction

Blueddit is a platform designed for users to connect, share and participate in communities on topics of interest. Inspired by Reddit, it allows users to create and join communities, post content, tag and filter posts, facilitating an interactive and collaborative experience.

---

## 🛠 Tech Stack

**Client:** Angular CLI, HTML, CSS, TailwindCSS, TypeScript, JavaScript  
**Server:** Node, Django, Python  
**Tools:** Postman, SQLite, Figma, Git, GitHub, VSCode, PyCharm

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" height="30" alt="angular logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css3 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" height="40" alt="django logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="40" alt="python logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" height="40" alt="postman logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" height="40" alt="sqlite logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height="40" alt="figma logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" alt="git logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" alt="github logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="40" alt="vscode logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" height="40" alt="pycharm logo"  />
</div>

---

## 🚀 Deployment

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

### Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

## 📚 API Reference

This section describes the main endpoints for authentication and API usage.  
Remember that for making protected requests, you must include the token in the Authorization header using the following format:

Authorization: Bearer <your-access-token>

### User Registration
- Endpoint:
```bash
{{api_dir}}register/
```
- Request Body:
```bash
{
    "username": "newuser223",
    "email": "newuser23@example.com",
    "password": "newpassword1233",
    "age": 33
}
```
Description:
Sends the user data to register a new user. If the request is successful, you will receive a confirmation message indicating that the registration was completed successfully.

### Login and Token Retrieval
Endpoint:
```bash
{{api_dir}}token/
```
- Request Body:
```bash
{
    "username": "newuser223",
    "password": "newpassword1233"
}
```
Description:
Uses the registered user's credentials to obtain authentication tokens. The response will include the token that must be used in subsequent requests.


### Authorized Requests
Once you have obtained the token, include the following header in your requests to access protected endpoints

- Example Header:
```bash
Authorization: Bearer your-access-token
```
This header enables you to perform POST requests (and others) on endpoints that require authentication.

---

## 💥 Screenshots
[Sketchs](https://www.figma.com/design/pCDxEVIjtu6eDOV7LWddUT/Djangular?node-id=662-2&t=bzEkyY1lCI01xzqG-1)

![image](https://github.com/user-attachments/assets/1517709f-0cbd-4f77-a767-c597372f1295)

![image](https://github.com/user-attachments/assets/69243f29-b274-45ea-b80c-96b80ee7cfd5)

![image](https://github.com/user-attachments/assets/54ede664-c6c8-4a7e-ae68-9480841ae577)



---

## ✍️ Authors

### [IronBit](https://github.com/iron-bit)

<div align="left">
  <a href="https://github.com/Timasostima" style="color: black; font-weight: bold; text-decoration: none;">@Timasostima</a> |
  <a href="https://www.linkedin.com/in/tymur-kulivar-shymanskyi/" style="color: #0A66C2; font-weight: bold; text-decoration: none;">LinkedIn</a>
  <img width="15" />
  <a href="https://github.com/VulpeenGX" style="color: black; font-weight: bold; text-decoration: none;">@VulpeenGX</a> |
  <a href="https://www.linkedin.com/in/alejandro-gutierrez-31671b330/" style="color: #0A66C2; font-weight: bold; text-decoration: none;">LinkedIn</a>
  <img width="15" />
  <a href="https://github.com/Rutherfordio78" style="color: black; font-weight: bold; text-decoration: none;">@Rutherfordio78</a> |
  <a href="https://www.linkedin.com/in/jaime-gutierrez-pereira-330430348/" style="color: #0A66C2; font-weight: bold; text-decoration: none;">LinkedIn</a>
  <img width="15" />
  <a href="https://github.com/ciovanes" style="color: black; font-weight: bold; text-decoration: none;">@ciovanes</a> |
  <a href="https://www.linkedin.com/in/ciovanes/" style="color: #0A66C2; font-weight: bold; text-decoration: none;">LinkedIn</a>
  <img width="15" />
  <a href="https://github.com/RedondoDev" style="color: black; font-weight: bold; text-decoration: none;">@RedondoDev</a> |
  <a href="https://www.linkedin.com/in/javier-redondo-fern%C3%A1ndez-680957285/" style="color: #0A66C2; font-weight: bold; text-decoration: none;">LinkedIn</a>
</div>

---

## License
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

