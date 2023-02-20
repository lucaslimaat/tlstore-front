import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const session = await getToken({
        req,
        secret: process.env.SECRET,
    });

console.log(session)

    if (!session) {
        return new Response("Auth required", {
            status: 401,
            headers: {
                "WWW-Authenticate": 'Bsic realm="Secure Area',
            },
        });
    }

    return NextResponse.next();
}

export const config = {
    matcher : ["/Profile"] 
}