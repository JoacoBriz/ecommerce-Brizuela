import './ItemListContainer.css';

export const ItemListContainer = () => {
  return(
    <div className="welcome">
      <h1 className="principalTitle">Welcome</h1>
      <button className="buttonClothing" onClick={goClothing}>Clothing</button>
    </div>
  )

  function goClothing () {
    alert('Welcome!');
  }
}