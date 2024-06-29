import EditTopicForm from "./EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ id }) {
  const { topic } = await getTopicById(id);

  const { title,subtitle, description, price, category, imageFileUrl,pdfFileUrl } = topic;

  return <EditTopicForm id={id} title={title} subtitle={subtitle} description={description} price={price} category={category} imageFileUrl={imageFileUrl} pdfFileUrl={pdfFileUrl}/>;
}







