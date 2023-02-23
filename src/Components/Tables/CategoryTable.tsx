import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
export default function CategoryTable(props: any) {
  const categories = props.categories;

  return (
    <div className="table">
      <div className="tableHeader">
        <div className="tableItem">Title</div>
        <div className="tableItem">Edit</div>
        <div className="tableItem">Delete</div>
      </div>
      {categories.map((item: any, index: number) => (
        <div key={index} className="tableRow">
          <div className="tableItem">{item.name}</div>
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
