"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewGoalPage() {
  const router = useRouter();

  const [name, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [targetAmount, setTarget] = useState("");
  const [savedAmount, setSaved] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    /**How data is displayed in db.json */
    const newGoal = {
      name,
      category,
      description,
      targetAmount: Number(targetAmount),
      savedAmount: Number(savedAmount),
      deadline,
      createdAt: new Date().toISOString(),
    };
    /**sending data to db.json */
    const res = await fetch(
      "https://smart-goal-jsonserver.onrender.com/goals",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGoal),
      }
    );

    if (res.ok) {
      router.push("/"); // Go back home
    }
  };

  return (
    /**how the form will be displayed in /new route form */
    <main className="max-w-xl text-black mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Add New Goal</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Title</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={name}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Category</label>
          <select
            className="w-full border px-3 py-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
        </div>

        <div>
          <label className="block font-semibold">Description</label>
          <textarea
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter a short description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold">Target Amount</label>
          <input
            type="number"
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. 5000"
            value={targetAmount}
            onChange={(e) => setTarget(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold">Saved Amount</label>
          <input
            type="number"
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. 5000"
            value={savedAmount}
            onChange={(e) => setSaved(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold">Deadline</label>
          <input
            type="date"
            className="w-full border px-3 py-2 rounded"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save Goal
        </button>
      </form>
    </main>
  );
}
