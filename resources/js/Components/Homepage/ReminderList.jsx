const isReminders = (reminders) => {
    return reminders.map((data, i) => {
        return (
            <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
                <div className="card-body" >
                    <h1 className="card-title">
                        {data.nama_kegiatan}
                    </h1>
                    <p>{data.deskripsi_kegiatan}</p>
                    <div>
                        <h2>{data.tempat}</h2>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">{data.penyelenggara}</div>
                        <div className="badge badge-outline">{data.waktu_kegiatan}</div>
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

const noLogin = () => {
    return (
        <div className="flex justify-center text-3xl text-black">
            <h1>Silahkan Login untuk melihat agenda anda</h1>
        </div>
    )
}

const ReminderList = ({reminders, user}) => {
    if(!user) {
        return noLogin()
    } else {
        if(!reminders) {
            return noReminders()
        } else {
            return isReminders(reminders)
        }
    }
}
export default ReminderList