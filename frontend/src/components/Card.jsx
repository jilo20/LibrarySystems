function Card({ children }) {
  return (
    <div className="p-6 bg-gray-100 rounded shadow-md flex">
      {children}
    </div>
  );
}

export default Card;