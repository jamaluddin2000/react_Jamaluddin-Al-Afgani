import ListItem from './ListItem'
import './style.css'

const ListPekerjaan = (props) => {
    const {data, hapusPekerjaan} = props

    return (
        <div className='Table'>  
            <table >
                <tbody>
                    {data.map((list) =>  <ListItem key={list.id} item={list} hapusPekerjaan={hapusPekerjaan}/> )}
                </tbody>



            </table>
            </div>
            
    )
}

export default ListPekerjaan;