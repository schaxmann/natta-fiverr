// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../libs/dbConnect";
import Digit from "../../../models/Digit";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { method, query } = req;
  const userDigits = query.userDigits as string;

  await dbConnect();

  // let latestChange = {};

  // Room.watch().on("change", (data: any) => {
  //   if (data.operationType == "update")
  //     console.log(data.updateDescription.updatedFields);
  // });

  switch (method) {
    case "POST":
      const room = await Digit.create({
        phoneNumber: userDigits,
      });
      res.status(200).json("success");
      break;
    default:
      res.status(400).json("no method for this endpoint");
      break;
  }
}
