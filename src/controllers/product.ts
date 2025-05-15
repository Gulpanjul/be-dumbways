import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export const getProduct = async (req: Request, res: Response) => {
	try {
		const id = parseInt(req.params.id);
		const products = await prisma.product.findUnique({ where: { id } });
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch datas" });
	}
};

export const getProducts = async (req: Request, res: Response) => {
	try {
		const products = await prisma.product.findMany();
		res.status(200).json(products);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch datas" });
	}
};

export const createProduct = async (req: Request, res: Response) => {
	try {
		const { name, price } = req.body;
		const products = await prisma.product.create({
			data: { name, price: parseFloat(price) },
		});
		res.status(201).json(products);
	} catch (error) {
		res.status(500).json({ error: "Failed to create product" });
	}
};
