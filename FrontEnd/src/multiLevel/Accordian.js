import Accordion from "react-bootstrap/Accordion";
import { useDispatch } from "react-redux";
import { Roles } from "../store/slice/Slice";

function AccordionFN({ item, index  }) {
  const dispatch = useDispatch()
  return (
    <>
      <Accordion key={index} className='accordion' >
        <Accordion.Item eventKey={index} className='accordion-item' >

          <Accordion.Header  className='accordion-header' onClick={()=>{dispatch(Roles(item))}}>{item.title}</Accordion.Header>
          <Accordion.Body>
            {item.subSection?.map((subitem, index1) => {
            
              return (
                <div className="subcomponent">
                  <AccordionFN  item={subitem} index={index1}/>
                </div>
              );
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
export default AccordionFN;
