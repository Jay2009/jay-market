import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const response = await (
    await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v1/direct_upload`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CLOUDFLARE_TOKEN}`,
        },
      }
    )
  ).json();
  console.log(response, "aaaaa");
  res.json({
    ok: true,
    url: "",
    ...response.result,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
