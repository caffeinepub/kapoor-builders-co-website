import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Review } from '../backend';

export function useGetAllReviews() {
  const { actor, isFetching } = useActor();

  return useQuery<Review[]>({
    queryKey: ['reviews'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllReviews();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitReview() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, rating, message }: { name: string; rating: number; message: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.submitReview(name, BigInt(rating), message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
  });
}

export function useSubmitContactMessage() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async ({ name, phone, message }: { name: string; phone: string; message: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.submitContactMessage(name, phone, message);
    },
  });
}
