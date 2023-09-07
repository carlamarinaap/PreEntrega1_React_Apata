import {Badge, Button} from 'react-bootstrap';

function CartWidget() {
  return (
    <Button variant="dark">
      <i class="fa-solid fa-cart-shopping"></i> <Badge bg="danger">9</Badge>
      <span className="visually-hidden">productos añadidos</span>
    </Button>
  );
}

export default CartWidget;