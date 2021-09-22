import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFilteredWorklog} from "../../Utils/selectors";
import {NavLink, useParams} from "react-router-dom";
import TimeInterval from "../DeadLine/TimeInterval";
import {Table, TableBody, TableCell, TableContainer, TableRow} from "@material-ui/core";
import {fetchWorklog} from "../../Redux/Reducers/app-reducer";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";


export const Worklog = React.memo(() => {
    const {id} = useParams()
    const filteredWorkLog = useSelector((state) => getFilteredWorklog(state, +id))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchWorklog())
    }, [dispatch])

    return (
        <div>

            <TableContainer component={Paper} elevation={3}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">From</TableCell>
                            <TableCell align="center">To</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredWorkLog === 0
                            ? <div>
                                <span>Employees list is empty</span>
                            </div>
                            : filteredWorkLog.map((w) =>
                                <TableRow key={w.id}>
                                    <TableCell align="center" scope="row">{w.from}</TableCell>
                                    <TableCell align="center" scope="row"><TimeInterval employeeId={id}
                                                                                        to={w.to}/></TableCell>
                                </TableRow>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>)
})


