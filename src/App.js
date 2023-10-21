import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Blogs from './components/blogs/Blogs';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';
import GalleryMain from './components/gallery-main/GalleryMain';
import Events from './components/events/Events';
import Publication from './components/publications/Publication';
import OurWorks from './components/ourWroks/OurWorks';
import OurPartners from './components/ourPartners/OurPartners';
import MemberCart from './components/memberCart/MemberCart';
import MyProfile from './components/myProfile/MyProfile';
import Login from './components/logingRegistration/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import DashBlog from './components/dashboard/blog/DashBlog';
import DashEvents from './components/dashboard/events/DashEvents';
import DashGallery from './components/dashboard/gallery/DashGallery';
import DashPublications from './components/dashboard/publications/DashPublications';
import PanelBoard from './components/controllPanel/panelboard/PanelBoard';
import PanelBlog from './components/controllPanel/panelBlog/PanelBlog';
import PanelEvent from './components/controllPanel/PanelEvent/PanelEvent';
import PanelGallery from './components/controllPanel/PanelGallery/PanelGallery';
import PanelPublication from './components/controllPanel/PanelPublication/PanelPublication';
import MemberLogin from './components/logingRegistration/memberLogin/MemberLogin';
import RequireMember from './Varification/RequireMember';
import RequireAdmin from './Varification/RequireAdmin';
import RequireProfile from './Varification/RequireProfile';
import PanelMember from './components/controllPanel/PanelMember/PanelMember';
import PanelRequests from './components/controllPanel/PanelRequests/PanelRequests';
import PanelTransection from './components/controllPanel/PanelTransection/PanelTransection';
import PaymentSuccess from './components/paymentSuccess/PaymentSuccess';
import PaymentFail from './components/PaymentFail/PaymentFail';
import DashTransection from './components/DashTransection/DashTransection';
import QrProfile from './components/Qr-profile/QrProfile';
import BlogHomeDetail from './components/blogHome/BlogHomeDetail';
import PanelPaymentHistory from './components/controllPanel/panelboard/panelPaymentHistory/PanelPaymentHistory';
import PanelPaymentView from './components/controllPanel/panelboard/PanelPaymentView/PanelPaymentView';
import DashPaymentHistory from './components/DashTransection/DashPaymentHistory/DashPaymentHistory';
import Contactus from './components/contactus/Contactus';
import AboutDetails from './components/aboutDetails/AboutDetails';
import Committee from './components/committee/Committee';
import Founder from './components/founder/Founder';





function App() {
  const [navScroll, setNavScroll] = useState(false);
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div className="App">
      <Navbar darkmode={darkmode} setDarkmode={setDarkmode} navScroll={navScroll} ></Navbar>
      <ToastContainer style={{ marginTop: '120px' }} />
      <Routes>
        <Route path='/' element={<Home darkmode={darkmode} setNavScroll={setNavScroll} ></Home>} />
        <Route path='/blogs' element={<Blogs darkmode={darkmode} ></Blogs>} />
        <Route path='/blogsDetail/:blogId' element={<BlogHomeDetail></BlogHomeDetail>} />
        <Route path='/qrProfile/:id' element={<QrProfile darkmode={darkmode} ></QrProfile>} />
        <Route path='/gallery' element={<GalleryMain darkmode={darkmode}></GalleryMain>} />
        <Route path='/events' element={<Events darkmode={darkmode}></Events>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/aboutDetail' element={<AboutDetails darkmode={darkmode}></AboutDetails>} />
        <Route path='/publication' element={<Publication darkmode={darkmode}></Publication>} />
        <Route path='/works' element={<OurWorks darkmode={darkmode}></OurWorks>} />
        <Route path='/partners' element={<OurPartners darkmode={darkmode}></OurPartners>} />
        <Route path='/members' element={<MemberCart darkmode={darkmode}></MemberCart>} />
        <Route path='/contact' element={<Contactus darkmode={darkmode}></Contactus>} />
        <Route path='/committee' element={<Committee darkmode={darkmode}></Committee>} />
        <Route path='/founder' element={<Founder darkmode={darkmode}></Founder>} />
        <Route path='/payment/success'
          element={
            <RequireProfile>
              <PaymentSuccess></PaymentSuccess>
            </RequireProfile>
          }
        />
        <Route path='/payment/fail'
          element={
            <PaymentFail></PaymentFail>
          }
        />
        <Route path='/myProfile'
          element={
            <RequireProfile>
              <MyProfile darkmode={darkmode}></MyProfile>
            </RequireProfile>
          }
        />
        <Route path='/login' element={<Login darkmode={darkmode}></Login>} />
        <Route path='/memberLogin' element={<MemberLogin darkmode={darkmode}></MemberLogin>} />
        <Route path='/dashboard'
          element={
            <RequireMember>
              <Dashboard darkmode={darkmode}></Dashboard>
            </RequireMember>}
        >
          <Route index to='' element={<DashBlog darkmode={darkmode}></DashBlog>}></Route>
          <Route path='event' element={<DashEvents darkmode={darkmode}></DashEvents>}></Route>
          <Route path='gallery' element={<DashGallery darkmode={darkmode}></DashGallery>}></Route>
          <Route path='publication' element={<DashPublications darkmode={darkmode}></DashPublications>}></Route>
          <Route path='dashTransection' element={<DashTransection darkmode={darkmode}></DashTransection>}></Route>
          <Route path='dashPaymentHistory' element={<DashPaymentHistory darkmode={darkmode}></DashPaymentHistory>}></Route>
        </Route>

        <Route path='/panelBoard'
          element={
            <RequireAdmin>
              <PanelBoard darkmode={darkmode}></PanelBoard>
            </RequireAdmin>
          }
        >
          <Route index to='' element={<PanelBlog darkmode={darkmode}></PanelBlog>}></Route>
          <Route path='event' element={<PanelEvent darkmode={darkmode}></PanelEvent>}></Route>
          <Route path='gallery' element={<PanelGallery darkmode={darkmode}></PanelGallery>}></Route>
          <Route path='publication' element={<PanelPublication darkmode={darkmode}></PanelPublication>}></Route>
          <Route path='panelMember' element={<PanelMember darkmode={darkmode}></PanelMember>}></Route>
          <Route path='panelRequest' element={<PanelRequests darkmode={darkmode}></PanelRequests>}></Route>
          <Route path='panelTransection' element={<PanelTransection darkmode={darkmode}></PanelTransection>}></Route>
          <Route path='panelPayHistory' element={<PanelPaymentHistory darkmode={darkmode}></PanelPaymentHistory>}></Route>
          <Route path='panelPayView' element={<PanelPaymentView darkmode={darkmode}></PanelPaymentView>}></Route>
        </Route>
      </Routes>

      {/* <div className='w-full h-80 flex items-center justify-center'>
        <p className='text-red-500'>website is under development...</p>
      </div> */}

    </div>
  );
}

export default App;


// github email: optometrist501@gmail.com
// password: qMAux5QvPDFt@e5

/* 
 optometrist501@gmail.com
  optometRist_501@#
*/
