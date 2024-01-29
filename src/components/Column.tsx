import { ReactSortable } from "react-sortablejs";
import { CardType } from "./Board";
import { SetStateAction } from "react";

type ColumnProps = {
  id: string;
  name: string;
  cards: CardType[];
  setCards: SetStateAction<any>;
};

export default function Column({ id, name, cards, setCards }: ColumnProps) {
  function setCardsForColumn(sortedCards: CardType[], newColumnId: string) {
    // changing columns
    setCards((prevCards: CardType[]) => {
      const newCards = [...prevCards];
      sortedCards.forEach((sortedCard: CardType, newIndex: number) => {
        const foundCard = newCards.find(
          (newCards) => newCards.id === sortedCard.id
        );
        if (foundCard) {
          foundCard.index = newIndex; //This use to change the order of the cards
          foundCard.columnId = newColumnId; //This use to change the column
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
        setList={(items) => setCardsForColumn(items, id)}
        group="cards"
        ghostClass="opacity-40"
        className="min-h-12"
      >
        {cards.map((card) => (
          <div key={card.id} className="border bg-white my-2 p-4 rounded-md">
            <span>{card.name}</span>
          </div>
        ))}
      </ReactSortable>
    </div>
  );
}
