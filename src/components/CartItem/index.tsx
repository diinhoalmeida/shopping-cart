import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import storeItems from '../../data/items.json';
import { FormatCurrency } from '../../utilities/formatCurrency';

type CarItemsProps = {
    id: number;
    quantity: number
}

const CartItem = ({id, quantity}: CarItemsProps) => {
    const { removeFromCart } = useShoppingCart();
    const item: any = storeItems.find(i => i.id === id);

    if (item === null) return null;

    return (
        <Stack direction='horizontal' gap={2} className="d-flex align-items-center">
            <img src={item?.imgUrl} style={{width: '125px', height: '75px', objectFit: 'cover'}} alt="store icon" />
            <div className="me-auto">
                <>
                    {item?.name}{" "}
                    {quantity > 1 && (
                        <span className="text-muted" style={{ fontSize: ".65rem"}}>
                            x{quantity}
                        </span>
                    )}
                </>
                <div className="text-muted" style={{ fontSize: ".75ream" }}>
                        {FormatCurrency(item?.price)}
                </div>
            </div>
            <> {FormatCurrency(item.price * quantity)} </>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}

export default CartItem;