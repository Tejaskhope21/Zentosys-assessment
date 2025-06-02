export default function FilterButtons({ filter, setFilter }) {
  return (
    <div className="flex justify-center gap-3 mt-4">
      {["all", "completed", "pending"].map((f) => (
        <button
          key={f}
          className={`px-3 py-1 rounded ${
            filter === f
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
          onClick={() => setFilter(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}
