import Papa from "papaparse";

export interface EVData {
  vehicle_id: string;
  county: string;
  city: string;
  state: string;
  zipcode: string;
  year: number;
  manufacturer: string;
  model: string;
  vehicle_type: string;
  clean_fuel_eligibility: string;
  ev_count: number;
  location: string;
  utility_company: string;
  utility_id: string;
}


export const parseCSV = (csvFile: string): Promise<EVData[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(csvFile, {
      complete: (result) => {
      
        const data = result.data.map((row: any) => ({
          vehicle_id: row[0],
          county: row[1],
          city: row[2],
          state: row[3],
          zipcode: row[4],
          year: parseInt(row[5], 10),
          manufacturer: row[6],
          model: row[7],
          vehicle_type: row[8],
          clean_fuel_eligibility: row[9],
          ev_count: parseInt(row[10], 10),
          location: row[11], 
          utility_company: row[12],
          utility_id: row[13],
        }));
        resolve(data);
      },
      error: (error: any) => reject(error),
      header: false, 
    });
  });
};
