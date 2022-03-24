import './style.css'


const ListItem = ({item, hapusPekerjaan}) => {

    
    handleCoret = () => {
        this.setState({
            completed: false
        })
    }


    const viewMode = {};
    const editMode = {};
    
        if (this.setState.item.completed){
            viewMode.textdecoration = "line-through";
        } else {
            editMode.textdecoration = "line-through";
        }    

    return (
        <tr className='IsiPekerjaan'> 
            <td><input type="checkbox" /></td>
            <td>{item.title}</td>
            <td><button onClick={() => {hapusPekerjaan(item.id)}}>Hapus</button></td>
        </tr>
        

    )
}

export default ListItem