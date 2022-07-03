import {
  AppShell,
  Header,
  MantineProvider,
  Text,
  Image,
  Group,
  Button,
  TextInput,
} from "@mantine/core";
import { Link } from "react-router-dom";
import React from "react";
import { Search } from "tabler-icons-react";

export default function item() {
  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <AppShell
        header={
          <Header height={60} p="xs">
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <Image
                style={{ width: "3%" }}
                src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png"
              />
              <Text style={{ paddingLeft: "1vw" }}>Placeholder</Text>
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
            </div>
          </Header>
        }
      >
        <div
          style={{ display: "flex", flexDirection: "row", overflow: "hidden" }}
        >
          <Text>Specific Item</Text>
        </div>
      </AppShell>
    </MantineProvider>
  );
}
