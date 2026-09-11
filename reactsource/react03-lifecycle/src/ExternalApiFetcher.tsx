import RandomUser, { type User } from "./RandomUser";

const ExternalApiFetcher = () => {
  const onProfile = async (user: User) => {
    // cell, gender, username, password
    // 전화번호 :
    // 성별 :
    alert(
      `전화번호 : ${user.cell}\n성별 : ${user.gender}\n유저이름 : ${user.login.username}\n비밀번호 : ${user.login.password} \n `,
    );
  };
  return (
    <div>
      <h2 className="text-2xl">외부 서버 통신</h2>
      <RandomUser onProfile={onProfile} />
    </div>
  );
};

export default ExternalApiFetcher;
