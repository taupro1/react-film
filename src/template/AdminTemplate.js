import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Navbars from '../component/admin/navbars'


const AdminLayout = props => {
    return (
        <div>
            <Navbars />
            {props.children}
        </div>
    )
}

export default function AdminTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={propsCompnent => {
                return (
                    <AdminLayout>
                        <Component {...propsCompnent} />
                    </AdminLayout>
                )
                // if (localStorage.getItem("userAdmin")) {

                // }
                // else {
                //     return <Redirect to="/admin" />
                // }
            }}
        />
    )
}