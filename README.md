Travlr Portal – Final Full Stack Web Application
 Overview
Travlr Portal is a full stack travel booking app built using the MEAN stack (MongoDB, Express, Angular, Node.js). Customers can browse available trips, while admins can securely log in and manage trips using a single-page Angular interface. The project incorporates secure login with JWT authentication, full CRUD functionality, and a NoSQL backend.

Architecture
- Frontend Approaches
This app uses two types of frontend rendering:

Express + Handlebars: Used for the public-facing pages, allowing dynamic server-side rendering of trip listings.

Angular SPA: Used for the admin dashboard, giving a modern, responsive interface for managing trips without full page reloads.

Using both made me more comfortable switching between old-school rendering and more reactive, component-driven design.

- Why NoSQL (MongoDB)?
I used MongoDB because it works naturally with JSON data and pairs well with Mongoose in Node.js. Since trip info and user data don’t require rigid schemas, the flexibility of a NoSQL structure made development easier and more adaptable.

 Functionality
- JSON in the Stack
JSON acts as the glue between the frontend and backend. Angular sends JSON in POST/PUT requests and receives it from Express as response data. Unlike regular JavaScript, JSON is purely data, not behavior, and is easily parsed and stringified across layers.

- Code Refactoring and UI Reusability
I refactored multiple times, especially during admin SPA development, to reuse components for Add Trip and Edit Trip forms. Benefits:

Cleaner codebase

Faster testing

Easier future updates (like validations)

 Testing
- API Methods, Endpoints, and Security
I tested endpoints using Postman and Angular’s HTTPClient. Here’s how everything connects:

GET/POST/PUT/DELETE methods mapped to /api/trips and /api/trips/:id

After securing endpoints, I tested routes with and without tokens to verify authentication via JWT middleware

Debugging protected endpoints gave me a better grasp of token handling in real applications

 Reflection
This course pushed me to fully build and deploy a real full stack app, which felt overwhelming at first. But now, I feel more confident in:

Working with RESTful APIs

Writing secure, modular backend code

Creating clean frontend UIs with Angular

Managing Git branches across large projects

Building something from scratch (that actually works) made me feel like a real developer. It also gave me solid portfolio material I can use for internships or job applications in web development.

