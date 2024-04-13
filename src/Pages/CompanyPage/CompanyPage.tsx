import React, { SyntheticEvent, useEffect, useState } from "react";
import "./CompanyPage.css";
import { CompanyProfile, CompanySearch } from "../../company";
import { useParams } from "react-router-dom";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";

interface Props {

};

const CompanyPage: React.FC<Props> = (props: Props) : JSX.Element=>{
    let {ticker} = useParams();
    const [company, setCompany] = useState<CompanyProfile>();

    useEffect(() => {
        const getProfileInit = async () =>{
            const result = await getCompanyProfile(ticker!)
            setCompany(result?.data[0])
            console.log("aaaaaa",result);
            
        }
        getProfileInit()
    }, [])
    
    return (
       <>
       {
        company ? 
        (<div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">

            <Sidebar />   

            <CompanyDashboard ticker="">
                <Tile title="Company Name" subTitle={company.companyName}/>
            </CompanyDashboard>

        </div>)
            :
            (<div>Company not found!</div>)
        }
       </>
    )
}

export default CompanyPage;