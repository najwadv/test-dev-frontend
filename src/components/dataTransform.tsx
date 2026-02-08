import { useEffect, useState } from "react";
import { transformJsonData } from "../utils/helpers";
import rawData from "../assets/json/case.json";
import TerminalContainer from "./terminalContainer";

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
      <TerminalContainer>
        {JSON.stringify(transformedData, null, 4)}
      </TerminalContainer>
    </div>
  );
}
