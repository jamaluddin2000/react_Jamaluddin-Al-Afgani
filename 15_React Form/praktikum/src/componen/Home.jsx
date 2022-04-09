import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  const DataKosong = {
    NamaLengkap: "",
    Email: "",
    NoHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };

  const [data, setData] = useState(DataKosong);
  const [errMs, setErrMs] = useState("");
  const [errMs1, setErrMs1] = useState("");
  const regexNama = /^[A-Za-z]*$/;
  const regexNoHandphone = /^(08\w*)/;
  const FotoSampul = useRef(null);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "NamaLengkap") {
      if (regexNama.test(value)) {
        setErrMs("");
      } else {
        setErrMs("nama Lengkap Harus Berupa huruf");
      }
    }

    if (name !== "") {
      if (regexNoHandphone.test(value)) {
        setErrMs1("");
      } else {
        setErrMs1("No Handphone Tidak Sesuai");
      }
    }

    setData({
      ...data,
      [name]: value,
    });
    console.log(data)
  };

  const handleSubmit = (event) => {
    if (errMs !== "") {
      alert("Data Pendaftran Tidak Sesuai ");
    } else {
      alert(`Data Pendaftaran ${data.NamaLengkap} berhasil di terima`);
    }
    event.preventDefault();
  };
  const handle = () => {
    setData(DataKosong)
    alert("Reset data")
  }

  useEffect (()=> {
    console.log(data)
  } ,[data]);
  // const handleReset = (event) => {

  //   setData(DataKosong);
  //   setErrMs("")
  //   setErrMs1("")
  // };

  return (
    <>
      <h1>Pendaftaran Peserta Coding Bootcamp </h1>
      <form onSubmit={handleSubmit}>
        <div className="text">
          <label>
            Nama Lengkap :
            <div >
              <input
              className="inputan"
                type="text"
                name="NamaLengkap"
                required
                onChange={handleInput}
              />
              <span className="error">{errMs}</span>
            </div>
          </label>
          <br />
          <label>
            Email :
            <div>
              <input
              className="inputan"
                type="email"
                name="Email"
                required
                onChange={handleInput}
              />
            </div>
          </label>
          <br />
          <label>
            No Handphone :
            <div>
              <input
                maxLength={13}
                type="text"
                name="NoHandphone"
                defaultValue={12312}
                className="inputan"
                required
                onChange={handleInput}
              />
              {errMs1}
            </div>
          </label>
        </div>
        <br />

        <label>
          Latar Belakang Pendidikan :
          <br/>
          <div>
            <span>
              <input
                type="radio"
                value={"IT"}
                name="Pendidikan"
                onChange={handleInput}
                required
              />
              IT
            </span>
            <span>
              <input
                type="radio"
                value={"NonIT"}
                name="Pendidikan"
                onChange={handleInput}
                required
              />
              Non IT
            </span>
          </div>
        </label>
        <br/>

        <label for="nasionality">Kelas :</label>
        <br />
        <select 
        name="kelas" 
        id="Nationality" 
        required
        defaultValue={"koding-3"} 
        onChange={handleInput}>
          <option  value={"koding-1"}>
            Coding Backend with Golang
          </option>
          <option value={"koding-2"}>
            Coding Frontend with ReactJS
          </option>
          <option  value={"koding-3"}>
            Fullstack Developer
          </option>
        </select>
          <br/><br/>

        <label>
          Foto Surat Kesungguhan :
          
          <div>
            <input type="file" refs={FotoSampul} required />
          </div>
        </label>
        <br/>
        <label>
          Foto Surat Kesungguhan :
          <br/><br/>
          <div>
            <textarea
              id="tutorial"
              name="harapan"
              onChange={handleInput}
              rows="5"
              cols="40"
            ></textarea>
          </div>
        </label>

        <div className="tombol">
        <input className="sumbit" type="submit" value="Submit" required></input>
        <button type="reset"  onClick={handle} >Reset</button>
        </div>
      </form>
    </>
  );
};

export default Home;
