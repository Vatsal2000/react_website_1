import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  IconButton,
  CardActions,
  CardMedia,
  CardContent,
  Grid,
  Container,
} from "@mui/material";

const ListItems = ({ item, increaseRented, decreaseRented }) => {
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          alt="Image"
          height="220"
          image="https://file2.okorder.com/prodalbum/2014/10/10/c7e4486e8f257e230f1093884469eaf9.jpg"
          title="Title"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <CardActions>
            <IconButton
              aria-label="increase"
              onClick={() => increaseRented(item.id)}
            >
              <AddIcon />
            </IconButton>
            <Typography variant="body2" color="textSecondary" component="p">
              Rented {item.rented}
            </Typography>
            <IconButton
              aria-label="reduce"
              onClick={() => decreaseRented(item.id)}
            >
              <RemoveIcon />
            </IconButton>
          </CardActions>
          <Typography variant="body2" color="textSecondary" component="p">
            Available: {item.available}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ListItems;
