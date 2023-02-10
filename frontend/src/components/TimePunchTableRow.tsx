import React from 'react'
import { TimePunch } from '@/types/TimePunchTypes'

type TimePunchTableRowOwnProps = {
    timePunch: TimePunch
}

const TimePunchTableRow: React.FC<TimePunchTableRowOwnProps> = ({ timePunch }) => {
    return (
        <tr>
            <td>{timePunch.employee}</td>
            <td>{timePunch.date}</td>
            <td>{timePunch.location}</td>
            <td>{timePunch.start_time}</td>
            <td>{timePunch.end_time}</td>
            <td>${timePunch.total_earned}</td>
            <td>
                <input
                    // onClick={() => handleTogglePaid(timePunch._id)}
                    type="checkbox"
                    defaultChecked={timePunch.paid ? true : false}
                    className="checkbox checkbox-success" />
            </td>
            <td>
                {timePunch.hours_worked}
            </td>
            <td
                // onClick={() => handleDelete(timePunch._id)}
            >DEL</td>
        </tr>
    )
}

export default TimePunchTableRow