import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom';

export default function DashboardHeader() {
  const { pathname } = useLocation(); 
  const navigate = useNavigate(); 
  const goHome = () => navigate("/dashboard"); 
  let homeButton = null; 
  if (pathname !== "/dashboard") {  // Logged in -> already at home
    homeButton = <button 
      className="border-2 rounded-md p-2"
      title="Home"
      onClick={goHome} /* Tricky bug: onClick={navigate("/dashboard")}*/
    >
      <FontAwesomeIcon icon={faHouse} />
    </button>  
  }
  return (
    <header className="bg-green-700 text-white p-2">
      <div className="flex justify-between">
        <div className="text-2xl font-bold">Dashboard Header | Rewrite</div>
        <div>{homeButton}</div>
      </div>
      <nav></nav>
    </header>
  )
}