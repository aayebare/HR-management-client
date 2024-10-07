# DfcuClient

This is an Angular-based application for managing staff members. The application provides functionalities for adding, editing, searching, and retrieving staff details, including uploading ID photos and storing other personal details.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)


## Features

- Add new staff members
- Search for staff by employee number
- Edit staff details, including uploading a new ID photo
- List all staff members
- Responsive design using Bootstrap

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 20.x or higher)
- [Angular CLI](https://angular.io/cli)

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/aayebare/HR-management-client.git
   cd HR-management-client

2. **Install dependencies**:

```bash
Copy code
npm install
```
3. **Set up the environment variables (see the Environment Variables section for more details)**.

4. **Run the development server**:

bash
Copy code
ng serve
5. **Open your browser and navigate to http://localhost:4200**.

## Environment Variables
In the root of the project, create an .env file or configure environment settings in src/environments/environment.ts. You will need to provide the backend API URL.

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api/staff' 
};
```
For production, update src/environments/environment.prod.ts accordingly.

## Usage
**Add New Staff**
Navigate to the "registerf" page and fill in the required details (e.g., name, date of birth, ID photo, authentication code). Upon submission, the staff member will be added to the system.

**Search Staff**
Use the search bar to look for staff members by their employee number. The list will update with the matched staff member's details.

**Edit Staff**
Click the edit button (pencil icon) next to a staff member's name to open the edit modal. You can update their details and upload a new ID photo.

## API Endpoints
The application interacts with a backend API for staff management. Below are the main API endpoints:

- ** POST /api/staff/register: Register a new staff member.
- ** GET /api/staff/
: Retrieve staff details by employee number.
- ** PUT /api/staff/:id
: Update staff details.
- ** GET /api/staff: Retrieve all staff members.

## Technologies Used
- ** Frontend: Angular, TypeScript
- **UI Framework: Bootstrap 5
- ** HTTP Client: Angular HttpClient
- ** Version Control: Git