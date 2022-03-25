import { Component } from "react";
import './style.css'

class InputPekerjaan extends Component{
    state = {
        title: "",
        completed: true
    }

    oneChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const fromIsNotEmpty = this.state.title

        if(fromIsNotEmpty){
            const newData = {
                title: this.state.title
            }

            this.props.tambahPekerjaan(newData);
            this.setState({
                title: ""
            })
        }else{
            alert("isi data dlu")
        }
    }


    render(){
        return(
            <div 
            className="InputText" >
                <input className="input" type="text" placeholder="Tambah Pekerjaan..." value={this.state.title} name="title" onChange={this.oneChange}/>
                <button onClick={this.handleSubmit}>ADD</button>
            </div>


        )
    }
}

export default InputPekerjaan