"use client";
import React from "react";

export default function Dashboard({ goals }) {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, goal) => sum + goal.savedAmount, 0);
  const completedGoals = goals.filter(
    (goal) => goal.savedAmount >= goal.targetAmount
  ).length;

  const today = new Date();

  const overdueGoals = goals.filter((goal) => {
    const deadline = new Date(goal.deadline);
    return deadline < today && goal.savedAmount < goal.targetAmount;
  }).length;

  const nearDeadlineGoals = goals.filter((goal) => {
    const deadline = new Date(goal.deadline);
    const daysLeft = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
    return (
      daysLeft <= 30 && daysLeft > 0 && goal.savedAmount < goal.targetAmount
    );
  }).length;

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <section className="mb-8 text-black">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Goal Summary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="bg-blue-100 p-4 rounded shadow">
          <p className="text-lg font-bold">{totalGoals}</p>
          <p className="text-sm text-gray-600">Total Goals</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow break-words line-clamp-4">
          <p className="text-lg font-bold">{formatCurrency(totalSaved)}</p>
          <p className="text-sm text-gray-600">Total Saved</p>
        </div>
        <div className="bg-emerald-100 p-4 rounded shadow">
          <p className="text-lg font-bold">{completedGoals}</p>
          <p className="text-sm text-gray-600">Completed Goals</p>
        </div>
        <div className="bg-red-100 p-4 rounded shadow">
          <p className="text-lg font-bold">{overdueGoals}</p>
          <p className="text-sm text-gray-600">Overdue Goals</p>
        </div>
      </div>

      {nearDeadlineGoals > 0 && (
        <div className="bg-yellow-100 p-3 rounded text-yellow-800 mb-2">
          {nearDeadlineGoals} goal{nearDeadlineGoals > 1 ? "s" : ""} due within
          30 days!
        </div>
      )}
      {overdueGoals > 0 && (
        <div className="bg-red-200 p-3 rounded text-red-800">
          {overdueGoals} overdue goal{overdueGoals > 1 ? "s" : ""}!
        </div>
      )}
    </section>
  );
}
