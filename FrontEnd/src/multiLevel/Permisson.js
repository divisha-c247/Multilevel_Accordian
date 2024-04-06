import Checkbox from "@mui/material/Checkbox";
import Switch from '@mui/material/Switch';
function Permission({ Menuitem }) {
  return (
    <tbody>
      <tr>
        <td>{Menuitem.title}</td>

        <td>
        <Switch checked={Menuitem.permissionKey}/>
        </td>

        <td>
          <Checkbox checked={Menuitem.edit} />
        </td>
        <td>
          <Checkbox checked={Menuitem.remove} />
        </td>
      </tr>
    </tbody>
  );
}
export default Permission;
