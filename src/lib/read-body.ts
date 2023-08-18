import { IncomingMessage } from "http";

export const readBody = <T>(req: IncomingMessage): Promise<T> => {
  return new Promise((resolve, reject) => {
    const data: Buffer[] = [];

    if (req.method?.toUpperCase() === "GET" || !req.method) {
      return resolve({} as T);
    }

    req
      .on("error", (err) => {
        reject(err);
      })
      .on("data", (chunk) => {
        data.push(chunk);
      })
      .on("end", () => {
        const bodyStr = Buffer.concat(data).toString("utf-8");
        
        if (!bodyStr.trim()) {
          return resolve({} as T);
        }

        const isUrlEncoded =
          req.headers["content-type"] === "application/x-www-form-urlencoded";

        if (isUrlEncoded) {
          return resolve(
            Object.fromEntries(new URLSearchParams(bodyStr)) as T
          );
        }

        try {
          return resolve(JSON.parse(bodyStr));
        } catch (error) {
          // Here you can either reject with an error message or resolve with an empty object
          reject(new Error("Invalid JSON body")); // or resolve({} as T)
        }
      });
  });
};
