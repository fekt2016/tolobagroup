import { useQuery } from '@tanstack/react-query';
import { getAllBlog } from '../../services/apiBlog';

export function useBlog() {
	const { isLoading, data, error } = useQuery({
		queryKey: ['blog'],
		queryFn: getAllBlog,
	});
	return { isLoading, data, error };
}
