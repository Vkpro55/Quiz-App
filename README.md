# Quiz App

This project is a simple quiz application where users can register, log in, create quizzes, take quizzes, and view their results. It's built using Node.js, Express.js, MongoDB, and EJS.

## Live Demo on Glitch:
[https://example-glitch-demo.com](https://example-glitch-demo.com)

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
  - [Endpoints](#endpoints)
    - [GET /quizzes](#get-quizzes)
    - [POST /create-quiz](#post-create-quiz)
    - [GET /take-quiz/:quizId](#get-take-quizquizid)
    - [POST /submit-quiz/:quizId](#post-submit-quizquizid)
- [Testing](#testing)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)

## Getting Started

### Prerequisites

Ensure that you have the following installed:

- Node.js (v12.x or later)
- npm (v6.x or later)
- MongoDB (or MongoDB Atlas for cloud DB)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Vkpro55/Quiz-App.git
   cd Quiz-App
