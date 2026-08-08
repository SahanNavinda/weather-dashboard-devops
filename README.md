# 🌦️ Weather Dashboard DevOps

## 👥 Group Information

| Student Name | Student ID | Role |
|--------------|------------|------|
| D S N Vitharana | ITBIN-2211-0312 | DevOps Engineer |
| R M A Navoda | ITBIN-2211-0240 | Full Stack Developer |

---

# 📌 Project Description

Weather Dashboard DevOps is a responsive web application developed using Node.js, Express.js, HTML, CSS, and JavaScript. The application retrieves real-time weather information from the OpenWeather API and displays current weather conditions for any city entered by the user.

The project demonstrates collaborative software development using the Git Flow branching strategy together with GitHub Pull Requests, code reviews, GitHub Actions for Continuous Integration (CI), Continuous Deployment (CD), and cloud deployment using Render.

---

# 🌐 Live Deployment

**Live URL**

https://weather-dashboard-devops-8m1z.onrender.com/

---

# 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Node.js
- Express.js
- Axios
- Dotenv
- OpenWeather API
- Git
- GitHub
- GitHub Actions
- Render

---

# ✨ Features

## Current Weather

- Search weather by city
- Current temperature
- Weather description
- Weather icon

## Live Conditions

- Humidity
- Wind Speed
- Pressure
- Visibility
- Feels Like Temperature
- Sunrise
- Sunset

## User Interface

- Responsive dashboard
- Modern weather cards
- Search functionality
- Real-time weather updates

---

# 🌳 Branch Strategy

This project follows the Git Flow branching model.

- **main** → Production
- **develop** → Integration
- **feature/weather-search**
- **feature/deploy-workflow**
- **fix/package-config**

---

# 👨‍💻 Individual Contributions

## Sahan Navinda (DevOps Engineer)

- Created and managed the GitHub repository
- Implemented Git Flow branching strategy
- Created and managed feature branches
- Created Pull Requests and managed merge process
- Configured branch protection rules
- Configured GitHub Actions Continuous Integration (`ci.yml`)
- Configured GitHub Actions Continuous Deployment (`deploy.yml`)
- Deployed the application using Render
- Configured environment variables for deployment
- Resolved dependency and deployment issues
- Performed merge conflict creation and resolution


---

## Aasara Navoda (Full Stack Developer)

- Designed and developed the Weather Dashboard
- Implemented the Express.js backend
- Integrated the OpenWeather API
- Developed the frontend user interface
- Implemented weather search functionality
- Developed live weather information display
- Tested application functionality
- Reviewed and approved Pull Requests

---

# ⚙ Installation

## Prerequisites

- Node.js v18 or later
- Git

---

## Clone Repository

```bash
git clone https://github.com/SahanNavinda/weather-dashboard-devops.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Create Environment File

Create a `.env` file in the project root.

```env
OPENWEATHER_API_KEY=YOUR_API_KEY
```

---

## Run Project

Development mode

```bash
npm run dev
```

Production mode

```bash
npm start
```

Open your browser and visit:

```
http://localhost:3000
```

---

# 🚀 CI/CD Deployment Process

1. Create a feature branch.
2. Develop the feature.
3. Commit and push changes.
4. Create a Pull Request.
5. GitHub Actions CI workflow runs automatically.
6. Code review and approval.
7. Merge into **develop**.
8. Create a Release Pull Request to **main**.
9. GitHub Actions deployment workflow executes.
10. Render automatically deploys the latest version.

---

# ⚠ Challenges & Solutions

### API Integration

The application required fetching live weather information from the OpenWeather API.

**Solution**

Used Axios with asynchronous JavaScript (`async/await`) to retrieve and display weather information.

---

### Environment Variables

The OpenWeather API key was not detected during deployment.

**Solution**

Configured environment variables correctly using a local `.env` file and Render Environment Variables.

---

### Deployment Issues

Initial deployment failed because required dependencies were missing.

**Solution**

Updated `package.json`, regenerated `package-lock.json`, and redeployed the application successfully.

---

### Merge Conflict Resolution

An intentional merge conflict was created and resolved to demonstrate collaborative Git workflows.

**Solution**

Both developers modified the same file, resolved the conflict manually, committed the changes, and successfully completed the merge.

---

# 📂 Project Structure

```text
weather-dashboard-devops
│
├── .github
│   └── workflows
│       ├── ci.yml
│       └── deploy.yml
│
├── public
│   ├── css
│   │   └── style.css
│   ├── js
│   │   └── app.js
│   └── index.html
│
├── app.js
├── package.json
├── package-lock.json
├── README.md
└── .env (not committed)
```

---

# 🔮 Future Improvements

- 5-day weather forecast
- Hourly weather forecast
- Air Quality Index
- GPS location detection
- Dark / Light theme
- Favorite cities
- Weather alerts

---

# 📄 License

This project was developed for academic purposes as part of the **Advanced DevOps Team Collaboration Assignment**.

---

# 🙏 Acknowledgements

- OpenWeather API
- Node.js
- Express.js
- GitHub
- GitHub Actions
- Render
