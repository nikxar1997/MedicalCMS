import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
export default function ConditionTable(props: any) {
  const conditions = props.conditions;
  return (
    <div className="table">
      <div className="tableHeader">
        <div className="tableItem">Title</div>
        <div className="tableItem">Category</div>
        <div className="tableItem">Edit</div>
        <div className="tableItem">Delete</div>
      </div>
      {conditions.map((item: any, index: number) => (
        <div key={index} className="tableRow">
          <div className="tableItem">{item.title}</div>
          <div className="tableItem">{item.categoryId}</div>
          <div className="tableItem">
            <AiTwotoneEdit className="tableEdit" />
          </div>
          <div className="tableItem">
            <AiTwotoneDelete className="tableDelete" />
          </div>
        </div>
      ))}
    </div>
  );
}
