import { useEffect, useState } from "react";
import { transformJsonData } from "../utils/helpers";
import rawData from "../assets/json/case.json";

export default function DataTransform() {
  const [transformedData, setTransformedData] = useState({});

  useEffect(() => {
    if (rawData && rawData["data"]) {
      const finalData = transformJsonData(rawData);
      setTransformedData(finalData);
    }
  }, []);

  return (
    <div>
      <h4>Instruksi 9: Transformasi JSON</h4>
      <div
        style={{
          backgroundColor: "#4C5762",
          padding: "15px",
          borderRadius: "5px",
        }}
      >
        <pre>
          {transformedData
            ? JSON.stringify(transformedData, null, 4)
            : "Loading..."}
        </pre>
      </div>
    </div>
  );
}
