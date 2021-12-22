
import CookieStandAdmin from './Components/CookieStandAdmin';
import LoginForm from './Components/LoginForm'
import { useAuth } from '../contexts/auth';
// import useResource from '../hooks/useResource'

export default function Home() {
  const { user } = useAuth();
  // const { resources, loading, createResource, deleteResource } = useResource();
  return (
    <div className="min-h-screen py-2">

      {user? <CookieStandAdmin/>:<LoginForm/>}
 
    </div>
  )
}
