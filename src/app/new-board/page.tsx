'use client';

import { createBoard } from "../actions/boardActions";

export default function NewBoardPage(){
  async function handleNewBoardSubmit(formData: FormData){
    const boardName = formData.get('name');
    await createBoard(boardName as string);
  }
  return (
    <div>
      <form action={handleNewBoardSubmit} className="max-w-xs block">
        <h1 className="text-2xl mb-4">Create new board</h1>
        <input type="text" name="name" placeholder="board name" />
        <button type="submit" className="mt-2 w-full">Create Board</button>
      </form>
    </div>
  );
}