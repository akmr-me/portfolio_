# My Portfolio

Welcome to my portfolio website! This project showcases my skills, projects, and professional experience. The website is built using React.js and Node.js and includes features such as sending messages via the Mailjet API and downloading my resume. Additionally, the application is containerized using Docker for easy deployment and management.

## Features

- **Responsive Design**: The website is designed to be responsive, ensuring it looks great on both desktop and mobile devices.
- **Contact Form**: Users can send messages directly from the website using the Mailjet API.
- **Resume Download**: Users can download my resume in PDF format.
- **Dockerized Application**: The application is containerized using Docker, making it easy to deploy and manage.

## Technologies Used

- **Frontend**: React.js, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **API**: Mailjet API for sending messages
- **Containerization**: Docker

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/amresh-kumar-singh/portfolio_.git
   cd portfolio_
   ```

2. **Create a .env file in server directory**

   ```bash
   PORT=7001
   MAILJET_API_KEY=your_mailjet_api_key
   MAILJET_API_SECRET=your_mailjet_api_secret

   ```

3. **Build and Run container**

   ```bash
   ENV=development docker compose -f docker-compose.development.yml up --build

   ```

4. **Access the website**

   Open your browser and go to http://localhost:7000
