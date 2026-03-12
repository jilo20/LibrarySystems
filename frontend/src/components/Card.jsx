function Card({ children, stylee }) {
  return (
    <div className="flex">
      <div className={`p-6 bg-gray-100 rounded shadow-md flex ${stylee}`}>
        {children}
      </div>
    </div>
  );
}

export default Card;