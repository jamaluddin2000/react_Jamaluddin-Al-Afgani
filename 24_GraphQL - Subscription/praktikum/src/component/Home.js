import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { useState } from 'react'
import {gql, useQuery, useLazyQuery, useMutation, useSubscription} from '@apollo/client'


const getDaftarPengunjung = gql`
query MyQuery {
    daftar_pengunjung {
      id
      jenis_kelamin
      nama
      umur
    }
  }
  
`;

const getDaftarPengungjungLazy = gql`
query MyQuery($id: Int) {
  daftar_pengunjung(where: {id: {_eq: $id}}) {
    id
    jenis_kelamin
    nama
    umur
  }
}
`

const updateDaftar = gql`
mutation MyMutation($_eq: Int, $id: Int) {
  update_daftar_pengunjung(where: {id: {_eq: $_eq}}, _set: {id: $id}) {
    affected_rows
    returning {
      id
    }
  }
}`

const subscriptionDaftarPengunjung = gql`
subscription MySubscription {
  daftar_pengunjung {
    id
    jenis_kelamin
    nama
    umur
  }
}`

function Home () {
    // const {data,loading,error} = useQuery(getDaftarPengunjung)
    const [getDataPengungjung, {data:datalazy, loading:loadinglazy}] = useLazyQuery(getDaftarPengungjungLazy)
    const [updetDataPengunjung, {loading : loadingUpdate}] = useMutation(updateDaftar)
    const {data , loading, error} = useSubscription(subscriptionDaftarPengunjung)

    const [id , setId] = useState(1)
    const [isUpdate, setUpdate] = useState("")

  
    
    if(loading || loadingUpdate  ){
        return <div>loading...</div>
    }

    if(error){
        console.log(error)
        return null
    }

    const onchangelazy = (e) => {
        setId(e.target.value)
    }
    const handleSumbit = () => {
      getDataPengungjung({variables:{id : id}
      })
        console.log("idnya ",id)
    }

    const update = (e) => {
      setUpdate(e.target.value);
    }

    const handleUpdate = (id) => {
      if(id) {
        updetDataPengunjung({variables : {_eq: id, id : isUpdate}});
        setUpdate("");
      }else{
        alert("pilih data yang akan di Update")
      }
    }



        return (
            <div >
                <Header/>
              
                <div className="inputLazy">

                <input onChange={onchangelazy} type="text" />
                <button onClick={handleSumbit}>cari</button>
                </div>
                <ListPassenger 
                    list={data}
                  getDaftarPengunjung = {getDaftarPengunjung}

                />
                <PassengerInput
                  getDaftarPengunjung = {getDaftarPengunjung}
                />

                {datalazy?.daftar_pengunjung.map((daftar) => (
                    <div>
                    <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                        <thead bgcolor="red">
                            <td>Nama</td>
                            <td>Umur</td>
                            <td>Jenis Kelamin</td>
                            <td bgcolor="white" className="removeBorder"></td>
                        </thead>
                        <tr>
                            <td>{daftar.nama}</td>
                            <td>{daftar.umur}</td>
                            <td>{daftar.jenis_kelamin}</td>
                            {/* <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}><button>Hapus</button></td> */}
                            <input onChange={update} type="text" placeholder="Ubah Id Pengunjung..." style={{width: 167}} required></input>
                <button onClick={() => handleUpdate(daftar.id)}>Edit</button>

                        </tr>
                    </table>


                    </div>
                ))}

               
            </div>
        )
}
export default Home;