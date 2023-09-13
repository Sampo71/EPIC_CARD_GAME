
export default function Card({card}){
    return(
        <div className="card">
            <img src = {card.image}/>
            <ul className="stat-list">
                <li className="stat-list-item">
                <span>{card.stats[0].name} </span>
                <span>{card.stats[0].value}</span>
                </li>
                <li>
                    <span>cuteness </span>
                    <span>15</span>
                </li>
                <li>
                    <span>weight </span>
                    <span>20</span>
                </li>
            </ul>
       
        </div>
    );
}