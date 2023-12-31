import { ResponsiveCalendar, CalendarSvgProps } from "@nivo/calendar";
import React from "react";

export const Calendar = (props: Omit<CalendarSvgProps, "height" | "width">) => {
  return (
    <ResponsiveCalendar
      monthSpacing={22}
      emptyColor="#272727"
      colors={[
        "#003f5c",
        "#444e86",
        "#955196",
        "#dd5182",
        "#ff6e54",
        "#ffa600",
      ]}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      dayBorderColor="#272727"
      monthBorderColor="#272727"
      yearSpacing={40}
      dayBorderWidth={2}
      legends={[
        {
          anchor: typeof window !== "undefined" && window.innerWidth / window.innerHeight < 1 ? 'left' : 'top',
          translateX: typeof window !== "undefined" && window.innerWidth / window.innerHeight < 1 ? 0 : -50,
          direction: typeof window !== "undefined" && window.innerWidth / window.innerHeight < 1 ? 'column' : 'row',
          itemCount: 8,
          itemWidth: 42,
          itemHeight: 30,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
          itemTextColor: "#DBDFD8", //framed-white
        },
      ]}
      theme={{ textColor: "#DBDFD8" }} //framed-white
      direction={typeof window !== "undefined" && window.innerWidth / window.innerHeight < 1 ? 'vertical' : 'horizontal'}
      align={typeof window !== "undefined" && window.innerWidth / window.innerHeight < 1 ? 'right' : 'center'}
      {...props}
    />
  );
};
