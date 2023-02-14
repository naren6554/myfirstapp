import { TableBody, TableCell, TableHead,Table, TableRow } from "@mui/material";
import { getUser } from "../service/api";
import { useEffect } from "react";

const AllUsers = () => {
    return (
       <Table>
<TableHead>
    <TableRow>
    <TableCell>Id</TableCell>
<TableCell>Name</TableCell>
<TableCell>Username</TableCell>
<TableCell>Email</TableCell>
<TableCell>Age</TableCell>
<TableCell>Phone</TableCell>

    </TableRow>

</TableHead>
<TableBody>

</TableBody>


       </Table>
    )
}

export default AllUsers;