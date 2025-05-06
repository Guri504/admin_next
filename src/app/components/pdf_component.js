'use client'
import React from 'react';
import { Document, Page, StyleSheet, Text, usePDF } from '@react-pdf/renderer';

export default function OrderPDF({ order }) {
    const style = StyleSheet.create({
        page: { padding: 30, backgroundColor: '#d3d3d4' },
        heading: { textAlign: 'center', fontSize: 20, marginBottom: 20 },
        orderInfo: { fontSize: 14, marginBottom: 10 },
        item: { fontSize: 14, marginLeft: 10, marginBottom: 20, backgroundColor: '#7e7e7f', paddingHorizontal: 20, paddingVertical: 10 },
        items: { fontSize: 10, marginLeft: 10, marginBottom: 20 }
    })


    const [instance, updatedInstance] = usePDF({
        document: (
            <Document>
                <Page size="A4" style={style.page}>
                    <Text style={style.heading}>Order Invoice</Text>
                    <Text style={style.orderInfo}>Order ID: {order?._id}</Text>
                    <Text style={style.orderInfo}>Customer: {order?.customerName}</Text>
                    <Text style={style.orderInfo}>Amount: ${order?.totalAmount}</Text>
                    <Text style={style.item}>Items:</Text>
                    {order?.orderListing?.length > 0 && order?.orderListing.map((product, i) => (
                        <Text style={style.items} key={i}>
                            {i + 1}. {product.productName} - {product.quantity} pcs - ${product.price} = ${product.quantity * product.price}
                        </Text>
                    ))}
                </Page>
            </Document>
        )
    });

    const handleDownload = () => {
        if (instance.blob) {
            const url = URL.createObjectURL(instance.blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `order-${order.orderId}.pdf`;
            link.click();
        } else {
            alert('PDF is generating... please wait');
        }
    };

    return (
        <div>
            <button style={{ border: 0, backgroundColor: 'transparent', color: '#696cff' }} onClick={handleDownload}>Download Order PDF</button>
        </div>
    );
}