import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Popular from "./routes/popular";
import Categories from "./routes/categories";
import Item from "./routes/item";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  AppShell,
  Header,
  UnstyledButton,
  Image,
  Button,
  Group,
  TextInput,
  MantineProvider,
  Menu,
} from "@mantine/core";
import { FileDollar, Search, Settings, User } from "tabler-icons-react";
import Settingspage from "./routes/settingspage";
import Posteditems from "./routes/posteditems";
import Userpage from "./routes/userpage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider
        theme={{ colorScheme: "dark" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell
          header={
            <Header height={60} p="xs">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Link to="/">
                  <UnstyledButton
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{ width: "10%" }}
                      src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png"
                    />
                  </UnstyledButton>
                </Link>
                <Group
                  style={{
                    position: "absolute",
                    right: "0",
                    paddingRight: "5vw",
                  }}
                  spacing="sm"
                >
                  <Link to="/popular">
                    <Button>Popular Items</Button>
                  </Link>
                  <Link to="/categories">
                    <Button>Categories</Button>
                  </Link>
                  <TextInput placeholder="Search" icon={<Search size={14} />} />
                </Group>
                <Menu
                  style={{
                    position: "absolute",
                    right: "0",
                    paddingRight: "1vw",
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
                    <Menu.Item icon={<Settings size={14} />}>
                      Settings
                    </Menu.Item>
                  </Link>
                  <Link to={`/user/posteditems`}>
                    <Menu.Item icon={<FileDollar size={14} />}>
                      Posted Items
                    </Menu.Item>
                  </Link>
                  <Link to={`/user/1243`}>
                    <Menu.Item icon={<User size={14} />}>
                      Your Public Profile
                    </Menu.Item>
                  </Link>
                </Menu>
              </div>
            </Header>
          }
        >
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="popular" element={<Popular />} />
            <Route path="categories" element={<Categories />} />
            <Route path="item/:itemid" element={<Item />} />
            <Route path="/user">
              <Route path="settings" element={<Settingspage />} />
              <Route path="posteditems" element={<Posteditems />} />
              <Route path=":userid" element={<Userpage />} />
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>O_O Whatre You Doing Looking Here</p>
                </main>
              }
            />
          </Routes>
        </AppShell>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
