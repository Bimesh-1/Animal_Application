
import { useParams } from "react-router-dom";
import Card from "../components/Card";



const CategoryPage = ({ removeCard, removeLikes, addLikes, ...rest }) => {
    const { category } = useParams(); //react hook which is reading url 

    const categoryItems = rest[category];


    console.log(categoryItems);
    return (
        <>
            <h2>{category}</h2>
            {categoryItems.map((item) => {
                return <Card
                    key={item.name}
                    name={item.name}
                    likes={item.likes}
                    removeCard={() => removeCard(item.name, category)}
                    removeLikes={() => removeLikes(item.name, category, 'remoove')}
                    addLikes={() => addLikes(item.name, category, 'add')}
                />;
            })}
        </>
    );
};
export default CategoryPage;