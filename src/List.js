import { Droppable } from 'react-beautiful-dnd';
import Item from './Item';

const List = ({ items, id }) => {
  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: '8px',
    marginBottom: '20px',
    width: '600px',
  });

  return (
    <Droppable droppableId={`droppable-${id}`}>
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
        >
          {items.map((item, index) => (
            <Item key={item.name} item={item} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default List;
