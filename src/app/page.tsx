import Board from "@/components/Board";
import LoginView from "@/components/views/LoginView";
import { authOptions } from "@/lib/authOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if(!session){
    return(
      <LoginView />
    );
  }
  return (
  <div>
    <h1 className="text-4xl mb-4">Your Boards:</h1>
    <div>
      <Link 
        className="btn primary inline-flex gap-2"
        href={'/new-board'}>
        Create New Board <FontAwesomeIcon className="h-6" icon={faArrowRight} />
      </Link>
    </div>
  </div>);
}
