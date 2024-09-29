import Form from "./Form";
import * as S from "./styled";
import SectionTitle from "../SectionTitle";

function Profile() {
  return (
    <S.Section>
      <SectionTitle title="회원 정보 수정" />
      <Form />
    </S.Section>
  );
}

export default Profile;
