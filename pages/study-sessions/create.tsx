import {
  CreateStudySessionData,
  StudySessionData,
  StudySessionMode as Mode,
} from "@/modules/StudySession/models";
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
    } catch (error) {
      window.alert("ERROr :(");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="cardsAmount">Cards Amount</label>
        <input id="cardsAmount" defaultValue="0" {...register("cardsAmount")} />
        <p>{!!errors && errors.cardsAmount?.message}</p>
      </div>

      <div>
        <label htmlFor="collectionId">Collection ID</label>
        <input id="collectionId" defaultValue="0" {...register("collectionId")} />
        <p>{!!errors && errors.collectionId?.message}</p>
      </div>

      <div>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" {...register("date")} />
        <p>{!!errors && errors.date?.message}</p>
      </div>

      <div>
        <label htmlFor="mode">Mode</label>
        <select id="mode" {...register("mode")}>
          <option value={Mode.JEOPARDY}>Jeopardy</option>
          <option value={Mode.COMBINED}>Combined</option>
          <option value={Mode.NORMAL}>Normal</option>
        </select>
        <p>{!!errors && errors.mode?.message}</p>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
