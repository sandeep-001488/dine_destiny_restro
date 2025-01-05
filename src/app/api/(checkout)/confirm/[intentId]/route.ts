import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

export const PUT = async (
  req: Request, // The request object
  { params }: { params: { intentId: string } } // Explicitly specify the parameter structure here
) => {
  const { intentId } =await params;

  try {
    const orderUpdate = await prisma.order.update({
      where: {
        intent_id: intentId,
      },
      data: { status: "Being prepared!" }, // Hardcoded status
    });

    return NextResponse.json(
      { message: "Order has been updated", order: orderUpdate },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error updating order:", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
