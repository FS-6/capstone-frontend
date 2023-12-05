export default function Category({ category, onClick, isActive }) {
  const buttonClass = isActive
    ? "text-sm p-1 px-3 border rounded-lg text-white bg-red-500 overflow-hidden hover:bg-red-700"
    : "text-sm p-1 px-3 border rounded-lg text-black bg-gray-100 overflow-hidden hover:bg-red-500 hover:text-white";

  return (
    <button className={buttonClass} onClick={onClick}>
      {category && category.name}
    </button>
  );
}
