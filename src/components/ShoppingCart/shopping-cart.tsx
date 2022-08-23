import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useShoppingCart } from '../../context/ShoppingCartContext';

type ShoppingCartProps = {
    isOpen: boolean
}

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
    const { openCart } = useShoppingCart();
    return (
        <Offcanvas show={isOpen} onHide={openCart} placement="end">
            <Offcanvas.Header>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
        </Offcanvas>
    )
}

export default ShoppingCart;