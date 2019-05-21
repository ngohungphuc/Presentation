import { Pipe, PipeTransform } from "@angular/core";

import * as dayjs from "dayjs";
import * as utc from "dayjs/plugin/utc";
import * as LocalizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(LocalizedFormat);
dayjs.extend(utc);

@Pipe({
  name: "customtime"
})
export class TimePipe implements PipeTransform {
  transform(value: Date, format?: string): string {
    const localize = navigator.language === "en-US" ? "en" : navigator.language;
    console.log(localize);
    require(`dayjs/locale/${localize}`);
    if (value) {
      const val = dayjs.utc(value).toDate();
      if (format) {
        switch (format) {
          case "time": {
            return dayjs(val, { locale: localize }).format("lll");
          }
          default:
        }
      }
      return dayjs(val, { locale: localize }).format("LLL");
    }
  }
}
