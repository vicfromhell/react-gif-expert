export function MyButton() {
    function handleClick() {
      alert('¡Me hiciste clic!');
    }
  
    return (
      <button onClick={handleClick}>
        <h3>Hazme clic</h3> 
      </button>
    );
  }