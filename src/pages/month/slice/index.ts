import { createSlice } from "@reduxjs/toolkit";
import { MonthProps } from "../types";

export {};

const initialState: MonthProps = {
  title: "Month Review",
  subTitle:
    "As we say goodbye to the past month, let's take a moment to think about what happened. Life is like a story, and each month adds a new part to it. Think about the good things that happened, the lessons you learned, and the small victories you achieved. Life is made up of moments, like pieces of a puzzle coming together. Be grateful for the good things, both big and small. Each month is like a different tune in the music of your life. So, as we finish this chapter, let's appreciate the moments, learn from them, and look forward to what the next month will bring. Life is an ongoing adventure, and each month is a new page in your story.",
  data: [
    {
      id: "month",
      order: 1,
      title: "Monthly Report",
      description: "Top 3 things I accomplished in the past weeks.",
      data: [
        { type: "text", title: "1.", value: "Lorem Ipsum 1" },
        { type: "text", title: "2.", value: "Random Value 2" },
        { type: "text", title: "3.", value: "Something Here 3" },
      ],
    },
    {
      id: "month",
      order: 2,
      title: "Second Section",
      description: "How do I feel about my progress so far?",
      data: [{ type: "text", title: "1.", value: "ABC123" }],
    },
    {
      id: "month",
      order: 3,
      title: "Third Section",
      description: "Top 3 task to accomplished in the next 4 weeks.",
      data: [
        { type: "text", title: "1.", value: "Random Text 1" },
        { type: "text", title: "2.", value: "Testing 2" },
        { type: "text", title: "3.", value: "Lorem Ipsum 3" },
      ],
    },
    {
      id: "month",
      order: 4,
      title: "Fourth Section",
      description: "Major challenges for the next 4 weeks.",
      data: [{ type: "text", title: "1.", value: "Value XYZ" }],
    },
  ],
};
const monthSlice = createSlice({
  name: "month",
  initialState,
  reducers: {},
});

export default monthSlice.reducer;
