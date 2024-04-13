import React, { SyntheticEvent, useEffect, useState } from "react";
import "./DesignPage.css";
import Table from "../../Components/Table/Table";

interface Props {

};

const DesignPage: React.FC<Props> = (props: Props) : JSX.Element=>{
  
    return (
       <>
        <h1>Finshark design page</h1>
        <h2>this is finsharks design page this is where we weşll hous 
            varius design aspect of the app</h2>

            <Table />
       </>
    )
}

export default DesignPage;