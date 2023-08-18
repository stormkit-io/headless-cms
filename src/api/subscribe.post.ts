import http from "node:http";
import { readBody } from "~/lib/read-body";

export default async (req: http.IncomingMessage, res: http.ServerResponse) => {
  const body = await readBody(req);
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200, "Success");
  res.write(JSON.stringify({ payload: body }));
  res.end();
};
