// Desarrollado por: Camilo Alarcón (src/components/templates/AdminLayout.jsx)

import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { AdminSidebar } from '../organisms/AdminSidebar';

export default function AdminLayout({ children }) {
    return (
        <Container fluid className="p-0">
            <Row className="g-0">
                <Col md={3} lg={2}>
                    <AdminSidebar />
                </Col>
                <Col md={9} lg={10} className="p-4 bg-light min-vh-100">
                    {children}
                </Col>
            </Row>
        </Container>
    );
}