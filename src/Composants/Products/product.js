import { Fragment } from 'react';
import './product.css'

let Product = (props)=>{
    let {nom, description, prix}=props.prod
    return <Fragment>
                <div>
                    <p>nom: {nom}</p>
                    <p>Description: {description}</p>
                    <p>Prix: {prix}</p>
                   
                </div>
            </Fragment>
}



export default Product