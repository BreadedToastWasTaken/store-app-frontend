import {
  Text,
  Image,
  Group,
  UnstyledButton,
  Button,
  Center,
} from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Item() {
  let params = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [authorid, setAuthorID] = useState(0);
  useEffect(() => {
    axios.get(`http://localhost:3001/items/${params.itemid}`).then((res) => {
      console.log(res.data);
      setName(res.data.name);
      setPrice(res.data.price);
      setImage(res.data.image);
      setAuthor(res.data.author);
      setAuthorID(res.data.authorid);
    });
  });
  return (
    <div style={{ display: "flex", flexDirection: "row", overflow: "hidden" }}>
      <Image
        radius={5}
        style={{ paddingTop: "5vh", width: "30vw" }}
        src={image}
      />
      <div style={{ paddingLeft: "5vw", paddingTop: "4vh", width: "30vw" }}>
        <Text style={{ fontSize: "2vw" }}>{name}</Text>
        <Link to={`/user/${authorid}`}>
          <UnstyledButton>View All Of {author}'s Listings</UnstyledButton>
        </Link>
        <Text style={{ fontSize: "1vw" }}>
          Big Chonker Of A ps4, it doesnt work at all :/
        </Text>
        <div>
          <Text weight="bold" style={{ fontSize: "3vw" }}>
            ${price}
          </Text>

          <Button size="lg">Add To Cart</Button>
        </div>
      </div>
    </div>
  );
}
