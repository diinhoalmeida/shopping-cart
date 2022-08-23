import React from 'react';
import { Offcanvas, OffcanvasBody, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { FormatCurrency } from '../../utilities/formatCurrency';
import CartItem from '../CartItem';
import storeItem from '../../data/items.json';

type ShoppingCartProps = {
    isOpen: boolean
}

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
    const { openCart, cartItems } = useShoppingCart();
    return (
        <Offcanvas show={isOpen} onHide={openCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <OffcanvasBody>
                <Stack gap={3}>
                    {cartItems.map(item => {
                        return (
                            <CartItem key={item.id} {...item} />
                        )
                    })}
                    <div className="ms-auto fw-bold fs-5">
                        Total{" "}
                        {FormatCurrency(
                            cartItems.reduce((total, cartItem) => {
                                const item = storeItem.find(i => i.id === cartItem.id)
                                return total + (item?.price || 0) * cartItem.quantity
                            }, 0)
                        )}
                    </div>
                </Stack>
            </OffcanvasBody>
        </Offcanvas>
    )
}

export default ShoppingCart;