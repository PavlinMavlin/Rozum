import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {Table, TableBody, TableCell, TableContainer, TableRow} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import {fetchEmployees} from "../../Redux/Reducers/app-reducer";
import {BirthDate} from "../BirthDate/BirthDate";


export const Employees = React.memo((props) => {

    const employees = useSelector((state) => state.appReducer.employees)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchEmployees())
    }, [dispatch])

    return (
        <div>
            <TableContainer component={Paper} elevation={3}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Date of birthday</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.length === 0
                            ? <div>
                                <span>Employees list is empty</span>
                            </div>
                            : employees.map(e =>
                                <TableRow key={e.id}>
                                    <TableCell align="center" scope="row">{e.id}</TableCell>
                                    <TableCell align="center">
                                        <NavLink to={`/worklog/${e.id}`}
                                                 style={{textDecoration: 'none', color: 'unset'}}>
                                            {e.lastName + " " + e.firstName + " " + e.middleName}
                                        </NavLink>
                                    </TableCell>
                                    <TableCell align="center"><BirthDate birthDate={e.birthDate}/></TableCell>
                                </TableRow>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
})
