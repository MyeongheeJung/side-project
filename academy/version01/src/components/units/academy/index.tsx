import { Container, Section } from "../../../commons/styles/container";
import { SubText, SubTitle, Title } from "../../../commons/styles/text";
import CompanyList from "../company/list/CompanyList";
import InformationList from "../information/list/InformationList";

export default function Academy() {
  return (
    <Container>
      <Section>
        <SubTitle>학원 탐색 🔍</SubTitle>
        <SubText size="1.4rem" mt="1rem" mb="3rem">
          학원의 정석에서 다양한 학원을 알아보세요!
        </SubText>
        {/* <CompanyList /> */}
        <InformationList />
      </Section>
    </Container>
  );
}
