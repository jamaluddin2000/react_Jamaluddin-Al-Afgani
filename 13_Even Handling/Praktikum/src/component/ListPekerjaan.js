import ListItem from './ListItem'
import './style.css'

const ListPekerjaan = ({onCheckClicked,...props}) => { // bagusnya disini buat desctructering
    const {data, hapusPekerjaan} = props

    return (
        <div className='Table'>  
            <table >
                <tbody>
                    {data.map((list) =>  <ListItem key={list.id} item={list} hapusPekerjaan={hapusPekerjaan} onChange={onCheckClicked}/> )}
                </tbody>
            </table>
            </div>
            
    )
}

export default ListPekerjaan;