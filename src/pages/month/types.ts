interface InputFieldProps {
  type: string;
  title: string;
  value: string;
}

type MonthProps = {
  title: string;
  subTitle: string;
  data: {
    id: string;
    order: number;
    description: string;
    title: string;
    data: InputFieldProps[];
  }[];
};
export type { MonthProps, InputFieldProps };
