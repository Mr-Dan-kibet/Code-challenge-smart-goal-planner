"use client";
import { useRouter } from "next/navigation";
import React from "react";

// GoalCard component receives a single goal object as a prop
const GoalCard = ({ goal }) => {
  const router = useRouter();
  const { name, targetAmount, savedAmount, category, deadline, description } =
    goal;

  // Calculate progress percentage (capped at 100%)
  const progress = Math.min((savedAmount / targetAmount) * 100, 100);
  const remaining = targetAmount - savedAmount;

  // Handler for deleting the goal
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this goal?"
    );
    if (!confirmDelete) return;

    await fetch(`https://smart-goal-jsonserver.onrender.com/goals/${goal.id}`, {
      method: "DELETE",
    });

    router.refresh(); // Refresh the UI after deletion
  };

  // Navigate to edit form using router
  const handleEdit = () => {
    router.push(`/edit/${goal.id}`);
  };

  return (
    // layout for displaying a single goal
    <div className="border rounded-xl p-4 shadow-md bg-white">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-sm text-gray-500">{category}</p>
      <div className="my-2">
        <div className="h-3 bg-gray-200 rounded-full">
          <div
            className="h-3 bg-green-500 rounded-full"
            style={{ width: `${progress}%` }}></div>
        </div>
        <p className="text-sm mt-1">
          Saved: <strong>ksh.{savedAmount}</strong> / ksh.{targetAmount}
        </p>
        <p className="text-sm">
          Deadline: <strong>{deadline}</strong>
        </p>
        <p className="text-sm">
          Remaining: <strong>${remaining}</strong>
        </p>
        <p className="text-sm break-words line-clamp-4">
          Description: <strong>{description}</strong>
        </p>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={handleEdit}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">
          Delete
        </button>
      </div>
    </div>
  );
};

export default GoalCard;
