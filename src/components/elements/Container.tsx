type Props = {
    children?: React.ReactNode;
    classes?: string;
  };  

export default function Container({ children, classes }: Props) {
  return (
    <div className="container">
        <div className={`max-w-[80%] m-auto ${classes}`}>
            { children }
        </div>
    </div>
  )
}
