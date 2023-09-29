import tomato from '../../assets/fruits/Tomato.png';
import brocolli from '../../assets/fruits/Brocolli.png';
import potato from '../../assets/fruits/Potato.png';
import cucumber from '../../assets/fruits/Cucumber.png';
import pumpkin from '../../assets/fruits/Pumpkin.png';

const shoppingCart = {
    header: {
        title: "Shopping Cart Details",
    },
    details: {
        name: "Shopping Cart",
        farmName: "ETEC Cidade do Livro",
        description: "A basket full of sorted products.",
        price: 40,
        button: "Buy",
    },
    items: {
      title: "Cart Items",
      list: [
        {
          name: "Tomato",
          image: tomato,
        },
        {
          name: "Brocolli",
          image: brocolli,
        },
        {
          name: "Potato",
          image: potato,
        },
        {
          name: "Cucumber",
          image: cucumber,
        },
        {
          name: "Pumpkin",
          image: pumpkin,
        }
      ]
    }
  }

export default shoppingCart;
