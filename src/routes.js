import SymptomPage from './pages/SymptomPage';
import { Navigate, useRoutes } from 'react-router-dom';

export default function Router() {
    const routeslist = [
        { path: '/', element: <SymptomPage /> },
        { path: '*', element: <Navigate to="/" replace /> },
    ];

    const routes = useRoutes(routeslist);

    return routes;
}