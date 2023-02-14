import { useRouter } from "next/router";
import routes from "../../Routes/routes";
//h
export default function SideBar() {
  const router = useRouter();

  function navigateTo(path: string) {
    router.push(path);
  }

  return (
    <div className="sideBar">
      {routes.map((item, index) => (
        <div key={index}
          onClick={() => {
            navigateTo(item.path);
          }}
          className="sideBarItem"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
