import moment from "moment";
import {
  AiTwotoneDelete,
  AiTwotoneEdit,
  AiFillCheckCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";

function NotificationStatus(props: any) {
    const status = props.status;
    if (status) {
      return <AiFillCheckCircle />;
    } else {
      return <AiOutlineCloseCircle />;
    }
  }

export default function NotificationTable(props: any) {
  const notifications = props.notifications;

  return (
    <div className="table">
      <div className="tableHeader">
        <div className="tableItem">Title</div>
        <div className="tableItem">Created</div>
        <div className="tableItem">Status</div>
        <div className="tableItem">Edit</div>
        <div className="tableItem">Delete</div>
        <div className="tableItem">Send</div>
      </div>
      {notifications.map((item: any, index: number) => (
        <div key={index} className="tableRow">
          <div className="tableItem">{item.title}</div>

          <div className="tableItem">
            {moment(item.createdAt).format("DD/MM/YYYY")}
          </div>
          <div className="tableItem">
            <NotificationStatus status={item.status}/>
          </div>
          <div className="tableItem">
            <AiTwotoneEdit className="tableEdit" />
          </div>
          <div className="tableItem">
            <AiTwotoneDelete className="tableDelete" />
          </div>
          <div className="tableItem">
            <button className="notificationTableSend">Send</button>
          </div>
        </div>
      ))}
    </div>
  );
}
