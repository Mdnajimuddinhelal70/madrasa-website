# Madrasa Website

A full-stack Madrasa Management Website built with modern web technologies.
The project is being developed with a separate frontend and backend architecture.

## 🚀 Tech Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui
* React Hook Form
* Zod
* Server Actions

### Backend

* Node.js
* Express.js
* TypeScript
* MongoDB
* Mongoose
* Zod
* Multer
* Cloudinary
* JWT Authentication

---

# 📌 Project Progress

## ✅ Completed

### Authentication

* [x] Admin login
* [x] JWT-based authentication
* [x] Access token handling with cookies
* [x] Protected dashboard routes
* [x] Admin authorization

### Teacher Management

* [x] Create Teacher
* [x] Get All Teachers
* [x] Get Teacher by ID
* [x] Teacher details page
* [x] Teacher management dashboard
* [x] Teacher image upload with Cloudinary
* [x] Teacher editing structure

### Student Management

* [x] Student database model
* [x] Create Student
* [x] Get All Students
* [x] Get Student by ID
* [x] Student details page
* [x] Student dashboard table
* [x] Edit Student
* [x] Student form validation with Zod
* [x] React Hook Form integration
* [x] Student profile picture support
* [x] Student status management
* [x] Student completion year
* [x] Student address information
* [x] Student guardian information

### Student Dashboard

The Student dashboard currently includes:

* Student profile picture
* Student name
* Father name
* Phone number
* Guardian phone
* Completion year
* Active/Inactive status
* Details action
* Edit action
* Delete action UI

### Frontend Structure

The project follows a component-based structure:


src/
├── app/
├── components/
├── services/
├── schemas/
└── ...

Server-side API communication is separated into service files to keep pages and components clean and maintainable.



# 🔄 Currently Working On

### Student Management Improvements

* [ ] Fix student image update/upload issue
* [ ] Complete student image replacement with Cloudinary
* [ ] Add student delete functionality
* [ ] Add delete confirmation dialog
* [ ] Improve loading states
* [ ] Add success/error notifications
* [ ] Improve student form UX

---

# 🛠️ Upcoming Features

### Teacher Management

* [ ] Complete Teacher Edit functionality
* [ ] Teacher Delete functionality
* [ ] Delete confirmation
* [ ] Better loading and error handling

### Student Management

* [ ] Student Delete
* [ ] Delete confirmation
* [ ] Search students
* [ ] Filter students
* [ ] Pagination
* [ ] Improved student profile page

### Manager Management

* [ ] Create Manager
* [ ] Get All Managers
* [ ] Edit Manager
* [ ] Delete Manager
* [ ] Manager authorization

### Course Management

* [ ] Create Course
* [ ] Course list
* [ ] Course details
* [ ] Edit Course
* [ ] Delete Course

### Notice Management

* [ ] Create Notice
* [ ] Notice list
* [ ] Edit Notice
* [ ] Delete Notice

### Dashboard Improvements

* [ ] Dashboard statistics
* [ ] Student statistics
* [ ] Teacher statistics
* [ ] Course statistics
* [ ] Notice statistics
* [ ] Better responsive dashboard UI

---

# 🌐 Deployment

### Frontend

Deployed with Vercel.

### Backend

Deployed with Render.

### Database

MongoDB Atlas.

### Image Storage

Cloudinary.



# 📁 Project Structure


madrasa-website/
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   └── schemas/
│   └── ...
│
├── backend/
│   ├── src/
│   │   ├── app/
│   │   ├── modules/
│   │   ├── middleware/
│   │   └── ...
│   └── ...
│
└── README.md


# 🎯 Project Goal

The goal of this project is to build a complete Madrasa Management System where administrators can manage:

* Students
* Teachers
* Managers
* Courses
* Notices
* Authentication
* Dashboard statistics

The project is being developed step by step with a focus on clean architecture, reusable components, validation, authentication, and real-world full-stack development practices.



# 📈 Development Status

**Status:** 🚧 In Active Development

The core authentication system and initial Teacher and Student management features are working. More management modules and dashboard functionality will be added progressively.
