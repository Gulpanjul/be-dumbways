import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	// Clear old data
	await prisma.user.deleteMany();

	// Create Users
	await prisma.user.createMany({
		data: [
			{ name: "Alice", email: "alice@example.com", points: 1500 },
			{ name: "Bob", email: "bob@example.com", points: 800 },
			{ name: "Charlie", email: "charlie@example.com", points: 300 },
		],
	});

}

main()
	.then(() => {
		console.log("seeding completed ✅");
	})
	.catch((e) => {
		console.error(e);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
