import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const allData = [
  {
    id: 1,
    title: "Lorem Ipsum",
    content:
      "If I wanna talk to you, man I fucking talk to you ! So next time don't mess with me covey !!! Then, about the money, four pounds... foooour pounds as if two pounds wasn't bad enough. we're talking two three hundred boxes of sinus pills there ain't that many Smurfs in the world. So no sudo? So you do have a plan! Yeah, Mr. White! Yeah, science! ",
  },
  {
    id: 2,
    title: "Schnapsum",
    content: "Eh mister ! You got the time ? As a matter of fact I do covey !",
  },
  {
    id: 3,
    title: "Cupcake Ipsum",
    content: "Tiramisu pastry wafer brownie soufflé",
  },
];

type Data = (typeof allData)[0];

const getSomeData = (id: number) => {
  return allData.find((article) => article.id === id) as Data | null;
};

export default function Article() {
  const { id } = useParams();

  const [data, setData] = useState(null as Data | null);

  useEffect(() => {
    const idAsInt = parseInt(id ?? "0");

    const someData = getSomeData(idAsInt);

    setData(someData);
  }, [id]);

  return (
    data != null && (
      <article>
        <h1>{data.title}</h1>
        <p>{data.content}</p>
      </article>
    )
  );
}
