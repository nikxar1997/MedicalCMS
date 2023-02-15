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
        <div className="tableRow">
            <div className="tableItem">{item.name}</div>
            <div className="tableItem">Edit</div>
            <div className="tableItem">Delete</div>
        </div>
      ))}
    </div>
  );
}
