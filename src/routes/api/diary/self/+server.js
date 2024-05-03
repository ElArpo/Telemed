import { PrismaClient } from '@prisma/client';

export async function GET({ request, cookies }) {
	const prisma = new PrismaClient();
	const res = await prisma.user.findFirst({
		where: {
			id: request.user.id
		},
		include: {
			Dairy: true
		}
	});
	return new Response(JSON.stringify(res), { status: 200 });
}