# Social Login and User Profile Management

This project is a React-based web application that allows users to log in using different social media platforms and manage their profile information.

## Features

Social login with GitHub, Google, and Facebook.
Profile management with the ability to update username, address, and other details.
Secure login using ReCaptcha.
Form validation for login and profile update.

## Prerequisites

Before getting started, make sure you have the following installed:

Node.js
npm or yarn

## Project Structure

The project follows the following structure:

social-login-profile-management/
|-- src/
| |-- components/
| | |-- Button.jsx
| | |-- OrBlock.jsx
| | |-- ReCaptcha.jsx
| | |-- ProfileComponent.jsx
| | |-- SocialIcons.jsx
| |-- features/
| | |-- auth/
| | | |-- authSlice.js
| |-- pages/
| | |-- Login.jsx
| | |-- Profile.jsx
| |-- App.jsx
| |-- index.jsx
|-- public/

components/: Contains reusable UI components like buttons, blocks, and ReCaptcha.
features/auth/: Manages authentication-related features, including the Redux slice (authSlice.js).
App.js: The main component that sets up the routes and renders different pages.
index.js: The entry point of the application.

## Technologies Used

React.js
Redux
React Router DOM
Tailwind CSS
React Google Recaptcha

## Usage

Visit the login page by navigating to http://localhost:3000/login.
Log in using one of the social media options (GitHub, Google, Facebook).
Update your profile information on the profile management page http://localhost:3000/profile.
Ensure secure login by completing the ReCaptcha verification.
