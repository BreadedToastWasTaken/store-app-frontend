import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Popular from "./routes/popular";
import Categories from "./routes/categories";
import Item from "./routes/item";
import Login from "./routes/login";
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
import { Search } from "tabler-icons-react";
import Settingspage from "./routes/settingspage";
import Posteditems from "./routes/posteditems";
import Userpage from "./routes/userpage";
import User from "./Components/User";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const isLoggedIn = false;

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
                    paddingRight: "1vw",
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
                  <User />
                </Group>
              </div>
            </Header>
          }
        >
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/item/:itemid" element={<Item />} />
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
