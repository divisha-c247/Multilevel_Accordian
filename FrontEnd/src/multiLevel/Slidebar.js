import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch } from "react-redux";
import { Roles } from "../store/slice/Slice";

function Slidebar() {
  const URL = "http://localhost:3000/menueitem";
  const dispatch = useDispatch();
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
          <Accordion key={index}>
            <Accordion.Item
              eventKey={index}
              
            >
              <Accordion.Header onClick={() => {
                dispatch(Roles(item));
              }}>{item.title}</Accordion.Header>
              <Accordion.Body>
                {item.subSection?.map((subitem, index1) => {
                  return (
                    <Accordion key={index1}>
                      <Accordion.Item
                        eventKey={index1}
                        onClick={() => {
                          dispatch(Roles(subitem));
                        }}
                      >
                        <Accordion.Header>{subitem.title}</Accordion.Header>
                        <Accordion.Body>
                          {subitem.subSection?.map((mainitem, index2) => {
                            return (
                              <Accordion key={index2}>
                                <Accordion.Item
                                  eventKey={index2}
                                  onClick={dispatch(Roles(mainitem))}
                                >
                                  <Accordion.Header>
                                    {mainitem.title}
                                  </Accordion.Header>
                                </Accordion.Item>
                              </Accordion>
                            );
                          })}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </div>
  );
}
export default Slidebar;
