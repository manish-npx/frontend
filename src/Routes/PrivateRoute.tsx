import { Navigate, Outlet, RouteProps, } from 'react-router-dom';
import { _token } from '../services/auth.service';
import Layout from '../layouts/Admin/Layout';

export function PrivateRoute({ children }: RouteProps): JSX.Element {
    const isLoggedIn: string | null = _token() // check cookie or local storage etc.

    return (
        <>
            {
                isLoggedIn ? <Layout><Outlet /></Layout> : <Navigate to="/login" />
            }

        </>
    );
}