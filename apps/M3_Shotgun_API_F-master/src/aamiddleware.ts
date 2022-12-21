import {NextRequest, NextResponse, NextFetchEvent} from 'next/server';
import {isExpired} from '@hooks/token/useToken';
import axios from 'axios';

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  console.log('MIDDLEWARE START ', req.nextUrl.pathname);

  //if (!session) return NextResponse.redirect("/auth/signin")

  // const session = await unstable_getServerSession(request, NextResponse, authOptions)
  // console.log(" === AUTHENTICATION ===", session);

  const holy = 'abv';
  const isExp = true; //isExpired(holy) //만료여부 체크, 만료 5분전까지 true로 처리

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/dashboard/:path*'],
};

const refreshToken = async () => {
  return new Promise(async (resolve) => {
    console.log('== TOKEN REFRESH ===');

    // const respo = await res.json()

    // if(respo.status === 200){
    //   setToken(respo.data)
    //   resolve(true)
    // }
    // else {
    //   console.log("FAIL === AUTHENTICATION ===");
    //   resolve(false)
    // }
  });
};
