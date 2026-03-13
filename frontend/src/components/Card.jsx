function Card({ children, stylee, animation=true }) {
  return (
  <div className="flex relative">

    <div className={`${animation ? 'hover:scale-102' : ''} p-6  rounded shadow-lg flex overflow-hidden ${stylee}`}>
      {children}
    </div>
  </div>
  );
}

export default Card;