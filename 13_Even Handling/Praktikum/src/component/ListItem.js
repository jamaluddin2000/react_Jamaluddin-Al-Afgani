import './style.css'


const ListItem = ({onChange, item, hapusPekerjaan}) => {

 
    return (
        <>
        <tr className='IsiPekerjaan'> 
            <td className='ceckbox'><input type="checkbox" checked={item.completed} onChange={() => onChange(item.id)}/></td>
            <td style={{textDecoration: item.completed ? "line-through" : "none"}}>{item.title}</td>
            <td><button onClick={() => {hapusPekerjaan(item.id)}}>DELET</button></td>
        </tr>
        </>

    )
}

export default ListItem