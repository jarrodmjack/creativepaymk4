import { useEffect, useState } from 'react'
import { TimePunch } from '@/types/TimePunchTypes'
import { Employee } from '@/types/EmployeeTypes'
import { calculateTimeDifference } from '@/utils/calculateTimeDifference'
import TimePunchForm from '@/components/TimePunchForm'
import TimePunchTableDisplay from '@/components/TimePunchTableDisplay'
import Header from '@/components/Header'

interface Timepunches extends Array<TimePunch> { }
interface Employees extends Array<Employee> { }

export default function Home() {

    const [timePunches, setTimePunches] = useState<Timepunches>([])
    const [employeeList, setEmployeeList] = useState<Employees>([])

    useEffect(() => {
        const handleFetchTimepunches = async () => {
            try {
                const res = await fetch(`http://localhost:8000/timepunch`, {
                    method: 'GET',
                    mode: 'cors',
                });
                const data = await res.json()
                setTimePunches(data.results)
            } catch (error) {
                console.error(error);
            }
        }
        handleFetchTimepunches()

        const handleFetchEmployees = async () => {
            try {
                const res = await fetch(`http://localhost:8000/employees`, {
                    method: 'GET',
                    mode: 'cors',
                });
                const data = await res.json()
                setEmployeeList(data.results)
            } catch (error) {
                console.error(error);
            }
        }
        handleFetchEmployees()

    }, [])


    const handleCreateTimepunch = async (timePunchData: TimePunch) => {
        const hoursWorked = calculateTimeDifference(timePunchData.start_time, timePunchData.end_time)
        const employeeId = timePunchData.employee
        const employee = employeeList.find(employee => employee.id === employeeId)
        const totalEarned = hoursWorked * employee!.pay_rate
        let timePunch: TimePunch = {
            employee: timePunchData.employee || 1,
            date: timePunchData.date,
            location: timePunchData.location,
            start_time: timePunchData.start_time,
            end_time: timePunchData.end_time,
            hours_worked: hoursWorked,
            total_earned: totalEarned,
            paid: false,
            id: timePunchData.employee,
        }
        try {
            const res = await fetch(`http://localhost:8000/timepunch/`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(timePunch)
            });
            const data = await res.json()
            if (!res.ok) {
                throw new Error(`Failed to fetch, status code: ${res.status}`)
            }
            setTimePunches(data.results)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <main>
            <Header menuItems={[]} />
            <div className='flex'>
                <TimePunchForm createTimePunch={handleCreateTimepunch} employeeList={employeeList} />
                <TimePunchTableDisplay timePunches={timePunches} />
            </div>
        </main>
    )
}
