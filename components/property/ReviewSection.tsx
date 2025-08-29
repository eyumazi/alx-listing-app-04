import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: string;
  avatar: string;
  name: string;
  rating: number;
  comment: string;
  date?: string;
}

interface ReviewSectionProps {
  propertyId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `/api/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (err) {
        setError("Error fetching reviews.");
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return (
      <div className="mt-8">
        <p className="text-gray-500">Loading reviews...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="mt-8">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
      {reviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet.</p>
      ) : (
        <div className="grid gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-4 mb-4">
              <div className="flex items-center">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4 border"
                />
                <div>
                  <p className="font-bold text-lg">{review.name}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                      ))}
                    </span>
                    <span className="text-sm text-gray-600">
                      {review.rating} / 5
                    </span>
                    {review.date && (
                      <span className="text-xs text-gray-400 ml-2">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <p className="mt-2 text-gray-700 italic">"{review.comment}"</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
