# Discover Chhattisgarh: Ek Virtual Safar

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D12.0.0-brightgreen.svg)](https://nodejs.org/)
[![Status](https://img.shields.io/badge/status-active-success.svg)](https://github.com)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-blue)](https://discover-chhattisgarh.vercel.app/)

> An immersive Virtual Reality web application that digitally showcases the rich culture, heritage, and natural beauty of Chhattisgarh, India.

** **Live Application:** [https://discover-chhattisgarh.vercel.app/](https://discover-chhattisgarh.vercel.app/)**

---

##  Table of Contents

- [Overview](#overview)
- [Live Demo](#-live-demo)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

##  Overview

**Discover Chhattisgarh: Ek Virtual Safar** is a cutting-edge mobile web application designed to promote tourism and cultural heritage through immersive Virtual Reality experiences. Users can explore famous temples, waterfalls, museums, and historical monuments of Chhattisgarh from anywhere in the world.

This project seamlessly integrates **tourism with modern technology**, providing an interactive platform for users to learn, plan, and virtually experience Chhattisgarh's most iconic destinations.

---

##  Live Demo

Experience the application live:

** [https://discover-chhattisgarh.vercel.app/](https://discover-chhattisgarh.vercel.app/)**

The application is deployed on **Vercel** and is accessible from any device with a modern web browser. For the best experience, use a mobile device with gyroscope support or a VR-compatible browser.

---

## Features

-  **Immersive VR Experience** - Full Virtual Reality support with WebXR
-  **Mobile-Optimized** - Responsive design for all devices
-  **Gyroscope Control** - Device motion sensors for natural navigation
-  **Interactive Panoramas** - 360-degree panoramic views of destinations
-  **Reset View** - Quick reset to default viewing angle
-  **Fullscreen Mode** - Enhanced immersive experience
-  **Easy Navigation** - Intuitive controls and user interface
-  **Modern UI/UX** - Beautiful animations and gradient backgrounds

---

##  Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations and gradients
- **JavaScript (ES6+)** - Interactive functionality
- **WebXR API** - Virtual Reality support
- **Device Motion API** - Gyroscope and accelerometer integration

### Backend
- **Node.js** - Server runtime
- **HTTP Server** - Lightweight server implementation
- **File System API** - Data persistence


## Installation

### Prerequisites

- **Node.js** (v12.0.0 or higher)
- **npm** (Node Package Manager)
- Modern web browser with WebXR support (Chrome, Edge, Firefox)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Minor Project"
   ```

2. **Navigate to server directory**
   ```bash
   cd server
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the server**
   ```bash
   node server.js
   ```

5. **Access the application**
   - Open your browser and navigate to: `http://localhost:4000`

---

##  Usage

### Basic Navigation

1. **Enter VR Mode**: Click the "Enter VR" button to activate Virtual Reality mode
2. **Enable Gyroscope**: Toggle the "Gyro" button to enable device motion controls
3. **Reset View**: Click "Reset View" to return to the default viewing angle
4. **Fullscreen**: Click "Fullscreen" for an immersive viewing experience

### Device Motion Controls

- **Mobile Devices**: Tilt and rotate your device to navigate the virtual environment
- **Desktop**: Use mouse drag to rotate the view
- **Scroll**: Zoom in/out using mouse wheel or pinch gesture

---

##  Project Structure

```
Minor Project/
│
├── public/
│   ├── index.html          # Main application file
│   └── assets/
│       └── panoramas/      # Panoramic images
│
├── server/
│   └── server.js           # Node.js server implementation
│
├── data/
│   └── places.json         # Tourist destinations data
│
└── README.md              # Project documentation
```

---

##  API Documentation

### Endpoints

#### Get All Places
```http
GET /api/places
```
Returns a JSON array of all tourist destinations.

**Response:**
```json
[
  {
    "id": "p001",
    "name": "Place Name",
    "description": "Description",
    "panorama": "path/to/panorama.jpg"
  }
]
```

#### Get Single Place
```http
GET /api/place?id={placeId}
```
Returns details of a specific place.

#### Create Place
```http
POST /api/places
Content-Type: application/json

{
  "id": "p001",
  "name": "Place Name",
  "description": "Description"
}
```

#### Update Place
```http
PUT /api/place?id={placeId}
Content-Type: application/json

{
  "name": "Updated Name"
}
```

#### Delete Place
```http
DELETE /api/place?id={placeId}
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Use consistent indentation (2 spaces)
- Follow JavaScript ES6+ conventions
- Add comments for complex logic
- Maintain responsive design principles

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

**Project Maintainer**  
Email: [adimishra2209@gmail.com]  
GitHub: [@adityamishra22092003](https://github.com/adityamishra22092003)

**Project Link**  
[https://github.com/adityamishra22092003/Discover-chhattisgarh](https://github.com/adityamishra22092003/Discover-chhattisgarh)

---

## Acknowledgments

- Chhattisgarh Tourism Board
- Panoee Platform for panoramic tour integration
- WebXR Community for VR standards
- All contributors and supporters
- Updated Version of our project 

---

##  Project Status

 **Active Development** - Currently in active development phase

**Current Version:** 1.0.0  
**Last Updated:** 2024  
**Live Deployment:** [https://discover-chhattisgarh.vercel.app/](https://discover-chhattisgarh.vercel.app/)

---

<div align="center">

**Made with Love for Chhattisgarh Tourism**

[⬆ Back to Top](#-discover-chhattisgarh-ek-virtual-safar)

</div>

ThankYou 
