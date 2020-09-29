import React, { Component } from 'react'
import axios from 'axios'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNote extends Component {

    state = {
        users: [],
        userSelected:'',
        titulo:'',
        contenido:'',
        date: new Date()
    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:3000/api/users');
        this.setState({ users: res.data.map(user => user.username),
        userSelected: res.data[0].username })


    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newNote = {
            titulo : this.state.titulo,
            contenido: this.state.contenido,
            date: this.state.date,
            autor: this.state.userSelected  
        };
       await axios.post('http://localhost:3000/api/notes', newNote);
        window.location.href = '/'

    }
    onChangeDate = date => {
        this.setState({date})

    }
    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value

        })
    }


    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Crear Nota jamaaaa</h4>
                    <form onSubmit={this.onSubmit}>
                    {/** Selec User */}
                    <div className="form-group">
                        <select
                            className="form-control"
                            name="userSelected"
                            onChange={this.onInputChange}
                        >
                            {
                                this.state.users.map(user => <option key={user} value={user}>
                                    {user}
                                </option>)
                            }
                        </select>
                    </div>
                    <div className="form-group">
                            <input
                            type="text"
                            className="form-control"
                            name="titulo"
                            required
                            placeholder="Titulo"
                            onChange={this.onInputChange}/>
                    </div>
                    <div className="form-group">
                        <textarea
                        name="contenido"
                        className="form-control"
                        placeholder="Contenido"
                        required
                        onChange={this.onInputChange}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <Datepicker className="form-control"
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                                />
                    </div>
                    
                        <button type="text" className="btn btn-primary">
                            crear
                        </button>
                    </form>

                </div>

            </div>
        )
    }
}
