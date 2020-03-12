import React from 'react'
import FormComment from './FormComment'
import '../App.css';

class Post extends React.Component{
    constructor(props){
        super(props)

        this.state={
            showMessage : false,
            comments : [
            {
                id:1,
                detalle: 'Exelente ',
                usuario:'claudio@gmail.com',
                img:'https://www.google.com/imgres?imgurl=http%3A%2F%2Fgeneradordememesonline.com%2Fmedia%2Fcreated%2Fro69c9.jpg&imgrefurl=http%3A%2F%2Fgeneradordememesonline.com%2Fmeme%2Fro69c9&tbnid=16em9opSYt2Y3M&vet=12ahUKEwi5sem80IHoAhVvCbkGHWC4CyMQMygMegUIARDkAQ..i&docid=Gkf8FMtZj3OjeM&w=600&h=400&q=meme%20de%20maria%20del%20carmen&ved=2ahUKEwi5sem80IHoAhVvCbkGHWC4CyMQMygMegUIARDkAQ'
            },
            {
                id:2,
                detalle: 'Muy bueno',
                usuario:'mateo@gmail.com',
                img:'https://www.google.com/search?q=meme+de+maria+del+carmen&sxsrf=ALeKk01KAohXDuv-0IBXZl89IVn6RQilAg:1583352593444&tbm=isch&source=iu&ictx=1&fir=TdblNekQ5HqkiM%253A%252CAQfQKsNR1GfHGM%252C_&vet=1&usg=AI4_-kRQMmH_l4t4Tk4Ch-Y3ByJYdsuABQ&sa=X&ved=2ahUKEwiXsouH0IHoAhULILkGHetdAmwQ9QEwB3oECAkQIg#imgrc=TdblNekQ5HqkiM:'
            },
            {
                id:3,
                detalle: 'buenos',
                usuario:'maria@gmail.com',
                img:'https://cdn.memegenerator.es/imagenes/memes/full/27/94/27941516.jpg'
            },
        
        ]
        }
    }

   

        render(){

            // let comment
            // if(this.state.showMessage){
            //     comment = <ul>
            //         {
            //             this.state.comments.map(comment => <Comment data={comment} key={comment.id}/>)
            //         }
                    
            //     </ul>
           
            // }else{
            //     comment = <div>Click para ver los comentarios</div>
            // }

            return(
                <div id='recuadro'>
                    <h2>{this.props.data.name}</h2>
                    <p>{this.props.data.brief}</p>
                    <p>{this.props.data.body}</p>

                    {/* {comment} */}
                    <FormComment/>
                </div>             
            )
        }
}
export default Post;