// 'use client'
// import { useDispatch, useSelector } from 'react-redux'; // Import useSelector for accessing state
// import cartReducer, { addToCart } from '../../../app/Redux/Cartslice';

// export default  function TopicsList({product}) {


//     const cart = useSelector(state => state.cart); 

//     const dispatch = useDispatch();

//     const handleAddToCart = (product) => {
//         // Dispatch action to add product to cart
//         dispatch(addToCart(product));
//       }
   
//       const isProductInCart = (productId) => {
//         return cart.some(item => item._id === productId);
//     }


//    return (

//  <>


//             {isProductInCart(product._id) ? (
//             <button className=' cursor-not-allowed' disabled>Juz dodano</button>
//           ) : (
//             <button className='' onClick={() => handleAddToCart(product)}>Dodaj do koszyka</button>
//           )}        
 
//     </>
//   );
// }


'use client'
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector for accessing state
import cartReducer, { addToCart } from '../../../app/Redux/Cartslice';
import { RootState } from '../../../app/Redux/Store'; // Importowanie typu RootState

// Definicja typu Product
type Product = {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  categories: string[];
  price: string;
  imageFileUrl: string;
  pdfFileUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// Definicja typu propsów dla TopicsList
type TopicsListProps = {
  product: Product;
};

// Komponent TopicsList
const TopicsList: React.FC<TopicsListProps> = ({ product }) => {
  const cart = useSelector((state: RootState) => state.cart); // Użycie typu RootState
  const dispatch = useDispatch();

  // Funkcja obsługująca dodanie produktu do koszyka
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  // Funkcja sprawdzająca, czy produkt jest już w koszyku
  const isProductInCart = (productId: string) => {
    return cart.some((item: Product) => item._id === productId);
  };

  return (
    <>
      {isProductInCart(product._id) ? (
        <button className="cursor-not-allowed" disabled>
          Już dodano
        </button>
      ) : (
        <button onClick={() => handleAddToCart(product)}>
          Dodaj do koszyka
        </button>
      )}
    </>
  );
};

export default TopicsList;