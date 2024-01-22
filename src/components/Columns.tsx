type ColumnProps = {
  name: String;
};

const cards = [
  {id: 'aaa', name: 'task 1', order:0},
  {id: 'x', name: 'task 2', order:1},
  {id: 'a', name: 'task 3', order:2},

];

export default function Columns({name}: ColumnProps){
    return(
      <div className="w-48 bg-white shadow-sm rounded-md p-2">
        <h3>{name}</h3>
        {cards.map(card => (
          <div className="border my-2 p-4 rounded-md">
            <span>{card.name}</span>
          </div>
        ))}
      </div>  
    );
}
