"use client";
import { useState } from "react";
import Column from "./Column";
import NewColumnForm from "./forms/NewColumnForm";
import { RoomProvider } from "@/app/liveblocks.config";
import { LiveList } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";

const defaultColumns = [
  { id: "col1", name: "To Do", index: 0 },
  { id: "col2", name: "In Progress", index: 1 },
  { id: "col3", name: "Done", index: 2 },
];

const defaultCards = [
  { id: "id1", name: "task 1", index: 0, columnId: "col1" },
  { id: "id2", name: "task 5", index: 1, columnId: "col1" },
  { id: "id3", name: "task 2", index: 1, columnId: "col2" },
  { id: "id4", name: "task 3", index: 2, columnId: "col3" },
];

export type CardType = {
  name: string;
  id: string | number;
  index: number;
  columnId: string;
};

export default function Board({ id }: { id: string }) {
  const [cards, setCards] = useState(defaultCards);
  const [columns, setColumns] = useState(defaultColumns);
  return (
    <RoomProvider
      id={id}
      initialPresence={{}}
      initialStorage={{
        columns: new LiveList(),
      }}
    >
      <ClientSideSuspense fallback={"Loading..."}>
        {() => (
          <>
            <div className="flex gap-4">
              {columns.map((column) => (
                <Column
                  key={column.id}
                  {...column}
                  setCards={setCards}
                  cards={cards
                    .sort((a, b) => a.index - b.index)
                    .filter((c) => c.columnId === column.id)}
                />
              ))}
              <NewColumnForm />
            </div>
            ;
          </>
        )}
      </ClientSideSuspense>
    </RoomProvider>
  );
}
