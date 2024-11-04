import React from 'react';

function ReviewsSection() {
  const reviews = [
    { student: 'Alice', comment: 'Very helpful and clear explanations.' },
    { student: 'Bob', comment: 'Great teacher! Makes difficult concepts easy.' },
    { student: 'Charlie', comment: 'Encouraging and supportive.' },
  ];

  return (
    <div>
      <h2>Student Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.student}:</strong> {review.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewsSection;
