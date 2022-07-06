import { Menu, UnstyledButton, Image, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { FileDollar, Settings, User } from "tabler-icons-react";

export default function categories() {
  let isLoggedIn = false;
  if (isLoggedIn) {
    return (
      <Menu
        style={{
          paddingTop: "1vh",
        }}
        control={
          <UnstyledButton>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
              style={{ width: "2vw" }}
            />
          </UnstyledButton>
        }
      >
        <Link to={`/user/settings`}>
          <Menu.Item icon={<Settings size={14} />}>Settings</Menu.Item>
        </Link>
        <Link to={`/user/posteditems`}>
          <Menu.Item icon={<FileDollar size={14} />}>Posted Items</Menu.Item>
        </Link>
        <Link to={`/user/1243`}>
          <Menu.Item icon={<User size={14} />}>Your Public Profile</Menu.Item>
        </Link>
      </Menu>
    );
  } else {
    return (
      <Link to={`/login`}>
        <div style={{}}>
          <Button>Login</Button>
        </div>
      </Link>
    );
  }
}
