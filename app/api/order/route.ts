import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { items, total, customer } = body;

        // In a real app, you would save this to a database and send an email/SNS
        console.log('New Order Received:', {
            orderId: Math.random().toString(36).substr(2, 9).toUpperCase(),
            customer,
            items,
            total,
            timestamp: new Date().toISOString(),
        });

        return NextResponse.json({
            success: true,
            message: 'Order placed successfully! Fry Harder.',
            orderId: Math.random().toString(36).substr(2, 9).toUpperCase(),
        }, { status: 201 });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Failed to place order. Please try again.',
        }, { status: 500 });
    }
}
