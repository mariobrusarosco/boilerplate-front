export interface PageTemplateProps {
  heading: string;
  body: string;
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => {
  return (
    <section>
      <header>This is the Header</header>

      <h1 dangerouslySetInnerHTML={{ __html: heading }} />

      <main dangerouslySetInnerHTML={{ __html: body }} />
    </section>
  );
};

export default PageTemplate;
