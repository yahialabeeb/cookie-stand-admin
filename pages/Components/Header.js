import { useAuth } from '../../contexts/auth'

export default function Header(){
    const { logout } = useAuth();
    return (
        <header className="flex items-center justify-between py-6 bg-green-400">
            <p className="mx-5 text-3xl" >Cookies Stand Admin</p>
            <button onClick={logout} className="px-2 mx-5 bg-gray-100 rounded shadow-md">Logout</button>
            <button className="px-2 mx-5 bg-gray-100 rounded shadow-md">Overview</button>
        </header>
    )
}