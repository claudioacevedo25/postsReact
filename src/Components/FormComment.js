import React from 'react'
import Comment from './Comment'

class FormComment extends React.Component
{
    constructor(prop){
        super(prop)

        this.message = React.createRef();

        this.state = {
            showMessage : false,
            sent: false,
            limite:50,
            minimo:10,
            overLimit:false,
            body:"",
            comments:""
        }
    }

    handleKeyUp = () => {
        let value = this.message.current.value;
        this.setState(state => {
            return {
                overLimit:value.length>state.limite,
                body:value,   
            }           
        })
    }

    showComments = (e) => {
        
        e.preventDefault()
        this.setState(state => {
            return {showMessage : !state.showMessage, comments : state.comments}
        }) 
    }
    sendComment = (e) => {  
        let value = this.message.current.value;
        e.preventDefault();
        this.setState(state => {
            return{
                body:value,
                sent:true,
                comments : state.comments
            }
            
            
        })

    }

    render(){
        let comment = "";
        if(this.state.showMessage){
            comment =
             <ul>
               {this.state.comments}
            </ul>
       
        }else{
            comment = <div>Click para ver los comentarios</div>
        }

        let enviado = <div><button onClick={this.showComments}>Mostrar comentarios</button></div>
        return(
            <div>
                <div>
                    <strong>{this.state.comments}</strong>
                    {
                        this.state.sent ? enviado : 
                            <form action="">
                                <div> 
                                    
                                    
                                    <p>{this.state.body}</p>
                                    <textarea ref={this.message} onKeyUp={this.handleKeyUp}></textarea>
                                        <p>Restan {this.state.limite - this.state.body.length} caracteres</p>
                                        <strong>{this.state.overLimit ? 'Maximo de caracteres permitidos ¡¡¡¡' : ''}</strong>
                                </div>

                                <div> 
                                    <button
                                        onClick = {this.sendComment}
                                        disabled = {this.state.minimo > this.state.body.length}> enviar comentario
                                    </button>
                                </div>
                            </form>
                            
                    }
                </div>
            </div>
        )
    }
}
export default FormComment;