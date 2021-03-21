export const CustomTooltip = props => {
  console.log({ props });

  return (
    <div>
      <p>
        The value for <b>{new Date(props.x).toUTCString()}</b>
      </p>

      <p>
        is <b>{props.y}</b>, in series
      </p>
    </div>
  );
};
