export default function MealDetailPage({ params }) {
  return (
    <main>
      <h1>Meal Detail Page</h1>
      <p>{params.slug}</p>
    </main>
  );
}
