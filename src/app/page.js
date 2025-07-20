import Link from "next/link"; //Importing Link component for client-side navigation in Next.js
import GoalCard from "./components/GoalCard";
/**fetching db.json data */
async function getGoals() {
  const res = await fetch("http://localhost:3001/goals", { cache: "no-store" });
  return res.json();
}
// Main page component that fetches and displays goals
export default async function Home() {
  const goals = await getGoal();

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6"> Smart Goal Planner</h1>
      <div className="flex justify-end mb-4">
        <Link
          href="/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Add a Goal
        </Link>
      </div>

      {goals.length === 0 ? ( //if there are no goals display add a new goal
        <div className="text-center text-gray-500 mt-10">
          <p className="text-lg font-medium">No goals added yet.</p>
          <p className="text-sm">Click "Add New Goal" to get started!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {goals.map((goal) => (
            <Goalcard key={goalid} goal={goal} />
          ))}
        </div>
      )}
    </main>
  );
}
