import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

type Params = Promise<{ id: string }>;

// Get single product
export const GET = async (req: NextRequest, { params }: { params: Params }) => {
  const { id } = await params;

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
type Context = Promise<{ id: string }>;

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Context }
) => {
  const { id } = await params;
  const session = await getAuthSession();

  if (session?.user.isAdmin) {
    try {
      await prisma.product.delete({
        where: {
          id: id,
        },
      });
      return new NextResponse(
        JSON.stringify({ message: "product has been deleted" }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  }
  return new NextResponse(JSON.stringify({ message: "You are not allowed" }), {
    status: 403,
  });
};
