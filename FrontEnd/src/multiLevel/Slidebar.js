import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import AccordionFN from "./Accordian";
import Permission from "./Permisson";
import { Container,Table } from "react-bootstrap";
import Col from "react-bootstrap/Col";

function Slidebar() {
  const URL = "http://localhost:3000/menueitem";

  const Slidebardata = async () => {
    const reponse = await axios.get(URL);
    return reponse.data;
  };
  const query = useQuery({ queryKey: ["title"], queryFn: Slidebardata });

  console.log(query);
  return (
    <div>
      {query.data?.map((item, index) => {
        return (
          <>
     <AccordionFN item={item} index={index}/>
    
     </>
        );
      })}
    </div>
  );
}
export default Slidebar;
