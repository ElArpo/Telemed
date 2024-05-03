import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

export async function POST({ request, cookies }) {
	const body = await request.json();
	const prisma = new PrismaClient();
	const hash = await bcrypt.hash(body.password, 10); 
	try {
		const res = await prisma.user.create({
			data: {
				username: body.username,
				email: body.email,
				name: body.name,
				hashPass: hash
			}
		});
		console.log(res);
	} catch (e) {
		console.error(e);
		if (e.code === 'P2002') {
		  return new Response('Duplicate entry', { status: 409 });
		} else {
		  return new Response(`Unknown Error: ${e.message}`, { status: 500 });
		}
	  }
	}

export async function GET({ request, cookies }) {
	console.log(request.user);
	const prisma = new PrismaClient({ log: ['query'] });
	const res = await prisma.user.findMany();
	return new Response(JSON.stringify(res), { status: 200 });
}

export async function DELETE({ request, cookies }) {
	const body = await request.json();
	const prisma = new PrismaClient();
	const res = await prisma.user.delete({ where: { email: body.email } });
	return new Response('Deleted', { status: 200 });
}