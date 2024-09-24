import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FilterService {
  constructor() {}

  filterItems(searchText: string, data: any[], filterKey: string) {
    let filteredData;
    filteredData = data.filter((data: any) => {
      let datas = data[filterKey].toLowerCase();
      return datas.includes(searchText.toLowerCase());
    });
    return filteredData;
  }
}
