import RemoveBtn from "./Remove";
import AddTopic from "./AddTopic";
import EditTopic from "./EditTopic";
import { getTopics } from "./api/getTopic";

export default async function TopicsList(props) {
  const { topics } = await getTopics();

  return (
    <div>
      <AddTopic  />
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <EditTopic id={t._id} />
          </div>
        </div>
      ))}
    </div>
  );
}
