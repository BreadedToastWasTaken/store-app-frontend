import { Card, Image, Text } from "@mantine/core";
import "./productCard.css";

export default function productCard() {
  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          width: "16vw",
          height: "17vw",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          cursor: "pointer",
        }}
      >
        <Image
          radius={5}
          style={{ width: "100%" }}
          src="https://ae01.alicdn.com/kf/Hb8d7f7291c61433883cfdeec99c247d4n/15-17-19-21-5-23-6-Inch-lcd-Monitor-for-pc.jpg"
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            paddingBottom: "0.4vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: "1vw" }} lineClamp={1}>
            Ps4 Pro Exxtra Chunky and big brain a a asdasdasdasd asd asd asd
            asdada sdas dasd asd as
          </Text>
          <Text style={{ fontSize: "1.2vw" }} lineClamp={1}>
            $80000.00
          </Text>
        </div>
      </Card>
    </div>
  );
}
