import Papa from "papaparse";
import { json } from "react-router-dom";
import * as XLSX from "xlsx";

export const convertFileToJSON = async (file: File) => {
  const extension = file.name.split(".").pop()?.toLowerCase();

  if (extension === "csv") {
    const reader = new FileReader();

    reader.onload = () => {
      const csvData = reader.result as string;

      Papa.parse<any[]>(csvData, {
        complete: (parsedResult) => {
          if (
            parsedResult.data.length < 1 ||
            !Array.isArray(parsedResult.data[0])
          ) {
            console.error(
              "CSV file must have at least one row with valid headers"
            );
            return;
          }

          const headers = parsedResult.data[0];
          const jsonData = parsedResult.data.slice(1).map((row) => {
            const obj: any = {};
            headers.forEach((header, index) => {
              obj[header] = row[index];
            });
            return obj;
          });

          return jsonData;
        },
        header: true,
      });
    };

    reader.readAsText(file);
  } else if (extension === "xls" || extension === "xlsx") {
    const reader = new FileReader();

    reader.onload = () => {
      const data = new Uint8Array(reader.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });

      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      return jsonData;
    };

    reader.readAsArrayBuffer(file);
  } else {
    console.error("Unsupported file type");
  }
};
