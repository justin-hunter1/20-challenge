import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';






// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    }]);


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
