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

##  Tech Stack

- [Next.js](https://nextjs.org/) – React framework with routing and SSR/CSR
- [Render.com](https://smart-goal-jsonserver.onrender.com) – Api deployment
- [Vercel](https://code-challenge-smart-goal-planner.vercel.app/)  – Frontend deployment
- JavaScript (ES6+)


###  Open in browser

App: (https://code-challenge-smart-goal-planner.vercel.app/) 



## Folder Structure
```
smart-goal-planner/
├── public/
│   └── favicon.ico
├── src/
│   └── app/
│       ├── components/
│       │   ├── Dashboard.jsx
│       │   ├── EditGoalForm.jsx
│       │   └── GoalCard.jsx
│       ├── edit/
│       │   └── [id]/
│       │       └── page.jsx
│       ├── new/
│       │   └── page.jsx
│       ├── layout.js
│       ├── page.js          # Main homepage
│       └── globals.css      # Global styles
├── db.json                 # json-server data 
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
└── README.md
```

## LICENSE
MIT License
## Author
Copyright (c) 2025 Mr-Dan-kibet
