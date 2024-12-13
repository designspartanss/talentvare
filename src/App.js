import ProfileBar from './components/ProfileBar/ProfileBar';
import Header from './components/Header/Header';
import JobSearch from './components/JobSearch/JobSearch';
import JobList from './components/JobList/JobList';


function App() {
  return (
    <>
    <Header />
    <div className="app d-md-flex">
    <div className="sidebar-container">
      <ProfileBar />
    </div>
    <div className="content-container flex-grow-1">
      <JobSearch />
      <JobList job={'Featured'}/>
      <JobList job={'Recommended'}/>
    </div>
  </div>
  </>
  );
}

export default App;
