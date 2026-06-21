function TodoItem({
  id,
  todoName,
  todoDate,
  completed,
  onDeleteClick,
  onToggleComplete,
}) {
  // Format the date to show only the date part (YYYY-MM-DD)
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-between p-4 mb-3 rounded-lg border ${
        completed ? "bg-gray-50 border-gray-200" : "bg-white border-gray-200"
      } shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className="flex items-center mb-2 sm:mb-0 sm:flex-1">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleComplete(id)}
          className="w-5 h-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 mr-3"
        />
        <span
          className={`text-gray-700 font-medium ${
            completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todoName}
        </span>
      </div>
      <div className="text-gray-500 mb-2 sm:mb-0 sm:w-1/3">
        {formatDate(todoDate)}
      </div>
      <div>
        <button
          type="button"
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
          onClick={() => onDeleteClick(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
