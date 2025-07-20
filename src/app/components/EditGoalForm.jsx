"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditGoalForm({ goal }) {
  const router = useRouter(); // Used to navigate programmatically
  const [formData, setFormData] = useState({
    name: goal.name,
    targetAmount: goal.targetAmount,
    savedAmount: goal.savedAmount,
    category: goal.category,
    deadline: goal.deadline,
    description: goal.description,
  });

  // Update form state when input values change
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`http://localhost:3001/goals/${goal.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    router.push("/"); // redirect to homepage
    router.refresh(); // refresh the list
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-white text-black shadow-md rounded-xl">
      <h2 className="text-xl font-bold">Edit Goal</h2>

      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Goal Name"
        className="w-full border rounded p-2"
      />

      <input
        name="targetAmount"
        value={formData.targetAmount}
        onChange={handleChange}
        type="number"
        placeholder="Target Amount"
        className="w-full border rounded p-2"
      />

      <input
        name="savedAmount"
        value={formData.savedAmount}
        onChange={handleChange}
        type="number"
        placeholder="Saved Amount"
        className="w-full border rounded p-2"
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full border rounded p-2"
        required>
        <option value="">-- Select a category --</option>
        <option value="Health">Health</option>
        <option value="Social Life">Social Life</option>
        <option value="Fun & Recreation">Fun & Recreation</option>
        <option value="Learning">Learning</option>
        <option value="Spiritual">Spiritual</option>
        <option value="Rest & Renewal">Rest & Renewal</option>
        <option value="Travel & Leisure">Travel & Leisure</option>
        <option value="Career">Career</option>
        <option value="Education">Education</option>
        <option value="Financial">Financial</option>
        <option value="Personal Development">Personal Development</option>
        <option value="Relationships">Relationships</option>
        <option value="Fitness">Fitness</option>
        <option value="Generosity">Generosity</option>
        <option value="Hobbies & Interests">Hobbies & Interests</option>
      </select>

      <input
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
        type="date"
        className="w-full border rounded p-2"
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border rounded p-2"
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Save Changes
      </button>
    </form>
  );
}
