import Link from "next/link";
import Dashboard from "./components/Dashboard"; // ✅ Import Dashboard
import GoalCard from "./components/GoalCard";
/**fetching db.json data */
async function getGoals() {
  const res = await fetch("http://localhost:3001/goals", { cache: "no-store" });
  return res.json();
}
// Main page component that fetches and displays goals
export default async function Home() {
  const goals = await getGoals();

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl text-purple text-center font-bold mb-6">
        Smart Goal Planner
      </h1>

      {/* ✅ Dashboard section */}
      {goals.length > 0 && <Dashboard goals={goals} />}

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
        <div className="grid grid-cols-1 md:grid-cols-2 text-black lg:grid-cols-3 gap-4">
          {goals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>
      )}
    </main>
  );
}
