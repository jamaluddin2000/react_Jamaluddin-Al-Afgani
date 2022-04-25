import "./Home.css"
import {gql,  useMutation} from '@apollo/client'
import {useState} from 'react'


const sumbitDaftar = gql`
mutation submid($jenis_kelamin: String , $nama: String , $umur: Int) {
  insert_daftar_pengunjung_one(object: {jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur}) {
    nama,
    umur,
    jenis_kelamin
  }
}`



function PassengerInput(props) {
  const [sumbitdaftar, {loading:loadingSumbit}] = useMutation(sumbitDaftar, {refetchQueries: [props.getDaftarPengunjung]})


  const [state, setState] = useState({
    nama: "",
    umur: "",
    jenisKelamin: "Pria",
    editing: true,
  })

  if(loadingSumbit ){
    return <div>loading...</div>
} 

const handleChangePengunjung = (e) => {
  setState({
    ...state,
    [e.target.name]: e.target.value,
  })
};

  const inputValue = (e) => {
    if (state.nama.trim() && state.umur && state.jenis_kelamin) {
      const umur = state.umur
      if (umur >= 75 || umur <= 12) {
        alert("Umur tidak sesuai")
      } else {
        const newData = {
          nama: state.nama,
          umur: state.umur,
          jenis_kelamin: state.jenis_kelamin,
        }
        sumbitdaftar({ variables: newData})
        setState({
          ...state,
          nama: "",
          umur: "",
          jenisKelamin: "Pria",
        })
      }
    } else {
      alert("Data masih ada yang kosong")
    }
  };




  const handleBukaInput = () => {
    setState({
      ...state,
      editing: false,
    })
  }

  const handleTutupInput = () => {
    setState({
      ...state,
      editing: true,
    })
  }

  let viewMode = {}
  let editMode = {}

  if (state.editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  return (
    <div>
      <div onSubmit={inputValue} style={viewMode}>
        <p>Masukkan Nama Anda</p>
        <input type="text" className="input-text" placeholder="Nama anda ..." value={state.nama} name="nama" onChange={handleChangePengunjung} />
        <p>Masukkan Umur Anda</p>
        <input type="number" className="input-text" placeholder="Umur anda ..." name="umur" value={state.umur}  onChange={handleChangePengunjung} />
        <p>Masukkan Jenis Kelamin Anda</p>
        <select onChange={handleChangePengunjung} name="jenis_kelamin">
          <option value="Pria" selected>
            Pria
          </option>
          <option value="Wanita">Wanita</option>
        </select>
        <p></p>
        <button onClick={inputValue}>Submit</button>


        <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
          Selesai
        </button>
      </div>
      <button className="inputan" onClick={handleBukaInput} style={editMode}>
        Masukkan Nama Pelanggan
      </button>
    </div>
  )
}

export default PassengerInput
