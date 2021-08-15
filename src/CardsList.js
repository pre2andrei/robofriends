import Card from './Card';

const CardList = ({robots}) => {
    return (
        <div>
            {robots.map((item)=>{
                return (
                    <Card key={item.id} user={item} />)
            })}
        </div>
    )
}

export default CardList;