import {
  Body,
  Header,
  Section,
  Footer
} from "../../components/LayoutDefault/styles";

type Props = {
  header: JSX.Element,
  section: JSX.Element,
  footer: JSX.Element
}

export const LayoutDefault: React.FC<Props> = ({ header, section, footer }) => {

  return (
    <Body>
      <Header>{header}</Header>
      <Section>{section}</Section>
      <Footer>{footer}</Footer>
    </Body>
  )
}