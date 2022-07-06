import { Button, PasswordInput, TextInput } from "@mantine/core";

export default function categories() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextInput
        style={{ width: "20vw", paddingTop: "2vh" }}
        placeholder="Username"
        label="Username"
        required
      />
      <PasswordInput
        style={{ width: "20vw", paddingTop: "2vh" }}
        placeholder="Password"
        label="Password"
        required
      />
      <div style={{ paddingTop: "4vh" }}>
        <Button style={{ width: "15vw" }}>Log In</Button>
      </div>
    </div>
  );
}
