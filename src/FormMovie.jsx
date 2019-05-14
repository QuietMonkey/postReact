import React, { Component } from 'react'
import './FormMovie.css'
const axios = require('axios');

class FormMovie extends Component{
    state = {
        name: '',
        picture: '',
        comment: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    
    submitForm = (e) => {
        e.preventDefault()

        const dataPost = {
            name: this.state.name,
            poster: this.state.picture,
            comment: this.state.comment
        }
    
        const urlPost = "http://campus-bordeaux.ovh:3001/api/quests/movies/"
        
        axios.post(urlPost, dataPost)
        
            .then(function (response) {
                alert(`Film ${this.state.name} enregistré au n° ${response.data}!`);
            })
            .catch(function (error) {
                alert(error);
            });
    }

    render(){
        console.log(this.state)
        return(
            <div className="FormMovie">
                <h1>Saisi d'un Film</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Informations</legend>
                        <div className="form-data">
                            <label htmlFor="name">Titre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={this.onChange}
                                value={this.state.name}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="picture">Image</label>
                            <input
                                type="text"
                                id="picture"
                                name="picture"
                                onChange={this.onChange}
                                value={this.state.picture}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="comment">Commentaire</label>
                            <input
                                type="text-area"
                                id="comment"
                                name="comment"
                                onChange={this.onChange}
                                value={this.state.comment}
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Envoyer" />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default FormMovie