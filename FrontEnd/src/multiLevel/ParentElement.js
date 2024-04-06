import Permission from "./PermissonDisplay";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import AccordionFN from "./Accordian";

export default function ParentElement() {
    
  const URL = "http://localhost:3000/menueitem";

  const Slidebardata = async () => {
    const reponse = await axios.get(URL);
    return reponse.data;
  };
  

  const query = useQuery({ queryKey: ["title"], queryFn: Slidebardata });


  return (
    <Container className="container-main">
      {query.isFetched && (
        <Row>
          <Col sm={4} className="margintop">
            <div>
              {query.data?.map((item, index) => {
         
                return (
                  <>
                    <AccordionFN item={item} index={index} />
                  </>
                );
              })}
            </div>
          </Col>
          <Col sm={8} className="margintop">
           <Permission />
          </Col>
        </Row>
      )}
    </Container>
  );
}
