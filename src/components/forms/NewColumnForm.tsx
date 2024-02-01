'use client';

import { useMutation } from "@/app/liveblocks.config";
import { LiveObject } from "@liveblocks/client";
import { FormEvent } from "react";
import uniqid from "uniqid";

export default function NewColumnForm() {

  const addColumn = useMutation( ({storage}, ColumnName) => {
    storage.get('columns').push(new LiveObject({
      name: ColumnName,
      id: uniqid.time(),
      index: 0,
    }));
  }, [] );

  function handleNewColumn(ev: FormEvent){
    ev.preventDefault();
    const input = (ev.target as HTMLFormElement).querySelector('input');
    if(input){
      const columnName = input?.value;
      addColumn(columnName);
      input.value = '';
    }

  }
  return (   
    <form onSubmit={handleNewColumn} className="max-w-xl">
      <label className="block">
        <span className="text-gray-600 block">Column Name:</span>
        <input type="text" placeholder="new column name" />
      </label>
      <button type="submit" className="mt-2 block w-full">
        Create Column
      </button>
    </form>
  );
}
