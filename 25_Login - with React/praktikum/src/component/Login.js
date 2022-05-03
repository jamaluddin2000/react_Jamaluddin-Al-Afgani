import {useEffect, useState} from 'react'
import {gql, useLazyQuery} from '@apollo/client'
import { useNavigate } from 'react-router-dom';

const QueryLogin =gql`
query MyQuery($username: String , $password: String ) {
  Login(where: {username: {_eq: $username}, password: {_eq: $password}}) {
    username
    level
  }
}
`; 

export default function Login() {
    const [getQueryLogin, {data,loading,error}] = useLazyQuery(QueryLogin)
    const [nama, setNama] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate()
    
    useEffect(() => {
      if (!!data?.Login.length && !loading){
        console.log("datanya",data)
        navigate("/Home")
      }
    },[data,loading]) 

    const _onChangUsername = (e) => {
      setNama(e.target.value)
    }
    const _onChangPassword = (e) => {
      setPassword(e.target.value)
    }
    
    const handleSumbid = () => {
      getQueryLogin({variables : {username : nama, password:password   }})
      
    }
    console.log(loading)
   
    if (loading) return "loading...";
    if (error) return `Error! ${error}`;
  

    return( 
      <div>
      <input type="text" onChange={_onChangUsername}  />
      <input type='text' onChange={_onChangPassword} />
      <button onClick={handleSumbid} >Masuk</button>
      {data && <div>GAGAL</div>}

      </div>
  )
    }