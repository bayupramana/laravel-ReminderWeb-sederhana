import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import ReminderList from '@/Components/Homepage/ReminderList';
import Paginator from '@/Components/Homepage/Paginator';

export default function Homepage(props) {
    return(
        <div className='conatiner min-h-screen bg-slate-200'>
            <Head title={props.title}/>
            <Navbar/>
            <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:flex-stretch items-center gap-4 p-5'>
                <ReminderList reminders={props.reminders.data}/>
            </div>
            <div className='flex justify-center items-center'>
                <Paginator meta={props.reminders.meta}/>
            </div>
        </div>
    )
}