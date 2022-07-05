import { Card, Image, Text } from "@mantine/core";
import { Link, Outlet } from "react-router-dom";
import "./productCard.css";
import axios from "axios";
import React from "react";

export default class ProductCard extends React.Component<{ id: number }> {
  state = {
    item: {
      name: "",
      price: 0,
      image: "",
    },
  };
  componentDidMount() {
    axios.get(`http://localhost:3001/items/${this.props.id}`).then((res) => {
      const item = res.data;
      this.setState({ item });
    });
  }
  render(): React.ReactNode {
    return (
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to={`item/${this.props.id}`}>
          <Card
            style={{
              width: "16vw",
              height: "17vw",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              // cursor: "pointer",
            }}
          >
            <Image
              radius={5}
              style={{ width: "100%" }}
              src={this.state.item.image}
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
                {this.state.item.name}
              </Text>
              <Text style={{ fontSize: "1.2vw" }} lineClamp={1}>
                ${this.state.item.price}
              </Text>
            </div>
          </Card>
        </Link>
        <Outlet />
      </div>
    );
  }
}
