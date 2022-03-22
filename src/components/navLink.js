import './navLink.css'; 

export const NavLink = ({data}) => {

    return (<li><a class="nav-link" href={data.link} >{data.title}</a></li>)
}