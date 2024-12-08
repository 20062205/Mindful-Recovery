import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Footer from './components/Footer';
import NavbarCmp from './components/NavbarCmp';
import Loader from './components/Loader';

const AppointmentScreen = React.lazy(() =>
  import('./screens/AppointmentScreen')
);
const ArticleDetailsScreen = React.lazy(() =>
  import('./screens/ArticleDetailsScreen')
);
const ArticlesScreen = React.lazy(() => import('./screens/ArticlesScreen'));
const CounselingScreen = React.lazy(() => import('./screens/CounselingScreen'));
// const HomeScreen = React.lazy(() => import('./screens/HomeScreen'));
const LoginScreen = React.lazy(() => import('./screens/LoginScreen'));
const RegisterScreen = React.lazy(() => import('./screens/RegisterScreen'));
const UserProfile = React.lazy(() => import('./screens/UserProfile'));

const Homepage = React.lazy(() => import('./screens/Homepage'));
const Quiz = React.lazy(() => import('./screens/Quiz'));
const VirtualDiary = React.lazy(() => import('./screens/VirtualDiary'));
const AudioTheraphy = React.lazy(() => import('./screens/AudioTheraphy'));
const Yoga = React.lazy(() => import('./screens/Yoga'));

// function App() {
//   return (
//     <Suspense fallback={<Loader />}>
//       <Provider store={store}>
//         <Router>
//           <NavbarCmp />
//           <Routes>
//             <Route path="/register" element={<RegisterScreen />} />
//             <Route path="/login" element={<LoginScreen />} />
//             <Route path="/profile" element={<UserProfile />} />
//             {/* <Route path="/selfCounsel" element={<CounselingScreen />} /> */}
//             {/* <Route path="/articles/:id" element={<ArticleDetailsScreen />} /> */}
//             {/* <Route path="/articles" element={<ArticlesScreen />} /> */}
//             {/* <Route path="/appointments" element={<AppointmentScreen />} /> */}
//             <Route path="/" exact element={<Homepage />} />
//             <Route path="/quiz" element={<Quiz />} />
//           </Routes>
//         </Router>
//         <Footer />
//       </Provider>
//     </Suspense>
//   );
// }

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/VirtualDiary" element={<VirtualDiary />} />
        <Route path="/AudioTheraphy" element={<AudioTheraphy />} />
        <Route path="/Yoga" element={<Yoga />} />
      </Routes>
    </Router>
  );
};

export default App;
