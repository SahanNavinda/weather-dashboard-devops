# 🌦️ Weather Dashboard DevOps

## 👥 Group Information

| Student Name | Student ID | Role |
|--------------|------------|------|
| Sahan Navinda | ITBNM-2211-XXXX | Full Stack Developer & DevOps |
| Aasara Navoda | ITBNM-2211-XXXX | Code Reviewer & Collaborator |

---

# 📌 Project Description

Weather Dashboard DevOps is a responsive web application developed using Node.js, Express.js, HTML, CSS, and JavaScript. The application retrieves real-time weather information from the OpenWeather API and displays current weather conditions for any city entered by the user.

The project demonstrates Git Flow branching, Pull Requests, code reviews, GitHub Actions Continuous Integration (CI), Continuous Deployment (CD), and cloud deployment using Render.

---

# 🌐 Live Deployment

**Live URL**

https://weather-dashboard-devops-8mlz.onrender.com

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

## Sahan Navinda

- Designed and developed the Weather Dashboard UI
- Implemented Express.js backend
- Integrated OpenWeather API
- Configured GitHub Actions CI
- Created deployment workflow
- Configured Render deployment
- Managed Pull Requests
- Implemented Git Flow
- Resolved merge conflicts

---

## Aasara Navoda

- Reviewed Pull Requests
- Approved code changes
- Assisted with testing
- Verified deployments

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

Development

```bash
npm run dev
```

Production

```bash
npm start
```

Open

```
http://localhost:3000
```

---

# 🚀 CI/CD Deployment Process

1. Create a feature branch.
2. Develop the feature.
3. Commit changes.
4. Push to GitHub.
5. Create a Pull Request.
6. Code review and approval.
7. Merge into **develop**.
8. Create Release Pull Request to **main**.
9. GitHub Actions CI executes.
10. Render automatically deploys the application.

---

# ⚠ Challenges & Solutions

### API Integration

The application required fetching live weather information from the OpenWeather API.

**Solution**

Used Axios with asynchronous JavaScript (`async/await`) to retrieve and display weather data.

---

### Environment Variables

The API key was not detected during deployment.

**Solution**

Configured environment variables correctly using `.env` for local development and Render Environment Variables for deployment.

---

### Deployment Error

Render deployment initially failed due to missing dependencies.

**Solution**

Updated `package.json`, committed dependency changes, and redeployed successfully.

---

# 📷 Screenshots

## Home Page

(Add Screenshot)

---

## Search Weather

(Add Screenshot)

---

## Current Weather

(Add Screenshot)

---

## Live Conditions

(Add Screenshot)

---

## GitHub Actions

(Add Screenshot)

---

## Pull Request Approval

(Add Screenshot)

---

## Render Deployment

(Add Screenshot)

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
├── .env
└── README.md
```

---

# 🔮 Future Improvements

- 5-day weather forecast
- Hourly weather forecast
- Air Quality Index
- GPS location detection
- Dark / Light mode
- Favorite cities
- Weather alerts

---

# 📄 License

This project was developed for academic purposes as part of the Advanced DevOps Team Collaboration Assignment.

---

# 🙏 Acknowledgements

- OpenWeather API
- Node.js
- Express.js
- GitHub
- GitHub Actions
- Render