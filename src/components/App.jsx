import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Posts } from './Posts/Posts';
import './App.css';
// import { users } from 'Blended/Data/users';
// import { Section } from 'Blended/Section/Section';
// import { User } from 'Blended/User/User';
// import { UsersList } from 'Blended/UsersList/UsersList';

export const App = () => {
  return (
    <div className="App">
      {/* <Section title="List of users">
        <User user={users[0]}></User>
      </Section>
      <Section>
        <UsersList users={users}></UsersList>
      </Section> */}
      <div className="content">
        <Loader />
        <Header />
        <Hero />
        <Posts />
      </div>
      <Footer />
    </div>
  );
};

const Loader = ({ progress = 0.5 }) => {
  return (
    <div style={{ width: progress * 100 + '%' }} className="progress">
      Progress: {progress}
    </div>
  );
};
