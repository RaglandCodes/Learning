import { serve } from "https://deno.land/std@v0.22.0/http/server.ts";
const body = new TextEncoder().encode("Yo World\n");
const s = serve(":8000");
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body });
}