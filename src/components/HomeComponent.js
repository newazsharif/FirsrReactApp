import React from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import { baseURL } from '../shared/baseURL';
import { Loader } from './LoaderComponent';


function RenderCard({item,isLoading,errMess}){
   if(isLoading){
       return(
           <div className="container">
               <div className="row">
                   <Loader />
               </div>
           </div>
       )
   }
   else if (errMess != null) {
       return(
       <div className="container">
           <h2 className="text-danger">{errMess}</h2>
       </div>
       )
   }
   else{
        return(
            <Card>
                <CardImg src={baseURL +  item.image}></CardImg>
                <CardBody>
                    <CardTitle>
                        {item.name}
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    </CardTitle>
                    <CardText>
                        {item.description}
                    </CardText>
                </CardBody>
            </Card>
        );
   }
}
function Home(props){
    // alert(JSON.stringify(props))
    if(props.isLoading){
        
    }
    return(
        <div className="contatiner">
            <div className="row align-items-start">
                <div className = "col-12 col-md m-1">
                    <RenderCard item = {props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess} />
                </div>
                <div className = "col-12 col-md m-1">
                    <RenderCard item = {props.promotion} isLoading={props.promosLoading} errMess={props.promosErrMess}/>
                </div>
                <div className = "col-12 col-md m-1">
                    <RenderCard item = {props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;