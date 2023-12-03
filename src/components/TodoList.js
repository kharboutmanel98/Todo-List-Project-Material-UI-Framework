import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";
import Button from '@mui/material/Button';


import TextField from "@mui/material/TextField";

// Icons
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// Components
import Todo from "./Todo";

// Others 
import { v4 as uuidv4 } from 'uuid';



const todos = [
  {
    id:uuidv4(),
    title:"قراءة كتاب",
    details:"book",
    isCompleted:false,
  },
  {
    id:uuidv4(),
    title:"قراءة كتاب",
    details:"book",
    isCompleted:false,
  },
  {
    id:uuidv4(),
    title:"قراءة كتاب",
    details:"book",
    isCompleted:false,
  },


]

export default function TodoList() {
  const todosJsx = todos.map((t)=>{
    return <Todo   key={t.id}title={t.title} details={t.details} />
  })
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h2" style={{ fontWeight: "bold" }}>
            مهامي
          </Typography>
          <Divider />

          {/* Filter Button */}

          <ToggleButtonGroup
            style={{ direction: "ltr", marginTop: "30px" }}
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="right" aria-label="right aligned">
              غير المنجز
            </ToggleButton>

            <ToggleButton value="center" aria-label="centered">
              المنجز
            </ToggleButton>
            <ToggleButton value="left" aria-label="left aligned">
              الكل
            </ToggleButton>
          </ToggleButtonGroup>
          {/* All Todo */}
          {todosJsx}

          <Grid container style={{marginTop:"20px" }} spacing={2}>
            <Grid
              xs={8}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <TextField
                id="outlined-basic"
                label=" عنوان المهمة"
                variant="outlined"
                style={{width:"100%"}}
              />
            </Grid>
            <Grid
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
                <Button variant="contained" style={{width:"100%",height:"100%"}}>اضافة</Button>

            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}