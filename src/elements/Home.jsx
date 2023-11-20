

import { Button, Card, CardActions, CardContent, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4002/emp/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);




  return (
    
    <div style={{margin:"7%"}}>

<Grid container spacing={2}>
            {data.map((val,i)=>(
            <Grid item key={i} xs={12} sm={6} md={4}>
       <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">{val.position}
        </Typography>
        <Typography variant="body2" color="text.secondary">{val.location}
        </Typography>
      </CardContent>

    </Card>
    </Grid>
    ))}
    </Grid>

  
</div>
  )
}

export default Home
