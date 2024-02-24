import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBlog as blogApi } from '../../services/apiBlog';
import toast from 'react-hot-toast';

export function useCreateBlog() {
	const queryClient = useQueryClient();

	const { mutate: createBlog, isPending } = useMutation({
		mutationFn: (newBlog) => blogApi(newBlog),
		onSuccess: () => {
			toast.success('blog post created successfully');
			queryClient.invalidateQueries({
				queryKey: ['blog'],
			});
		},
	});
	console.log(isPending);

	return { createBlog, isPending };
}
