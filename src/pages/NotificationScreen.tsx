import NotificationTable from "@/Components/Tables/NotificationTable";

export default function NotificationScreen() {
  const notifications = [
    {
      notificationId: 0,
      title: "Notification",
      message: "Notification Desc",
      status: true,
      createdAt: "2022-09-27T10:30:00",
    },
    {
      notificationId: 1,
      title: "Notification 2",
      message: "Notification Desc 2",
      status: false,
      createdAt: "2022-09-27T10:30:00",
    },
  ];
  return (
    <div className="notificationContainer">
      <h1 className="titleText">Notifications</h1>
      <button className="btnAdd">Add</button>
      <NotificationTable notifications={notifications} />
    </div>
  );
}
