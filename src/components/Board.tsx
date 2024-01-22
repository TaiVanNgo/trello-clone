import Columns from "./Columns";
import NewColumnForm from "./forms/NewColumnForm";

const columns = [
  { id: "asdf", name: "To Do", index: 0 },
  { id: "asdf", name: "In Progress", index: 1 },
  { id: "aaa", name: "Done", index: 2 },
];

export default function Board() {
  return (
    <div className="flex gap-4">
      {columns.map(column => (
        <Columns {...column} />
      ))}
      <NewColumnForm />
    </div>
  );
}
