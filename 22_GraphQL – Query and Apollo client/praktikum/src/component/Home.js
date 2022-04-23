import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { useState } from 'react'
import {gql, useQuery, useLazyQuery} from '@apollo/client'
// const intialValue = [
//     [
//         {
//             id: uuidv4(),
//             nama: 'Yoga',
//             umur: 22,
//             jenisKelamin: 'Pria'
//         },
//         {
//             id: uuidv4(),
//             nama: 'Ria',
//             umur: 19,
//             jenisKelamin: 'Wanita'
//         },
//         {
//             id: uuidv4(),
//             nama: 'Fahmi',
//             umur: 25,
//             jenisKelamin: 'Pria'
//         },
//         {
//             id: uuidv4(),
//             nama: 'Lala',
//             umur: 21,
//             jenisKelamin: 'Wanita'
//         },
//         {
//             id: uuidv4(),
//             nama: 'Ivan',
//             umur: 25,
//             jenisKelamin: 'Pria'
//         }
//     ]
// ]

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

function Home () {
    // const[list, setData] = useState(intialValue)
    const {data,loading,error} = useQuery(getDaftarPengunjung)
    const [getDataPengungjung, {data:datalazy, loading:loadinglazy}] = useLazyQuery(getDaftarPengungjungLazy)
    const [id , setId] = useState(1)
    
    if(loading){
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
        getDataPengungjung({variables:{id : id}})
    }
    
    // const hapusPengunjung = id => {
    //     setData((olddata) => olddata.filter(item => {        
    //         return item.id !== id;      
    //     }))
    // };
    // const tambahPengunjung = newUser => {
    //     const newData = {
    //         id: uuidv4(),
    //         ...newUser
    //     }; 
    //     setData((olddata) => [...olddata, newData]  );
    // };
    console.log("data",data)
        return (
            <div >
                <Header/>
                <div className="inputLazy">

                <input onChange={onchangelazy} type="text" />
                <button onClick={handleSumbit}>cari</button>
                </div>
                <ListPassenger 
                    list={data}
                    // hapusPengunjung={hapusPengunjung}
                />
                {/* <PassengerInput
                    tambahPengunjung={tambahPengunjung}
                /> */}

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
                        </tr>
                    </table>


                    </div>
                ))}
            </div>
        )
}
export default Home;