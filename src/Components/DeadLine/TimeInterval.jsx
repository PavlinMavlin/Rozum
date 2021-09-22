import React, {useEffect, useState} from "react";

import style from "./TimeInterval.module.css"
import {useSelector} from "react-redux";


const TimeInterval = (props) => {

    const worklog = useSelector((state) => state.appReducer.worklog)
    const otherWorklog = worklog.filter(w => w.employee_id !== +props.employeeId)

    let to = Date.parse(props.to)

    const otherTo = otherWorklog.map(o => Date.parse(o.to))
    const otherFrom = otherWorklog.map(o => Date.parse(o.from))

    let [value, setValue] = useState(false)

    const border = 2

    useEffect(() => {
        let count = 0
        for (let i = 0; i < otherTo.length; i++) {
            if (otherTo[i] > to && to > otherFrom[i]) {
                count = count + 1;
            }
            if (count < border) {
                setValue(true)
            } else if (count > border) {
                setValue(false)
            }
        }
    }, [to, otherTo, otherFrom])

    return (
        <span className={value ? style.notTrue : ""}>{" To " + props.to}</span>
    )
}


export default TimeInterval