import ListItem from './ListItem';
import {gql,  useMutation} from '@apollo/client'


const deletDaftar = gql`
mutation deletDaftar($id: Int!) {
  delete_daftar_pengunjung_by_pk(id: $id) {
    id
  }
}`
const ListPassenger = props => {
  const [deletdaftar, {loading: loadingDelet}] = useMutation(deletDaftar, {refetchQueries:[props.getDaftarPengunjung]})

  if(loadingDelet){
      return <div> loading ....</div>
  }

  const handleDeletDaftar = (id) => {
    deletdaftar({ variables : {
      id : id
    }})

  }
    
    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {props.list.daftar_pengunjung.map(item => (
                    <ListItem
                        key={item.id}
                        data={item}
                        handleDeletDaftar={handleDeletDaftar}
                    />
                ))}
            </table>
        </div>
    )
  }

export default ListPassenger;