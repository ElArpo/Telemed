import { put } from '@vercel/blob';
import { PrismaClient } from '@prisma/client';

export async function POST({ request, cookies }) {
	const formData = await request.formData();
	const data = formData.get('file');
	if (!data || data.name === 'undefined') {
		return fail(400, {
			error: true,
			message: 'You must provide a file to upload'
		});
	}
	const { url } = await put('data/' + data.name, data, { access: 'public' });
	//Update the user image (await that it is done, else it will not be done before the response is sent back)
	await new PrismaClient().user.update({
		where: { id: request.user.id },
		data: { image: url }
	});
	//Response that sends you back to previous page
	let resp = new Response('OK', { status: 303 });
	resp.headers.set('Location', '/diary');
	return resp;
}