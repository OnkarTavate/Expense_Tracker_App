
let ListComponent = () => {

    var nos = [10,20,30,40,50]

    var sqnos = nos.map(i => {
        return <li>{i * i}</li>
    })

    var studs = [
        {sid: 100, sname:"Onkar"},
        {sid: 101, sname:"Rushi"},
        {sid: 103, sname:"Shivam"}
    ]

    var arr = studs.map(stud => {
        return <tr>
            <td>{stud.sid}</td><td>{stud.sname}</td>
        </tr>
    })
    return(
        <div>
            {/* Array: {sqnos} */}
            {/* <table border={1}>
                <tr><th>ID</th><th>Name</th></tr>{arr}
            </table> */}
        </div>
    )
}

export default ListComponent