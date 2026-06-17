import jwt from 'jsonwebtoken';

export function signAuthToken(email) {
    return jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  }

function getBaseCookieOptions() {
  const isProduction = process.env.NODE_ENV === "production";

  return {
    httpOnly: true,
    path: "/",
    sameSite: isProduction ? "none" : "lax",
    secure: isProduction,
  };
}

export function getJwtCookieOptions() {
  const days = Number(process.env.JWT_COOKIE_EXPIRES_IN) || 7;

  return {
    ...getBaseCookieOptions(),
    expires: new Date(Date.now() + days * 24 * 60 * 60 * 1000),
  };
}

export function getJwtCookieClearOptions() {
  return getBaseCookieOptions();
}

export function getTokenFromCookie(cookieHeader) {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(/(?:^|;\s*)jwt=([^;]+)/);
  return match?.[1] ?? null;
}

export function verifyAuthToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}