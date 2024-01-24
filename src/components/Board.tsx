"use client";
import { useState } from "react";
import Column from "./Column";
import NewColumnForm from "./forms/NewColumnForm";

const defaultColumns = [
  { id: "col1", name: "To Do", index: 0 },
  { id: "col2", name: "In Progress", index: 1 },
  { id: "col3", name: "Done", index: 2 },
];

const defaultCards = [
  { id: "aaa", name: "task 1", order: 0, columnId: "col1" },
  { id: "aaa", name: "task 5", order: 0, columnId: "col1" },
  { id: "x", name: "task 2", order: 1, columnId: "col2" },
  { id: "a", name: "task 3", order: 2, columnId: "col3" },
];

export type CardType = {
  name: string;
  id: string | number;
  order: number;
  columnId: string;
};

export default function Board() {
  const [cards, setCards] = useState(defaultCards);
  const [columns, setColumns] = useState(defaultColumns);
  return (
    <div className="flex gap-4">
      {columns.map((column) => (
        <Column
          {...column}
          setCards={setCards}
          cards={cards.filter((c) => c.columnId === column.id)}
        />
      ))}
      <NewColumnForm />
    </div>
  );
}
