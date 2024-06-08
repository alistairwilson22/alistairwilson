type Props = {
    children?: React.ReactNode;
    classes?: string
};  

export default function FlexCenter({ children, classes }: Props) {
  return (
    <div className={`flex flex-col justify-center items-center ${classes}`}>
        { children }
    </div>
  )
}
