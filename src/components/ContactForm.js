import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
  render() { 
    return (
      <section id="contact">
        <div className="form-container">
          <form>
            <div className="form-row">
              <label>Nome
                <input type="text"></input>
              </label>
              <label>E-mail
                <input type="text"></input>
              </label>
            </div>

            <div className="form-row">
              <label>Mensagem
                <textarea rows="6"></textarea>
              </label>
            </div>

            <button type="submit" className="btn btn--outline btn--yellow">Enviar mensagem</button>
          </form>
        </div>
      </section>
    );
  }
}
 
export default ContactForm;