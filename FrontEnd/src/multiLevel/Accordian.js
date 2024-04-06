import Accordion from "react-bootstrap/Accordion";
import Permission from "./Permisson";
import { Container,Table } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AccordionFN({item,index}){

    return(<>
    <Row>
     <Col sm={4}>  
     <Accordion key={index}>
        <Accordion.Item eventKey={index}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>
           
          {item.subSection?.map((subitem, index1) => {
                  return (<>
                   <AccordionFN item={subitem} index={index1}/>
                   <Col sm={8}>
        <Container>
      <Table>
        <thead>
          <tr>
            <th>Permission Name</th>
            <th></th>
            <th>ADD/EDIT</th>
            <th>Delete</th>
          </tr>
        </thead>
        <Permission Menuitem={subitem}/>
      </Table>
      
    </Container>
    </Col>
                  
                   </>
                  );
                })}
                 
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </Col> 
    </Row>
    
      </>
    )
}
export default AccordionFN