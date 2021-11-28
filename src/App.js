import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { first_list } from './data';
import List from './List';

const reorder = ({ list, sourceIndex, destinationIndex }) => {
  const result = [...list];
  const [removed] = result.splice(sourceIndex, 1);
  result.splice(destinationIndex, 0, removed);
  return result;
};

function App() {
  const [items, setItems] = useState(first_list);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newItems = reorder({
      list: items,
      sourceIndex: result.source.index,
      destinationIndex: result.destination.index,
    });

    setItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <List id={1} items={items} />
    </DragDropContext>
  );
}

export default App;
