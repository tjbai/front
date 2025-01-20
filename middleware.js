import { next, rewrite } from "@vercel/edge";

export default function middleware(req) {
  const url = new URL(req.url);
  return next();
}
