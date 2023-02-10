import React from 'react'
import { useState } from 'react'
import { TimePunch } from '@/types/TimePunchTypes'
import { Employee } from '@/types/EmployeeTypes'

type TimePunchFormProps = {
    employeeList: Array<Employee>
    createTimePunch: any
}

const TimePunchForm: React.FC<TimePunchFormProps> = ({ createTimePunch, employeeList }) => {
    const [employee, setEmployee] = useState(1)
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('Office')
    const [start_time, setStartTime] = useState('')
    const [end_time, setEndTime] = useState('')

    return (
        <form
            onSubmit={() => createTimePunch({
                employee,
                date,
                location,
                start_time,
                end_time,
            })}
            className='flex flex-col gap-4 border-4 border-secondary shadow-xl rounded-xl p-10'>
            <div className='flex flex-col w-fit'>
                <label>Employee</label>
                <select
                    required
                    className="select select-bordered w-full max-w-xs"
                    onChange={(e) => {
                        switch (e.target.value) {
                            case 'Christine':
                                setEmployee(1)
                            case 'Karen':
                                setEmployee(2)
                            default:
                                return 0
                        }
                    }}
                    value={employee}
                >
                    <option disabled selected>Employee Name</option>
                    {employeeList.map((employee: Employee, i) => (
                        <option
                            key={i}
                        >
                            {employee.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className='flex flex-col w-fit'>
                <label>Location</label>
                <select
                    value={location || 'Office'}
                    required
                    className="select select-bordered w-full max-w-xs"
                    onChange={(e) => setLocation(e.target.value)}
                >
                    <option disabled selected>Choose a Location</option>
                    <option>Office</option>
                    <option>Klix</option>
                    <option>WV</option>
                    <option>PG</option>
                    <option>TT</option>
                    <option>PS</option>
                    <option>GA</option>
                    <option>SL</option>
                    <option>KS</option>
                    <option>MA</option>
                    <option>WN</option>
                    <option>VS</option>
                    <option>RS</option>
                    <option>QM</option>
                    <option>WP</option>
                    <option>SC</option>
                    <option>ED</option>
                    <option>HC</option>
                    <option>HD</option>
                    <option>QD</option>
                    <option>PW</option>
                    <option>QV</option>
                    <option>DD</option>
                    <option>CW</option>
                    <option>BG</option>
                    <option>HP</option>
                    <option>RD</option>
                    <option>MC</option>
                    <option>WW</option>
                    <option>VI</option>
                    <option>SH</option>
                    <option>GV</option>
                    <option>GL</option>
                    <option>HB</option>

                </select>
            </div>
            <div className='flex flex-col w-fit'>
                <label>Date</label>
                <input
                    required
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />
            </div>
            <div className='flex flex-col w-fit'>
                <label>Time Start</label>
                <input
                    required
                    type="time"
                    onChange={(e) => setStartTime(e.target.value)}
                    value={start_time}
                />
            </div>
            <div className='flex flex-col w-fit'>
                <label>Time End</label>
                <input
                    required
                    type="time"
                    onChange={(e) => setEndTime(e.target.value)}
                    value={end_time}
                />
            </div>
            <button type='submit' className="btn btn-primary w-full">Add Time punch</button>
        </form>
    )
}

export default TimePunchForm