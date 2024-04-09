import { next, rewrite } from "@vercel/edge";

export default function middleware(req) {
  const url = new URL(req.url);

  if (url.pathname != "/") {
    return rewrite(new URL(url.pathname, "https://blog.tjbai.me"));
  }

  return next();
}
