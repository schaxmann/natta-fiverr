// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../libs/dbConnect";
import Question from "../../../models/Question";

type Question = {
  question: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      const question = await Question.aggregate([{ $sample: { size: 1 } }]);
      res.status(200).json(question);
      break;
    default:
      res.status(400).json("no method for this endpoint");
      break;
  }
}
