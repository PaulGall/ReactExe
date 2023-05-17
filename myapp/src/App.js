import TodoList from "./TodoList";

function App() {
  const handleRender = (items, removeItem) => (
    <ul>
      {items.map((item, id) => (
        <>
          <li key={id} index={id}>
            {item}
          </li>
          <button
            onClick={() => {
              removeItem(id);
            }}
          >
            Rimuovi item
          </button>
        </>
      ))}
    </ul>
  );

  return <TodoList name={[]} render={handleRender} />;
}

export default App;
