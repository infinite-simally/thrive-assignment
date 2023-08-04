import "./style.css";

type Props = {
  onLogin?: () => void;
};

const LoginPage = ({ onLogin }: Props) => {
  return (
    <div className='container'>
      <button className='login-btn' onClick={onLogin}>
        Log In
      </button>
    </div>
  );
};

export default LoginPage;
