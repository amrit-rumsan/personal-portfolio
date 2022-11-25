import Experience from "./Experience"

export default function Education() {
    const data = [
        {
            college: 'Sagarmatha College of Science & Technology',
            year: '2074-2079',
            course: 'Bsc.CSIT',
            division: '1st Division'
        },
        {
            college: 'Aroma English Higher Secondary School',
            year: '2072-2074',
            course: '+2, Science',
            division: '1st Division'
        },
        {
            college: 'Shree Bal Bikas English Boarding Secondary School',
            year: '2071',
            course: 'SLC',
            division: 'Distinction'
        },

    ]
    return (
        <div className="p-10 bg-gray-300 flex justify-evenly flex-wrap text-center" id="education">
            <div>
                <h1 className="font-extrabold text-4xl mb-5">Education</h1>
                    {data.map((datas, i) => {
                        return (
                            <ul key={i}>
                                <li className="font-bold text-xl ">{datas.college}</li>
                                <ul className="mb-3">
                                    <li>{datas.year}</li>
                                    <li>{datas.course}</li>
                                    <li>{datas.division}</li>
                                </ul>
                            </ul>
                        )
                    })}
            </div>
            <div>
                <Experience />
            </div>

        </div>
    )
}