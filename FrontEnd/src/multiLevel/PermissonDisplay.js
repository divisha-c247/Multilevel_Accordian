import { Container, Table } from "react-bootstrap"
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from "react-redux";

function Permission(){
  const Selector = useSelector( state => state.Role)
 console.log(Selector)
return(
 <Container className="accordion">
{Selector!==''&& <header>
{Selector.title}
<Switch  className='switch' checked={Selector.permissionKey}/>
</header>}

    <Table>
        <thead>
        <tr>
            <th>
                Permission Name
            </th>
            <th>

            </th>
            <th>
                ADD/EDIT
            </th>
            <th>
                Delete
            </th>
        </tr>
        </thead>
        {Selector.subSection?.map(item=>{
          return    <tbody style={{alignItems:'center'}}>
              <tr>
                <td>{item.title}</td>
        
                <td className="centre">
                <Switch checked={item.permissionKey}/>
                </td>
        
                <td className="centre">
                  <Checkbox checked={item.edit} />
                </td>
                <td className="centre">
                  <Checkbox checked={item.remove} />
                </td>
              </tr>
            </tbody>
        })}
    </Table>
 </Container>
)
}
export default Permission