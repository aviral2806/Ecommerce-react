# Project Overview

This project is an **eCommerce website** built using **React.js** with a dummy backend powered by **json-server-auth**. It features user authentication, routing with **react-router**, state management using **react-redux**, and styling with **Tailwind CSS**. The application is designed to provide a seamless shopping experience, allowing users to browse products, manage their cart, and authenticate their accounts.

## Features

- **Authentication**: User sign-up and login functionalities using JWT tokens.
- **Routing**: Navigation between different pages using react-router.
- **State Management**: Centralized state management with react-redux for efficient data handling.
- **Responsive Design**: Utilization of Tailwind CSS for a modern and responsive UI.
- **Dummy Backend**: A simulated backend using json-server to handle product data and user authentication.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Setup Instructions

1. **Clone the repository**:

2. **Install dependencies**:
   Run the following command in the project folder to install the necessary packages:

```bash
npm install
```

3. **Install json-server and json-server-auth**:
   To set up the dummy backend, run:

```bash
npm install json-server json-server-auth
```

4. **Run the Frontend**:
   Start the React application with:

```bash
npm run dev
```

5. **Run the Dummy Backend**:
   In a new terminal window, navigate to the project directory and run:

```bash
json-server data/db.json -m ./node_modules/json-server-auth -r data/routes.json
```

### Project Structure

The project consists of several key directories and files:

- `src/`: Contains all React components, Redux store setup, and routing logic.
- `public/`: Static files such as images and icons.
- `data/db.json`: The JSON file used by json-server to simulate the backend database.

## Conclusion

This eCommerce website serves as an excellent demonstration of building a full-featured web application using modern JavaScript technologies. With its modular architecture and responsive design, it provides a solid foundation for further enhancements and features in the future.

Feel free to explore the codebase, modify it, or use it as a starting point for your own projects!
