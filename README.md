#  Smart Goal Planner 

A savings goal management dashboard built with **Next.js**. This application allows users to set, track, and manage multiple financial goals, make deposits, and visualize progress over time. Data is persisted using a mock REST API powered by `json-server`.

##  Features

- **Create** savings goals (e.g. Travel Fund, Emergency Fund)
- **Read** all goals from the backend (via `json-server`)
- **Update** goal details (name, target amount, deadline, category)
- **Delete** unwanted goals
- **Deposit** money toward a goal to increase the saved amount
- **Track progress** visually with progress bars and goal statuses
- **Overview dashboard** displaying:
  - Total goals
  - Total amount saved
  - Completed goals
  - Time remaining
  - Warnings for goals near deadline
  - “Overdue” label if deadline is missed without completion

## Tech Stack

- [Next.js](https://nextjs.org/) – React framework with routing and SSR/CSR
- [json-server](https://github.com/typicode/json-server) – Local REST API for data persistence
- [Tailwind CSS](https://tailwindcss.com/) *(optional)* – Utility-first styling
- JavaScript (ES6+)

##  Setup Instructions

### 1. Clone the project
```
git clone https://github.com/your-username/smart-goal-planner.git
cd smart-goal-planner
```
### 2. Install dependencies
```
npm install
```
### 3. Set up json-server
```
npx json-server --watch db.json --port 3000
```
### 4. Run the Next.js app
```
npm run dev
```
### 5. Open in browser

App: http://localhost:3000 — (Next.js app, will conflict with json-server port — see note below)

JSON Server API: http://localhost:3001/goals

Port Conflict?
If both json-server and Next.js default to port 3000:

Change the json-server port to 3001 like this:
```
npx json-server --watch db.json --port 3001
```
Then in your app, use http://localhost:3001/goals as your API base URL.

## Folder Structure

## License

