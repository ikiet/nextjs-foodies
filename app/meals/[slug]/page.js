import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import Image from "next/image";

export default function MealDetailPage({ params }) {
  const meal = getMeal(params.slug);
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator_email}</a>
          </p>
          <p className={classes.summary}>{meal.creator}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
        >{meal.instructions}</p>
      </main>
    </>
  );
}
