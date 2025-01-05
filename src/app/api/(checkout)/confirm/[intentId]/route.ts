import { prisma } from "@/utils/connect";
import { NextResponse, NextRequest } from "next/server";

type Params = Promise<{ intentId: string }>;

export const PUT = async (req: NextRequest, { params }: { params: Params }) => {
  const { intentId } = await params; 

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
