import Container from "../../UI/Container"
import Sidebar from "./SidebarWrapper/Sidebar"
import News from "./NewsWrapper/News"

const Naujienos = () =>{
    return(
        <Container title='Container'>
                <News></News>
                

                <button className="BigButton">Big Button Element</button>

            <Sidebar></Sidebar>

        </Container>
    )
}
export default Naujienos