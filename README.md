# HireFlow – AI-Powered Job Portal & Applicant Tracking System

## Overview

HireFlow is a full-stack recruitment platform developed using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). The application streamlines the hiring process by enabling recruiters to post jobs, manage applicants, and track recruitment progress, while allowing candidates to search for jobs, apply online, upload resumes, and monitor application status.

The platform includes a built-in Applicant Tracking System (ATS) that helps recruiters efficiently manage candidates throughout different stages of the hiring process.

---

## Features

### Authentication & Authorization

* Secure user registration and login
* JWT-based authentication
* Password encryption using bcrypt
* Protected routes for authenticated users
* Role-based access control (Candidate and Recruiter)

### Candidate Features

* Browse available jobs
* Search jobs using keywords
* Filter jobs by location
* Apply for jobs
* Upload resume (PDF)
* View application history
* Track application status

### Recruiter Features

* Create job postings
* View all job applications
* Manage applicants
* Update application status

  * Applied
  * Screening
  * Interview
  * Selected
  * Rejected

### Applicant Tracking System (ATS)

* Application management dashboard
* Status tracking workflow
* Candidate and job relationship management
* Resume management

---

## Technology Stack

### Frontend

* React.js
* React Router DOM
* Axios
* HTML5
* CSS3
* JavaScript (ES6+)

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt.js
* Multer

### Database

* MongoDB
* Mongoose ODM

### Development Tools

* VS Code
* Git
* GitHub
* Postman
* MongoDB Atlas

---

## Project Architecture

Frontend (React)
↓
REST APIs (Axios)
↓
Backend (Express.js)
↓
MongoDB Atlas

Modules:

* Authentication Module
* Job Management Module
* Application Management Module
* Resume Upload Module
* Recruiter Dashboard
* Candidate Dashboard

---

## Database Collections

### Users

* Name
* Email
* Password
* Role
* Resume

### Jobs

* Title
* Company
* Location
* Salary
* Description
* Skills

### Applications

* Candidate Name
* Candidate Email
* Job ID
* Status

---

## Key Functionalities

### Job Posting Workflow

Recruiter Login
↓
Create Job
↓
Store in MongoDB
↓
Display on Job Portal

### Application Workflow

Candidate Login
↓
Browse Jobs
↓
Apply for Job
↓
Application Stored
↓
Recruiter Reviews Application
↓
Status Updated

### Resume Upload Workflow

Candidate Uploads PDF
↓
Stored on Server
↓
Resume Linked to Candidate Profile
↓
Recruiter Can Access Resume

---

## REST APIs

### Authentication APIs

* POST /api/auth/register
* POST /api/auth/login

### Job APIs

* POST /api/jobs
* GET /api/jobs

### Application APIs

* POST /api/applications
* GET /api/applications
* PUT /api/applications/:id

### Resume APIs

* POST /api/resume/upload
* POST /api/resume/save

---

## Challenges Solved

* Implemented secure JWT authentication and authorization.
* Designed role-based dashboards for candidates and recruiters.
* Built a complete Applicant Tracking System workflow.
* Integrated resume upload functionality using Multer.
* Developed search and filtering mechanisms for job discovery.
* Managed relationships between users, jobs, and applications using MongoDB.

---

## Learning Outcomes

Through this project, I gained hands-on experience in:

* Full Stack MERN Development
* REST API Design
* MongoDB Database Modeling
* Authentication & Authorization
* File Upload Handling
* Applicant Tracking Systems
* React State Management
* Backend Development with Express.js
* Real-world Software Development Practices

---

## Future Enhancements

* Cloudinary Resume Storage
* AI-Based Resume Matching
* Email Notifications
* Interview Scheduling
* Recruiter Analytics Dashboard
* Job Recommendation Engine
* Resume Parsing and Skill Extraction
* AI-Powered Candidate Ranking

