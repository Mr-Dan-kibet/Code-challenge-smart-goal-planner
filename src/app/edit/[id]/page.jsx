import EditGoalForm from "../../components/EditGoalForm";

export default async function EditPage({ params }) {
  const res = await fetch(
    `https://smart-goal-jsonserver.onrender.com/goals/${params.id}`
  );
  const goal = await res.json();

  // Rendering the EditGoalForm component and passing the fetched goal as a prop
  return (
    <div className="max-w-xl mx-auto mt-10">
      <EditGoalForm goal={goal} />
    </div>
  );
}
