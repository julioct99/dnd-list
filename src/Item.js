import { Draggable } from 'react-beautiful-dnd';

const Item = ({ item, index }) => {
  const getDivStyle = ({ isDragging, draggableStyle }) => ({
    userSelect: 'none',
    padding: '1px',
    margin: '0 0 1px 0',
    background: isDragging ? 'lightgreen' : 'grey',
    ...draggableStyle,
  });

  return (
    <Draggable key={item.name} draggableId={item.name} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getDivStyle({
            isDragging: snapshot.isDragging,
            draggableStyle: provided.draggableProps.style,
          })}
        >
          {item.name}
        </div>
      )}
    </Draggable>
  );
};

export default Item;
