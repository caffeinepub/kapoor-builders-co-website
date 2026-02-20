import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useGetAllReviews, useSubmitReview } from '../hooks/useQueries';

export function ReviewsSection() {
  const { data: reviews = [], isLoading } = useGetAllReviews();
  const submitReviewMutation = useSubmitReview();

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [formData, setFormData] = useState({ name: '', rating: 5, message: '' });

  const handlePrevious = () => {
    setCurrentReviewIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentReviewIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    try {
      await submitReviewMutation.mutateAsync({
        name: formData.name,
        rating: formData.rating,
        message: formData.message,
      });
      setFormData({ name: '', rating: 5, message: '' });
    } catch (error) {
      console.error('Failed to submit review:', error);
    }
  };

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => interactive && onRatingChange?.(star)}
            disabled={!interactive}
            className={`${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'} transition-transform`}
          >
            <Star
              className={`h-5 w-5 ${
                star <= rating ? 'fill-gold text-gold' : 'fill-none text-navy/20'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-navy/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-navy">
              Client <span className="text-gold">Reviews</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto">
              Hear what our satisfied clients have to say about their experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Testimonial Slider */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">Customer Testimonials</h3>
              {isLoading ? (
                <Card className="p-8">
                  <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-navy/10 rounded w-3/4"></div>
                    <div className="h-4 bg-navy/10 rounded w-full"></div>
                    <div className="h-4 bg-navy/10 rounded w-5/6"></div>
                  </div>
                </Card>
              ) : reviews.length > 0 ? (
                <div className="relative">
                  <Card className="bg-white shadow-xl border-navy/10">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <CardTitle className="text-xl text-navy">
                          {reviews[currentReviewIndex].name}
                        </CardTitle>
                        {renderStars(Number(reviews[currentReviewIndex].rating))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-navy/70 leading-relaxed italic">
                        "{reviews[currentReviewIndex].message}"
                      </p>
                    </CardContent>
                  </Card>

                  {reviews.length > 1 && (
                    <div className="flex justify-center gap-4 mt-6">
                      <Button
                        onClick={handlePrevious}
                        variant="outline"
                        size="icon"
                        className="rounded-full border-navy/20 hover:bg-navy hover:text-white"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <div className="flex items-center gap-2">
                        {reviews.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentReviewIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              index === currentReviewIndex ? 'w-8 bg-gold' : 'w-2 bg-navy/20'
                            }`}
                          />
                        ))}
                      </div>
                      <Button
                        onClick={handleNext}
                        variant="outline"
                        size="icon"
                        className="rounded-full border-navy/20 hover:bg-navy hover:text-white"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <Card className="p-8 text-center">
                  <p className="text-navy/70">No reviews yet. Be the first to share your experience!</p>
                </Card>
              )}
            </div>

            {/* Review Submission Form */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">Share Your Experience</h3>
              <Card className="bg-white shadow-xl border-navy/10">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-navy font-medium">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        required
                        className="border-navy/20 focus:border-gold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-navy font-medium">Rating *</Label>
                      {renderStars(formData.rating, true, (rating) =>
                        setFormData({ ...formData, rating })
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-navy font-medium">
                        Your Review *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share your experience with us..."
                        rows={5}
                        required
                        className="border-navy/20 focus:border-gold resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitReviewMutation.isPending}
                      className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold py-6 rounded-xl transition-all duration-300 hover:shadow-lg"
                    >
                      {submitReviewMutation.isPending ? 'Submitting...' : 'Submit Review'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
