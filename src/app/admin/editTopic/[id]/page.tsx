import EditTopicForm from "../../../../components/AdminComponents/EditTopicForm";



export default async function EditTopic({ params } :{params:any}) {
  const { id } = params;

  return <EditTopicForm id={id}  />;
}
