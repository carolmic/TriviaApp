# TriviaApp
This project is an interactive quiz application built using modern web development technologies. The app fetches trivia questions from an external API and displays them with a shuffled list of possible answers for each question. The app is designed to provide an engaging and responsive experience for users.

## Demo
You can access the demo [here](https://trivia-app-wine.vercel.app/)
![image](https://github.com/user-attachments/assets/51352781-7ff9-4854-bea6-5ae1b24497f8)


## Features
* Fetches trivia questions from the [Open Trivia Database](https://opentdb.com/api_config.php).
* Dynamically shuffles multiple choice answers to create unique quizzes every time.
* Dynamic and interactive background.
* Design using Tailwind CSS for styling.
* Radix UI for accessible and customizable UI components.
* Next.js 12 for server-side rendering and API integration.
  
## Technologies Used
* Next.js 12: Framework for React that enables server-side rendering and static site generation.
* React: JavaScript library for building user interfaces.
* TypeScript: Strongly typed JavaScript for better code quality and developer experience.
* Tailwind CSS: Utility-first CSS framework for rapid UI development.
* Radix UI: A set of accessible and customizable React components.
* Open Trivia Database API: Source of trivia questions for the quiz.
* TSParticles: a library used for creating interactive and dynamic backgrounds.

## How It Works
* The app fetches a set of 10 trivia questions with multiple choice answers from the Open Trivia Database API.
* For each question, the possible answers (including the correct and incorrect ones) are shuffled to ensure a randomized order.
* The user can select an answer and proceed to the next question.
  
## Installation and Setup
### Clone the repository:

`git clone https://github.com/carolmic/TriviaApp.git`

### Navigate to the project directory:

`cd TriviaApp/trivia-app`

### Install dependencies:

`npm install`

### Start the development server:

`npm run dev`

Open your browser and navigate to http://localhost:3000 to see the quiz in action.
