/**
 * Functional Component
 *
 */

export interface CongratsProps {
  success: boolean;
}

const Congrats: React.FunctionComponent<CongratsProps> = (props) => {
  if (props.success) {
    return (
      <section data-testid="component-congrats">
        <span data-testid="component-message">
          Congrats! You guessed the word
        </span>
      </section>
    );
  }

  return <section data-testid="component-congrats" />;
};

export default Congrats;
