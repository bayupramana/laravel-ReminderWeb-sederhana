const isReminders = (reminders) => {
    return reminders.map((data, i) => {
        return (
            <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
                <div className="card-body" >
                    <h1 className="card-title">
                        {data.nama_kegiatan}
                        <div className="badge badge-primary">NEW</div>
                    </h1>
                    <p>{data.deskripsi_kegiatan}</p>
                    <p>{data.tempat}</p>
                    <p>{data.waktu_kegiatan}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">{data.penyelenggara}</div>
                    </div>
                </div>
            </div>
        )
    })
}


const noReminders = () => {
    return (
        <div className="text-3xl text-black">
            <h1>Anda belum memiliki kegiatan saat ini</h1>
        </div>
    )
}

const ReminderList = ({reminders}) => {
    if(!reminders) {
        return noReminders()
    } else {
        return isReminders(reminders)
    }
}
export default ReminderList