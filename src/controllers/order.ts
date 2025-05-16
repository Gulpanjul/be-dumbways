import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export const getOrder = async (req: Request, res: Response) => {
	try {
		const groupedDatas = await prisma.order.groupBy({
			by: ["userId"],
			_sum: { quantity: true },
			orderBy: { userId: "asc" },
		});

		res.status(200).json({ data: groupedDatas });
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch datas" });
	}
};
