import friends from './friends';
import Card from './Card';

const CardList = () => {
    return (
        <div>
            {friends.map((item)=>{
                return (
                    <Card key={item.id} friend={item} />)
            })}
        </div>
    )
}

export default CardList;