type GreetProps = {
  name: {
    first: string;
    last: string;
  };
  isLoggedIn: boolean;
  messageCount: number;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn
        ? `${props.name.first} ${props.name.last} ${props.messageCount} Year Old`
        : `Welcome Guess`}
    </div>
  );
};
