import React, { useState } from "react";
import ListItem from "./components/ListItems";
import { Grid, Container } from "@mui/material";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Excavators",
      rented: 10,
      available: 5,
    },
    {
      id: 2,
      name: "Bulldozers",
      rented: 10,
      available: 5,
    },
    {
      id: 3,
      name: "Dumpers",
      rented: 10,
      available: 5,
    },
    {
      id: 4,
      name: "Cranes",
      rented: 10,
      available: 5,
    },
    {
      id: 5,
      name: "Forklifts",
      rented: 10,
      available: 5,
    },
    {
      id: 6,
      name: "Concrete Mixers",
      rented: 10,
      available: 5,
    },
  ]);

  const increaseRented = (id) => {
    setItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id
          ? {
              id: item.id,
              name: item.name,
              available: item.available - 1,
              rented: item.rented + 1,
            }
          : item
      );
    });
  };

  const decreaseRented = (id) => {
    setItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id
          ? {
              id: item.id,
              name: item.name,
              available: item.available + 1,
              rented: item.rented - 1,
            }
          : item
      );
    });
  };

  return (
    <div style={{ backgroundColor: "bisque" }}>
      <Container>
        <Grid container spacing={5}>
          {items.map((item) => (
            <Grid item xs={12} sm={8} md={6} lg={4} key={item.id}>
              <ListItem
                item={item}
                increaseRented={increaseRented}
                decreaseRented={decreaseRented}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
