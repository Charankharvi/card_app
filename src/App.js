
import React from "react"; 
import "./App.css"; 
import { Button, Card, FormControl, InputGroup,  ListGroupItem, Modal, } from "react-bootstrap"; 
import { ListGroup } from "react-bootstrap"; 


 const DummyData = [ 
  { 
    id:"1",
    image: "https://www.w3schools.com/html/pic_trulli.jpg", 
    title: "James", 
    text: "Lorem Ipsum is simply dummy text of the printing and ", 
  }, 
 
  { 
    id:"2",
    image: "https://www.w3schools.com/html/pic_trulli.jpg", 
    title: "Cameron", 
    text: "Lorem Ipsum is simply dummy text of the printing and ", 
  }, 
  { 
    id:"3",
    image: "https://www.w3schools.com/html/pic_trulli.jpg", 
    title: "Bulter", 
    text: "Lorem Ipsum is simply dummy text of the printing and ", 
  }, 
 
  { id:"4",
    image: "https://www.w3schools.com/html/pic_trulli.jpg", 
    title: "Sultan", 
    text: "Lorem Ipsum is simply dummy text of the printing and ", 
  }, 
 
  { 
    id:"5",
    image: "https://www.w3schools.com/html/pic_trulli.jpg", 
    title: "charan", 
    text: "Lorem Ipsum is simply dummy text of the printing and ", 
  }, 
 
  { id:"6",
    image: "https://www.w3schools.com/html/pic_trulli.jpg", 
    title: "Bulter", 
    text: "Lorem Ipsum is simply dummy text of the printing and ", 
  }, 
 
  { 
    id:"7",
    image: "https://www.w3schools.com/html/pic_trulli.jpg", 
    title: "Bulter", 
    text: "Lorem Ipsum is simply dummy text of the printing and ", 
  }, 
  { 
    id:"8",
    image: "https://www.w3schools.com/html/pic_trulli.jpg", 
    title: "Bulter", 
    text: "Lorem Ipsum is simply dummy text of the printing and ", 
  }, 
 
  { 
    id:"9",
    image: "https://www.w3schools.com/html/pic_trulli.jpg", 
    title: "Bulter", 
    text: "Lorem Ipsum is simply dummy text of the printing and ", 
  }, 
 
  { 
    id:"10",
    image: "https://www.w3schools.com/html/pic_trulli.jpg", 
    title: "Bulter", 
    text: "Lorem Ipsum is simply dummy text of the printing and ", 
  }, 
 
  { 

    id:"11",
    image: "https://www.w3schools.com/html/pic_trulli.jpg", 
    title: "Bulter", 
    text: "Lorem Ipsum is simply dummy text of the printing and ", 
  }, 
  { 
    id:"12",
    image: "https://www.w3schools.com/html/pic_trulli.jpg", 
    title: "Bulter", 
    text: "Lorem Ipsum is simply dummy text of the printing and ", 
  }, 
]; 
 
function App() { 
  const [modalShow, setModalShow] = React.useState(false); 

  const [onChangeInputData,setonChangeInputData]=useState("")

  onChangeInputDataHandler=(event)=>{
    setonChangeInputData(event.target.value)
  }

  
  const renderCard = (card, index) => ( 
    <div> 
     
      <Card style={{ width: "18rem" }}> 
     
         <Card.Img variant='top' src={card.image}  /> 
        <Card.Body> 
          <Card.Title>{card.title}</Card.Title> 
          <Card.Text>{card.text}</Card.Text> 
        </Card.Body> 
        <ListGroup className='list-group-flush'> 
          <ListGroupItem style={{ fontSize: "10px" }}> 
            <input class='form-check-input'  type='checkbox'  value=''  id='flexCheckChecked' checked  ></input> 
            Vestibulum at eros 
          </ListGroupItem> 
        </ListGroup> 
        
        
        {/* <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <src={card.image} class="img-fluid rounded-start" >
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{card.title}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */}


      </Card> 
    </div> 
  ); 

 
    const handleAddMember = () => { 
      setModalShow(true); 
    }; 
   
    return ( 
      <div className='App'> 
        {DummyData.map(renderCard)} 
        <Modal 
          show={modalShow} 
          size='lg' 
          aria-labelledby='contained-modal-title-vcenter' 
          centered 
        > 
          <Modal.Header> 
            <Modal.Title 
              id='contained-modal-title-vcenter' 
              style={{ width: "100%" }} 
            > 
              <InputGroup className='mb-3'> 
                <FormControl 
                  placeholder="Recipient's username" 
                  aria-label="Recipient's username" 
                  aria-describedby='basic-addon2' 
                  onChange={onChangeInputData}
                /> 
                <InputGroup.Text id='basic-addon2'> 
                  <img 
                    style={{ width: "25px", height: "25px" }} 
                    src='https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png' 
                    alt='search_icons' 
                  /> 
                </InputGroup.Text> 
              </InputGroup> 
            </Modal.Title> 
          </Modal.Header> 
          <Modal.Body 
            style={{ 
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
            }} 
          > 
            {DummyData.map(renderCard)} 
          </Modal.Body> 
          <Modal.Footer className='d-flex align-items-center justify-content-center'> 
            <Button onClick={() => setModalShow(false)}>Add</Button> 
            <Button onClick={() => setModalShow(false)} variant='outline-primary'> 
              Cancel 
            </Button> 
          </Modal.Footer> 
        </Modal> 
        <Button onClick={handleAddMember}>+ Add Member</Button> 
      </div> 
    ); 
  } 
  export default App;
  