import Input from "@/components/Input/Input";
import Page from "@/components/Page";
import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "https://realty-mole-property-api.p.rapidapi.com/zipCodes/";

export default function RentByLocation() {
  const [averageRent, setAverageRent] = useState<number>(0);
  const [zipCode, setZipCode] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`${baseUrl}${zipCode}`, {
            headers: {
              "X-RapidAPI-Key":
                "ca10514f8bmshd6b45cae8471005p15532cjsn391b0a9b25cf",
              "X-RapidAPI-Host": "realty-mole-property-api.p.rapidapi.com",
            },
          })
          .then((response) => {
            setAverageRent(response.data.rentalData.averageRent);
          });
      } catch (error) {
        console.log(error);
      }
    };
    if (zipCode) {
      fetchData();
    }
  }, [zipCode]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const zipCodeInputElement = event.currentTarget.elements.namedItem(
      "zipCode"
    ) as HTMLInputElement;
    const zipCode = zipCodeInputElement.value;
    setZipCode(zipCode);
    console.log(zipCode);
  };

  return (
    <Page title="Rent By Location">
      <form onSubmit={handleSubmit}>
        <label>
          <span className="pr-2">Enter your zip code</span>
          <Input type="text"></Input>
        </label>
        <button type="submit">Submit</button>
        <div>
          <label>{`$${averageRent}`}</label>
        </div>
      </form>
    </Page>
  );
}
