# Autorent - Frontend

![image](https://github.com/gabrielcaamargo/autorent/assets/91189919/957f9d4e-c16b-4672-8e5f-5ee50f470389)

##

Welcome to the Autorent! This is the repository for the frontend of a car rental application developed in React with TypeScript. Autorent offers features for car rental, availability checking, reservation, and vehicle comparison, all in an environment reminiscent of a social network.

## Overview

Autorent was created to simplify and make the car rental process more interactive. It provides a user-friendly and intuitive experience. Below, you'll find information on how to set up and run the project, as well as details about the folder structure and key features.

## Development Environment Setup

To set up the development environment, follow the steps below:

1. Ensure that you have Node.js installed on your machine. If not, you can download it from [https://nodejs.org/](https://nodejs.org/).

2. Make sure you also have Yarn installed on your machine. If not, you can download it from [https://classic.yarnpkg.com/en/](https://classic.yarnpkg.com/en/).

3. Clone this repository to your machine:

   ```bash
   git clone https://github.com/gabrielcaamargo/autorent.git
   ```

4. Navigate to the project folder:

   ```bash
   cd autorent
   ```

5. Install project dependencies:

   ```bash
   yarn
   ```

## Running the Project

After setting up the development environment, you can start the Autorent project with the following command:

```bash
yarn dev
```

This will start the development server and open Autorent in your default browser.

## Folder Structure

The project's folder structure is organized as follows:

- `src/`: Contains the main source code of the application.
  - `components/`: Reusable components of the application.
  - `pages/`: Main pages of the application.
  - `assets/`: Contains files such as images, favicon, etc.
  - `contexts/`: Global state managers using contexts
  - `hooks/`: Custom hooks
  - `portals/`: React portals
  - `services/`: Functions to handle api calls
  - `types/`: Types
  - `tests/`: Tests settings
- `public/`: Contains public resources like images and HTML files.
- `package.json`: Project configuration file.

## Key Features

Autorent offers a range of interactive features for its users, including:

- **Car Rental**: Users can browse and rent a variety of cars available on the platform.

- **Availability Checking**: Users can check the availability of cars on specific dates.

- **Car Reservations**: Users can make car reservations for desired dates.

- **Vehicle Comparison**: Users can compare different car models based on features, prices, and more.

## Issues and Support

If you encounter any issues or have questions, feel free to open an issue in this repository. We're here to help!

We hope you enjoy working with Autorent and that it proves useful for your car rental needs. If you have any suggestions or feedback, don't hesitate to share them with us. Safe travels! 🚗✨
