import supabase, { supabaseUrl } from './supabase';

export async function createBlog(newBlog) {
	const imageName = `${Math.random()}-${newBlog.image.name}`.replaceAll(
		'/',
		''
	);
	const picsName = newBlog.pics.map((pic) =>
		`${Math.random()}-${pic.name}`.replaceAll('/', '')
	);

	const imagePath = `${supabaseUrl}/storage/v1/object/public/blog-images/${imageName}`;
	const picsPath = picsName.map(
		(pic) => `${supabaseUrl}/storage/v1/object/public/blog-images/${pic}`
	);

	const { data, error } = await supabase
		.from('blog')
		.insert([{ ...newBlog, image: imagePath, pics: [...picsPath] }]);

	if (error) {
		throw new Error('blog could not be loaded');
	}

	//Upload image to the bucket

	const { error: storageError } = await supabase.storage
		.from('blog-images')
		.upload(imageName, newBlog.image);

	picsName.map((pic, i) => {
		async function uploads() {
			const { error: storageError2 } = await supabase.storage
				.from('blog-images')
				.upload(pic, newBlog.pics[i]);

			if (storageError2) {
				await supabase.from('blog').delete().eq('id', data.id);
				console.log(storageError);
				throw new Error('Blog image could not be uploaded');
			}
		}
		uploads();
	});

	if (storageError) {
		await supabase.from('blog').delete().eq('id', data.id);
		console.log(storageError);
		throw new Error('Blog image could not be uploaded');
	}
	return data;
}

export async function getAllBlog() {
	const { data, error } = await supabase
		.from('blog')
		.select('*')
		.order('created_at', { ascending: false });
	if (error) {
		console.error(error);
		throw new Error('blog could not be loaded');
	}

	return data;
}
