import './search.css'; 

export const Search = () => {

    return (<form action="#">
                <input type="search" id="busca" name="q" placeholder="Search" />
                <button type="submit">Buscar</button>
            </form>)
}