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

### The project follows the following structure:

#### Login Page (Login.js)

If the user is not authenticated, it will be redirected to the login page
We are presented with social login options (GitHub, Google, Facebook).
Upon successful login, we were redirected back to the profile page.

#### Profile Page (Profile.js)
The user navigates to the profile page (/profile) after a successful login.
They are presented with a form to edit their profile information.
The form includes fields such as username, first name, last name, address, city, country, postal code, and about.
The user updates the necessary information and submits the form.

#### Components (components/)
Button.js: A reusable button component for consistent styling.
OrBlock.js: A component for displaying an "or" block, separating different sections of the UI.
ReCaptcha.js: A component for implementing ReCaptcha verification in the login form.
SocialIcons.js: A component containing social media icons for use in the login page.

#### Redux (features/auth/)
authSlice.js: Manages the authentication state using Redux, including actions and reducers.

#### Routing (App.js)
Defines the routes for the landing page, login page, and profile page.
Uses React Router to navigate between different pages.

#### Entry Point (index.js)
Renders the main application component (App.js) and injects it into the root HTML element.

## Technologies Used

React.js,
Redux,
React Router DOM,
Tailwind CSS,
React Google Recaptcha

## Usage

Visit the login page by navigating to http://localhost:3000/login.
Log in using one of the social media options (GitHub, Google, Facebook).
Update your profile information on the profile management page http://localhost:3000/profile.
Ensure secure login by completing the ReCaptcha verification.
