import { ReactSortable } from "react-sortablejs";
import { CardType } from "./Board";
import { SetStateAction } from "react";

type ColumnProps = {
  id: string;
  name: string;
  cards: CardType[];
  setCards: SetStateAction<any>;
};

export default function Column({id, name, cards, setCards }: ColumnProps) {
  function setCardsForColumn(sortedCards: CardType[], newColumnId: string){
    console.log({sortedCards, newColumnId});
    const sortedCardsIds = sortedCards.map(c => c.id);
    


    // changing columns
    setCards((prevCards:CardType[]) => {
      const newCards = [...prevCards];
      newCards.forEach(newCard => {
        if(sortedCardsIds.includes(newCard.id)){
          newCard.columnId = newColumnId;
          // console.log(newCard.name + ': ' + newColumnId);
        }
      });
      return newCards;

    });
  }
  return (
    <div className="w-48 bg-white shadow-sm rounded-md p-2">
      <h3>{name}</h3>
      <ReactSortable 
        list={cards} 
        setList={items => setCardsForColumn(items, id)}
        group="cards"
      >
        {cards.map((card) => (
          <div className="border my-2 p-4 rounded-md">
            <span>{card.name}</span>
          </div>
        ))}
      </ReactSortable>
    </div>
  );
}
