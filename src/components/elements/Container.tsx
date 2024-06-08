type Props = {
    children?: React.ReactNode;
  };  

export default function Container({ children }: Props) {
  return (
    <div className="container">
        <div className="max-w-[80%] m-auto">
            { children }
        </div>
    </div>
  )
}
