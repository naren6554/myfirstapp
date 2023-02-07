
import { AppBar,Toolbar, styled} from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`background:green`;

const Tabs = styled(NavLink) `font-size:20px;margin-right:20px;text-decoration:none;color:inherit`;

function NavBar() {
    return (

        <Header position="static">
            <Toolbar >
                <Tabs to='/'>Code for Interview</Tabs>
                <Tabs to='/all'>All Users</Tabs>
                <Tabs to='/add'>Add Users</Tabs>
            </Toolbar>
        </Header>

    );

}


export default NavBar;