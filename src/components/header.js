import './header.css'; 
import { Logo } from './logo';
import { NavLink } from './navLink';
import { Search } from "./search"


export const Header = ({topics}) => {

    return (<header>
		<div class="header-logo">
			<Logo/> 
		</div>
		<div class="header-content">
			<div class="header-topic">
				<nav>
					 <ul>
                        {topics.map((topic) => <NavLink data={topic} /> )}
					 </ul>
				</nav>				
			</div>
			<div class="search">
                <Search/>
			</div>
		</div>
	</header>)
}