import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("adminToken");

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        navigate("/adminLogin");
    };

    return (
        <header className="w-full h-16 bg-gray-900 text-white flex items-center justify-between px-6 shadow-md">
            <h1 className="text-lg font-semibold">Admin Dashboard</h1>

            {isLoggedIn && (
                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-sm font-medium transition"
                >
                    Logout
                </button>
            )}
        </header>
    );
};

export default AdminHeader;
