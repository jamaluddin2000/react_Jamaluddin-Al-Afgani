import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import InputPekerjaan from "./InputPekerjaan";
import ListPekerjaan from "./ListPekerjaan";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: uuidv4(),
          title: "mengerjakan Exercise",
          completed: true,
        },
        {
          id: uuidv4(),
          title: "mengerjakan Assigment",
          completed: false,
        },
      ],
    };
  }

  hapusPekerjaan = (id) => {
    const HapusListPekerja = this.state.data.filter((item) => item.id !== id);
  
    this.setState({ data: HapusListPekerja });
  };

  tambahPekerjaan = (newListPekerjaan) => {
    const newPekerjaan = { id: uuidv4(), ...newListPekerjaan };

    this.setState({ data: [...this.state.data, newPekerjaan] });

    console.log(this.tambahPekerjaan)
  };

  render() {

    return <div>
      <InputPekerjaan tambahPekerjaan={this.tambahPekerjaan} />
      <ListPekerjaan data={this.state.data} hapusPekerjaan={this.hapusPekerjaan} />
      </div>;
  }
}

export default Home;
