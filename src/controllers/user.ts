import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export const getUser = async (req: Request, res: Response) => {
	try {
		const id = parseInt(req.params.id);
		const users = await prisma.user.findUnique({ where: { id } });
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch datas" });
	}
};

export const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await prisma.user.findMany();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch datas" });
	}
};

export const createUser = async (req: Request, res: Response) => {
	try {
		const { name, email } = req.body;
		const users = await prisma.user.create({
			data: { name, email },
		});
		res.status(201).json(users);
	} catch (error) {
		res.status(500).json({ error: "Failed to create product" });
	}
};
