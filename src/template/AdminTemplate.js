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
                if (localStorage.getItem("userAdmin")) {
                    return (
                        <AdminLayout>
                            <Component {...propsCompnent} />
                        </AdminLayout>
                    )
                }
                else {
                    return <Redirect to="/admin" />
                }
            }}
        />
    )
}