import React from 'react';
import AuthenticatedUserHome from './AuthenticatedUserHome';
import GeneralHome from "./GeneralHome"
import {useSelector} from "react-redux"
export default function Home() {
    const isUserAuthenticated=useSelector(state=>state.user.validToken);
    return (
        <div  >
            {
                isUserAuthenticated?<AuthenticatedUserHome/>:<GeneralHome/>
            }
        </div>
    )
}
