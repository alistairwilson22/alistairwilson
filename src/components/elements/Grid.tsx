type Props = {
    children?: React.ReactNode;
    classes?: string
};  

export default function Grid({ children, classes }: Props) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 ${classes}`}>
        { children }
    </div>
  )
}
