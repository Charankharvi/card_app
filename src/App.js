import React from 'react';
import './App.css';
import {Card, ListGroupItem} from "react-bootstrap";
import {ListGroup} from "react-bootstrap";

function App() {
const cardInfo=[
  {
    image:"https://www.w3schools.com/html/pic_trulli.jpg",title:"James",text:"Lorem Ipsum is simply dummy text of the printing and "},
  
  {
    image:"https://www.w3schools.com/html/pic_trulli.jpg",title:"Cameron",text:"Lorem Ipsum is simply dummy text of the printing and "
  },
    {
      image:"https://www.w3schools.com/html/pic_trulli.jpg",title:"Bulter",text:"Lorem Ipsum is simply dummy text of the printing and "
    },

    
    {
      image:"https://www.w3schools.com/html/pic_trulli.jpg",title:"Sultan",text:"Lorem Ipsum is simply dummy text of the printing and "},
    


      {
        image:"https://www.w3schools.com/html/pic_trulli.jpg",title:"Bulter",text:"Lorem Ipsum is simply dummy text of the printing and "
      },

      {
        image:"https://www.w3schools.com/html/pic_trulli.jpg",title:"Bulter",text:"Lorem Ipsum is simply dummy text of the printing and "
      },
  

      {
        image:"https://www.w3schools.com/html/pic_trulli.jpg",title:"Bulter",text:"Lorem Ipsum is simply dummy text of the printing and "
      },
      {
        image:"https://www.w3schools.com/html/pic_trulli.jpg",title:"Bulter",text:"Lorem Ipsum is simply dummy text of the printing and "
      },
    
      {
        image:"https://www.w3schools.com/html/pic_trulli.jpg",title:"Bulter",text:"Lorem Ipsum is simply dummy text of the printing and "
      },

      {
        image:"https://www.w3schools.com/html/pic_trulli.jpg",title:"Bulter",text:"Lorem Ipsum is simply dummy text of the printing and "
      },
  

      {
        image:"https://www.w3schools.com/html/pic_trulli.jpg",title:"Bulter",text:"Lorem Ipsum is simply dummy text of the printing and "
      },
      {
        image:"https://www.w3schools.com/html/pic_trulli.jpg",title:"Bulter",text:"Lorem Ipsum is simply dummy text of the printing and "
      },
    

];
    

const renderCard=(card,index)=>{

  return(

   <div>

   



<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={card.image} />
  <Card.Body>
    <Card.Title>{card.title}</Card.Title>
    <Card.Text>
    {card.text}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  
    <ListGroupItem  style={{fontSize:"10px"}} >
    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked></input>
      Vestibulum at eros</ListGroupItem>
  </ListGroup>
 
</Card>
  </div>
          
  )

  
}

    return (
      <div className="App">
       {cardInfo.map(renderCard)}
        </div>
       
    );
}
export default App;