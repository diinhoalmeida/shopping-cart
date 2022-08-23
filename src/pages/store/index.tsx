import React from 'react';
import './index.css';
import storeItems from '../../data/items.json';
import { Col, Row } from 'react-bootstrap';
import StoreItem from '../../components/StoreItem';

const Store = () => {
    return (
        <>
            <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {storeItems.map((item: any, id: number) => (
                    <Col key={id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Store;