import React from "react";

import { CreateStudySessionData, StudySessionMode as Mode } from "@/modules/StudySession/models";
import { formSchema } from "@/modules/StudySession/schemas";
import useFormWithYup from "@/modules/utils/useFormWithYup";

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormWithYup<CreateStudySessionData>(formSchema);

  const onSubmit = async (data: CreateStudySessionData) => {
    try {
      let result = await fetch("/api/study-sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      result = await result.json();
      window.alert("Study Session Created :D");
      return result;
    } catch (error) {
      window.alert("ERROr :(");
      return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="cardsAmount">
          Cards Amount
          <input id="cardsAmount" defaultValue="0" {...register("cardsAmount")} />
        </label>
        <p>{!!errors && errors.cardsAmount?.message}</p>
      </div>

      <div>
        <label htmlFor="collectionId">
          Collection ID
          <input id="collectionId" defaultValue="0" {...register("collectionId")} />
        </label>
        <p>{!!errors && errors.collectionId?.message}</p>
      </div>

      <div>
        <label htmlFor="date">
          Date
          <input id="date" type="date" {...register("date")} />
        </label>
        <p>{!!errors && errors.date?.message}</p>
      </div>

      <div>
        <label htmlFor="mode">
          Mode
          <select id="mode" {...register("mode")}>
            <option value={Mode.JEOPARDY}>Jeopardy</option>
            <option value={Mode.COMBINED}>Combined</option>
            <option value={Mode.NORMAL}>Normal</option>
          </select>
        </label>
        <p>{!!errors && errors.mode?.message}</p>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
