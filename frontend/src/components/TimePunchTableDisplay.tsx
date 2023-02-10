import React from 'react'
import { TimePunch } from '@/types/TimePunchTypes'
import TimePunchTableRow from './TimePunchTableRow'
import TimePunchTableHeader from './TimePunchTableHeader'


type TimePunchTableDisplayOwnProps = {
    timePunches: Array<TimePunch>
}

const TimePunchTableDisplay: React.FC<TimePunchTableDisplayOwnProps> = ({ timePunches }) => {



    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <TimePunchTableHeader />
                <tbody>
                    {timePunches && timePunches.map((timePunch, i) => (
                        <TimePunchTableRow key={i} timePunch={timePunch} />
                    ))}
                </tbody>
            

            </table>
        </div>
    )
}

export default TimePunchTableDisplay