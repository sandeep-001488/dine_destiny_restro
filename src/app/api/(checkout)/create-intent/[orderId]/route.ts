import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";
import Stripe from "stripe"; // Use ESModule import

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia", // Add the Stripe API version you are using
});

export async function POST({ params }: { params: { orderId: string } }) {
  const { orderId } = params;

  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
  });

  if (order) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(order.price),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    await prisma.order.update({
      where: {
        id: orderId,
      },
      data: { intent_id: paymentIntent.id },
    });

    return new NextResponse(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      { status: 200 }
    );
  }

  return new NextResponse(JSON.stringify({ message: "Order not found!" }), {
    status: 404,
  });
}
